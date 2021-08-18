// 設定画面用
import './admin.scss';

// renderメソッドのインポート
import { render, useState, useEffect } from '@wordpress/element';
// Componentのインポート
import {
    TextControl,
    Button
} from '@wordpress/components';
// APIのインポート
import api from '@wordpress/api';

// Adminコンポーネント
const Admin = () => {

    // stateの初期値設定
    const [text, setText] = useState('初期値');

    // 取得した設定値をstateに反映
    useEffect(() => {
        api.loadPromise.then(() => {
            const model = new api.models.Settings();
            model.fetch().then(response => {
                setText(response.altslogo_base_svg_tags);
            });
        });
    }, []);

    // 設定項目の登録
    const onClick = () => {
        api.loadPromise.then( () => {
            const model = new api.models.Settings({
                'altslogo_base_svg_tags': text
            });
    
            const save = model.save();
    
            save.success( ( response, status ) => {
                console.log( response );
                console.log( status );
            });
    
            save.error( ( response, status) => {
                console.log( response );
                console.log( status );
            });
        });
    };

    // // クライアントの準備ができてから実行
    // api.loadPromise.then(() => {

    //     // Modelの生成
    //     const model = new api.models.Settings();

    //     // 設定値の取得
    //     model.fetch().then(response => {
    //         console.log(response);
    //     });
    // });

    return (
        <div className="wrapper">
            <h1>Alternative Site Log Config</h1>
            <div className="logo-svg">
                <TextControl
                    label="Logo SVG"
                    value={text}
                    onChange={(value) => setText(value)}
                />
            </div>
            <Button
                isPrimary
                onClick={ onClick }
            >
                設定を保存
            </Button>
        </div>
    )
}

// AdminコンポーネントをルートDOMにレンダリング
render(
    <Admin />,
    document.getElementById('altslogo_admin')
);