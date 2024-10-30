=== Lytics Personalization Engine (Official) ===

![image](https://github.com/lytics/wordpress-core/assets/2042008/eea842dc-c763-4878-b8b8-56140a6c54ce)

**Contributors:** markjhayden  
**Tags:** gutenberg, block, analytics, cdp, personalization  
**Requires at least:** 6.0  
**Tested up to:** 6.6.1  
**Requires PHP:** 7.4  
**Stable tag:** 1.0.4
**License:** GPLv2 or later  
**License URI:** https://www.gnu.org/licenses/gpl-2.0.html

Integrate Lytics' personalization engine with WordPress for segmentation, personalized content, recommendations, and more.

== Description ==

https://youtu.be/kZ2F9bqRWaw

Used to seamlessly integrate the most powerful capabilities of the Lytics Personalization Engine directly into WordPress. Once activated, this plugin will automatically configure the Lytics collection and personalization tag on your website, allowing for the deployment of highly targeted web campaigns, personalized content, recommendations, and more.

== Features ==

- **Installation:** Seamlessly connect your website with Lytics in a few clicks. No development required.
- **Profile Building / Collection:** Collect comprehensive visitor data from your WordPress site in real-time, enriching Lytics customer profiles for both anonymous and known visitors.
- **Identity Resolution:** Unify user identities across devices and sessions, leveraging Lytics to dynamically personalize site content based on comprehensive user data and segments.
- **Behavioral Insights:** Gain deep insights into user behavior, allowing for dynamic content personalization based on actionable data and user segments identified by Lytics.
- **Content Personalization:** Enhance user experience by dynamically personalizing site content, tailored to individual user preferences and behaviors as understood by Lytics.
- **Content Recommendation:** Improve engagement and user retention through intelligent content recommendations, powered by Lytics' deep learning about user preferences and behaviors.

== Lytics.com Feature Support ==

- Supports core [Lytics tracking and personalization tag installation](https://docs.lytics.com/docs/lytics-javascript-tag).
- Supports [data collection and Lytics profile building](https://docs.lytics.com/docs/lytics-javascript-tag#data-collection).
- Supports creation and delivery of [Lytics Web Experiences via Personalization SDK](https://docs.lytics.com/docs/personalization-pathfora).
- Supports real-time [Lytics powered content recommendations](https://docs.lytics.com/docs/recommendations).
- Supports real-time [personalization based on Lytics profile](https://docs.lytics.com/docs/lytics-javascript-tag#accessing-visitor-profiles).

== Privacy ==

User Data: This plugin does not collect any user data. However, the tracking code added by this plugin is used by Lytics to collect a variety of user data in support of building your private customer profiles. You can learn more about [Lytics Privacy here](https://www.lytics.com/privacy-policy/).

Cookies: The Lytics tracking tag installed uses first party cookies to identify both anonymous and known visitors as well as optional user preferences.

Services: This plugin connects to the following Lytics APIs either directly or via the implemented tracking tag:

- [Data Collection (GET/POST)](https://docs.lytics.com/reference/data-json-upload)
- [Web Personalization (GET)](https://docs.lytics.com/reference/web-personalization-1)
- [Content Recommendation (GET)](https://docs.lytics.com/reference/public-content-recommendation)
- [Segments/Collections (GET)](https://docs.lytics.com/reference/get_segment)
- Note: Additional API calls may be made to official APIs managed and maintained exclusively by Lytics.

== Installation ==

1. **Download the Plugin**: Obtain the latest version of the Lytics plugin from the master branch of this repository.
2. **Install the Plugin**: Transfer all Lytics plugin, including outer `lytics` directory, to your WordPress `wp-content/plugins` directory. Note: If developing locally this plugin utilizes Vite for its build process, which results in the creation of a `dist` directory. This `dist` directory should be considered the actual plugin directory. Additional details are provided below.
3. **Activate the Plugin**: Use the WordPress admin panel to navigate to the _Plugins_ page, locate the `Lytics` plugin, and activate it.

== Usage ==

1. **Create Access Token**: Your Lytics [API Token](https://docs.lytics.com/docs/access-tokens#deleting-an-existing-api-token) can be found within your account settings on the Lytics platform. We recommend using the `admin` role.
2. **Enable Plugin**: Access the Lytics plugin settings via the WordPress admin panel. Enter your Lytics Access Token as instructed and click save. Be sure to `enable tag` to ensure Lytics is configured properly.

== Frequently Asked Questions ==

= How do I contribute to the plugin? =

As an open source project, we rely on community contributions to continue to improve WooCommerce. To contribute, please follow the pre-requisites above and visit our Contributing to Woo doc for more links and contribution guidelines.

== Changelog ==

= 1.0.0 =

- Initial release

== Support ==

We'd love for you to join our growing community of Lytics developers. Simply visit https://lytics.com/joinslack and join the conversation.
