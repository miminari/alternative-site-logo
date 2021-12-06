<?php

/**
 * Alternative Site Logo Block
 *
 * @package alternative-site-logo
 */

function altslogo_create_block_init() {
	// Register Block.
	register_block_type(__DIR__);
}
add_action( 'init', 'altslogo_create_block_init' );
