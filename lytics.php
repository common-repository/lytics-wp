<?php

/**
 * Lytics core WordPres plugin file
 *
 * @link              https://lytics.com
 * @since             1.0.4
 * @package           LyticsWP
 *
 * @wordpress-plugin
 * Plugin Name:       Lytics: Personalization Engine
 * Plugin URI:        https://wordpress.com/plugins/lyticswp
 * Description:       The Lytics WordPress Plugin seamlessly integrates your website with the Lytics Customer Data Platform (CDP). This integration empowers site administrators to leverage extensive visitor data and personalization capabilities, enhancing user experiences and building a robust first-party data asset within their Drupal site.
 * Version:           1.0.4
 * Author:            Lytics
 * Author URI:        https://lytics.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       lytics
 * Domain Path:       /languages
 */

// Prevent file from being called directly
if (!defined('WPINC')) {
	die;
}

/**
 * Current plugin version.
 */
define('LYTICS_WP_VERSION', '1.0.4');

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-lytics-activator.php
 */
function lyticswp_activate()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-lytics-activator.php';
	Lyticswp_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-lytics-deactivator.php
 */
function lyticswp_deactivate()
{
	require_once plugin_dir_path(__FILE__) . 'includes/class-lytics-deactivator.php';
	Lyticswp_Deactivator::deactivate();
}

register_activation_hook(__FILE__, 'lyticswp_activate');
register_deactivation_hook(__FILE__, 'lyticswp_deactivate');

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require plugin_dir_path(__FILE__) . 'includes/class-lytics.php';

/**
 * Begins execution of the plugin.
 *
 * @since    1.0.0
 */
function lyticswp_run()
{

	$plugin = new Lyticswp();
	$plugin->run();
}
lyticswp_run();
