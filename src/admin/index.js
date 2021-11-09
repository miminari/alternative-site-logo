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

    // symbols
    const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g;

    // stateの初期値設定
    const [rowSvg, setText] = useState('初期値');
    const [outputSVG, setOutputSVG] = useState();

    // 取得した設定値をstateに反映
    useEffect(() => {
        api.loadPromise.then(() => {
            const model = new api.models.Settings();
            model.fetch().then(response => {
                setText(response.altslogo_base_svg_tags);
            });
        });
    }, []);

    // SVGにnamespaceを追加する
    const addNameSpace = (data) => {
        data.trim();
        if (data.indexOf(`http://www.w3.org/2000/svg`) < 0) {
            data = data.replace(/<svg/g, `<svg xmlns="http://www.w3.org/2000/svg"`);
        }
        return data;
    };

    // SVGをエンコードする
    const encodeSVG = (data) => {
        data = data.replace(/"/g, `'`);
        data = data.replace(/>\s{1,}</g, `><`);
        data = data.replace(/\s{2,}/g, ` `);

        // Using encodeURIComponent() as replacement function
        return data.replace(symbols, encodeURIComponent);
    }

    // CSS用にヘッダーをつける
    const readyForCSS = (data) => {
        data = `url("data:image/svg+xml,${data}")`;
        return data;
    }

    // 設定項目の登録
    const onClick = () => {

        const nameSpaced = addNameSpace(rowSvg);
        console.log(nameSpaced);
        const encoded = encodeSVG(nameSpaced);
        console.log(encoded);
        const resultCSS = readyForCSS(encoded);
        setOutputSVG(resultCSS);

        api.loadPromise.then(() => {
            const model = new api.models.Settings({
                'altslogo_base_svg_tags': rowSvg
            });

            const save = model.save();

            save.success((response, status) => {
                console.log(response);
                console.log(status);
            });

            save.error((response, status) => {
                console.log(response);
                console.log(status);
            });
        });
    };

    return (
        <div className="wrapper">
            <h1>Alternative Site Logo Config</h1>
            <div className="logo-svg">
                <TextControl
                    label="Logo SVG"
                    value={rowSvg}
                    onChange={(value) => setText(value)}
                />
            </div>
            <Button
                isPrimary
                onClick={onClick}
            >
                設定を保存
            </Button>
            <div className="encodeSVG">{outputSVG}</div>
            {outputSVG &&
                <div
                    className="previewSVG"
                    style={{ backgroundColor: "white", backgroundImage: outputSVG }}
                />
            }
        </div>
    )
}

// AdminコンポーネントをルートDOMにレンダリング
render(
    <Admin />,
    document.getElementById('altslogo_admin')
);