<?php
/**
 * Plugin Name:       Alternative Site Logo
 * Description:       More freedom, more beauty. You can use a SVG file for your site logo.
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.0.1
 * Author:            Photosynthesic
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       altslogo
 *
 * @package           altslogo
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'ALTSLOGO_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'ALTSLOGO_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

require_once ALTSLOGO_PATH . '/src/block/index.php';

// require ALTSLOGO_PATH . '/inc/class-altslogo-config.php';
// $altslogo_config = new Altslogo_Config();
