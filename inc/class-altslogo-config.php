<?php
/**
 * The file that difines the plugin config page class
 *
 * @package alternative-site-logo
 */

if ( ! class_exists( 'Altslogo_Config' ) ) {
	/**
	 * Altslogo Config
	 */
	class Altslogo_Config {
		/**
		 * construct
		 */
		public function __construct() {
			// 管理画面にプラグイン用の設定画面を作成.
			add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
			// 関連のJSとCSSを読み込み.
			add_action( 'admin_enqueue_scripts', array( $this, 'set_enqueue_files' ) );
			// 設定を登録.
			add_action( 'init', array( $this, 'set_options' ) );
		}
		/**
		 * オプションページの追加
		 */
		public function add_admin_menu() {
			add_options_page(
				'Alternative Site Logo Plugin', // メニューを選択した時にページのタイトルタグに表示されるテキスト.
				'Alternative Site Logo', // メニューで表示されるテキスト.
				'administrator',             // メニューを使用出来る権限（今回は管理者）.
				'alternative-site-logo', // スラッグ名（URLの一部にもなる）.
				array( $this, 'add_root_dom' )           // コールバック関数.
			);
		}

		/**
		 * オプションページのコンテンツ
		 */
		public function add_root_dom() {
			echo '<div id="altslogo-admin"></div>';
		}

		/**
		 * JSとCSSの読み込み
		 */
		public function set_enqueue_files() {
			// 依存スクリプト・バージョンが記述されたファイルを読み込み.
			$asset_file = include ALTSLOGO_PATH . '/build/admin/main.asset.php';
			// Enqueue CSS.
			wp_enqueue_style(
				'altslogo_admin_style',
				ALTSLOGO_URL . '/build/admin/main.css',
				array( 'wp-components' ),
				filectime( ALTSLOGO_PATH . '/build/admin/main.css' )
			);
			// Enqueue Javascript.
			wp_enqueue_script(
				'altslogo_admin_script',
				ALTSLOGO_URL . '/build/admin/main.js',
				$asset_file['dependencies'],
				$asset_file['version'],
				true
			);
		}

		/**
		 * オプション項目の登録
		 */
		public function set_options() {
			// SVGの元タグ.
			register_setting(
				'alternative_site_logo_settings',
				'altslogo_base_svg_tags',
				array(
					'type'         => 'string',
					'show_in_rest' => true,
					'default'      => '初期値',
				)
			);
		}
	}
}
