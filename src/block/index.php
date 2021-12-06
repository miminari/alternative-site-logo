<?php

/**
 * Alternative Site Logo Block
 *
 * @package alternative-site-logo
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function altslogo_create_block_init() {
	 // Register Script.
	// $asset = include ALTSLOGO_PATH . '/build/block/main.asset.php';
	// wp_register_script(
	// 'alternative-site-logo/alternative-site-logo',
	// ALTSLOGO_URL . '/build/block/main.js',
	// $asset['dependencies'],
	// true
	// );
	// Register Style.
	// wp_register_style(
	// 'alternative-site-logo/alternative-site-logo',
	// ALTSLOGO_URL . '/build/block/style-main.css',
	// array(),
	// );
	// Register Block.
	register_block_type(
		__DIR__
		// 'alternative-site-logo/alternative-site-logo',
		// array(
		// 'script'        => 'alternative-site-logo/alternative-site-logo',
		// 'style'         => 'alternative-site-logo/alternative-site-logo',
		// 'editor_style'  => 'alternative-site-logo/alternative-site-logo',
		// 'editor_script' => 'alternative-site-logo/alternative-site-logo',
		// )
	);
}
add_action( 'init', 'altslogo_create_block_init' );
