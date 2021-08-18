<?php
/**
 * Plugin Name:       Alternative Site Logo
 * Description:       Example block written with ESNext standard and JSX support – build step required.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Photosynthesic
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       altslogo
 *
 * @package           alternative-site-logo
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

define( 'ALTSLOGO_URL', untrailingslashit( plugin_dir_url( __FILE__ ) ) );
define( 'ALTSLOGO_PATH', untrailingslashit( plugin_dir_path( __FILE__ ) ) );

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function altslogo_create_block_alternative_site_logo_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'altslogo_create_block_alternative_site_logo_block_init' );

require ALTSLOGO_PATH . '/inc/class-altslogo-config.php';
$altslogo_config = new Altslogo_Config();
