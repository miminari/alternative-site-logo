<?php

/**
 * Alternative Site Logo Block
 *
 * @package altslogo
 */

function altslogo_create_block_init() {
	// Register Block.
	register_block_type(__DIR__);
}
add_action( 'init', 'altslogo_create_block_init' );
