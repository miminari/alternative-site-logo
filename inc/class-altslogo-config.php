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
			add_action( 'admin_menu', array( $this, 'altslogo_admin_menu' ) );
			// 関連のJSとCSSを読み込み.
			add_action( 'admin_enqueue_scripts', array( $this, 'altslogo_enqueue_files' ) );
		}
		/**
		 * オプションページの追加
		 */
		public function altslogo_admin_menu() {
			add_options_page(
				'Alternative Site Logo Plugin', // メニューを選択した時にページのタイトルタグに表示されるテキスト.
				'Alternative Site Logo', // メニューで表示されるテキスト.
				'administrator',             // メニューを使用出来る権限（今回は管理者）.
				'alternative-site-logo', // スラッグ名（URLの一部にもなる）.
				array( $this, 'altslogo_settings_page' )           // コールバック関数.
			);
		}

		/**
		 * オプションページのコンテンツ
		 */
		public function altslogo_settings_page() {
			echo '<div id="altslogo_admin"></div>';
		}

		/**
		 * JSとCSSの読み込み
		 */
		public function altslogo_enqueue_files() {
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
	}
}
