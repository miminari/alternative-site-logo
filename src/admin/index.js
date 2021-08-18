// 設定画面用
import './admin.scss';

// renderメソッドのインポート
import { render } from '@wordpress/element';

// Adminコンポーネント
const Admin = () => {
    return (
        <div className="">
            <h1>Alternative Site Log Config</h1>
        </div>
    )
}

// AdminコンポーネントをルートDOMにレンダリング
render(
    <Admin />,
    document.getElementById( 'altslogo_admin' )
);