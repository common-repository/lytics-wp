<?php

/**
 * Provide a public-facing view for the plugin
 *
 * This file is used to markup the public-facing aspects of the plugin.
 *
 * @link       https://lytics.com
 * @since      1.0.0
 *
 * @package    LyticsWP
 * @subpackage lyticswp/public/partials
 */
?>

<?php
if (! defined('ABSPATH')) exit; // Exit if accessed directly
?>

<?php
$account_id = get_option('lyticswp_account_id');
$tag_enabled = get_option('lyticswp_enable_tag');

if (!$account_id || !$tag_enabled) {
  return;
}

$args = array(
  'post_type' => 'lyticswp_widget',
  'posts_per_page' => -1,
);

$query = new WP_Query($args);

function lyticswpConvertJsonToJs($config)
{
  $cfgObj = json_decode($config);
  $details = $cfgObj->details;
  $payload = $cfgObj->config;
  $type = ucfirst($details->type);

  // special handler for recommendation since they are messages
  if ($type === 'Recommendation') {
    $type = 'Message';
  }

  // generate output
  $variable = '_pfacfg_' . $payload->id;
  $output = 'var ' . $variable . ' = {};' . "\n";;

  foreach ($payload as $key => $value) {
    if (is_string($value)) {
      if ($key === "onInit" || $key === "onLoad") {
        if ($value !== "") {
          $output .= $variable . '.' . $key . ' = ' . $value . ';' . "\n";
        }
      } else {
        $output .= $variable . '.' . $key . ' = "' . $value . '";' . "\n";;
      }
    } else {
      if ($key === "confirmAction" || $key === "cancelAction" || $key === "closeAction") {
        if ($value->callback !== "") {
          $output .= $variable . '.' . $key . ' = {
                  "name": "' . $value->name . '",
                  "callback": ' . $value->callback . '
                }' . "\n";
        }
      } else {
        $output .= $variable . '.' . $key . ' = ' . wp_json_encode($value) . ';' . "\n";
      }
    }
  }

  $output .= '__ly_modules.push({
          "segment": "' . $details->audience . '",
          "widget": new pathfora.' . $type . '(_pfacfg_' . $payload->id . ')
        });' . "\n";;

  return $output;
}

$outputJS = 'var __ly_modules = [];';
if ($query->have_posts()) {

  while ($query->have_posts()) {
    $query->the_post();
    $widget = get_post_meta(get_the_ID(), '_lyticswp_widget_configuration', true);
    $js = lyticswpConvertJsonToJs($widget);
    $outputJS .= $js;
  }

  wp_reset_postdata();
}

echo '
  <script type="text/javascript">
    // Start Lytics Tag Install
    !function(){"use strict";var o=window.jstag||(window.jstag={}),r=[];function n(e){o[e]=function(){for(var n=arguments.length,t=new Array(n),i=0;i<n;i++)t[i]=arguments[i];r.push([e,t])}}n("send"),n("mock"),n("identify"),n("pageView"),n("unblock"),n("getid"),n("setid"),n("loadEntity"),n("getEntity"),n("on"),n("once"),n("call"),o.loadScript=function(n,t,i){var e=document.createElement("script");e.async=!0,e.src=n,e.onload=t,e.onerror=i;var o=document.getElementsByTagName("script")[0],r=o&&o.parentNode||document.head||document.body,c=o||r.lastChild;return null!=c?r.insertBefore(e,c):r.appendChild(e),this},o.init=function n(t){return this.config=t,this.loadScript(t.src,function(){if(o.init===n)throw new Error("Load error!");o.init(o.config),function(){for(var n=0;n<r.length;n++){var t=r[n][0],i=r[n][1];o[t].apply(o,i)}r=void 0}()}),this}}();
    // Define config and initialize Lytics tracking tag.
    // - The setup below will disable the automatic sending of Page Analysis Information (to prevent duplicative sends, as this same information will be included in the jstag.pageView() call below, by default)
    jstag.init({
      src: "https://c.lytics.io/api/tag/' . esc_html($account_id) . '/latest.min.js",
    });

    // You may need to send a page view, depending on your use-case
    jstag.pageView();

    // Start Lytics WP Widget Management
    var __ly_evaluate_widgets = function(entity){
      var segmentMembership = entity?.data?.user?.segments || []; 
      
      ' . $outputJS . '
      
      __ly_render_widgets = [];
      __ly_modules.forEach(function(module){
        if(segmentMembership.includes(module.segment) || module.segment === ""){
          __ly_render_widgets.push(module.widget);
        }
      });
      // console.log("widgets", __ly_render_widgets);
      pathfora.initializeWidgets(__ly_render_widgets);
    };
    
    console.log("subscribing to pathfora.publish.done");
    jstag.on("pathfora.publish.done", function(){
      jstag.call("entityReady", __ly_evaluate_widgets);
    });
  </script>';
