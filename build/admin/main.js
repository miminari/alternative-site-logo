/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/admin/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/admin/admin.scss":
/*!******************************!*\
  !*** ./src/admin/admin.scss ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _admin_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.scss */ "./src/admin/admin.scss");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/api */ "@wordpress/api");
/* harmony import */ var _wordpress_api__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api__WEBPACK_IMPORTED_MODULE_3__);

// 設定画面用
 // renderメソッドのインポート

 // Componentのインポート

 // APIのインポート

 // Adminコンポーネント

const Admin = () => {
  // symbols
  const symbols = /[\r\n%#()<>?[\\\]^`{|}]/g; // stateの初期値設定

  const [rowSvg, setText] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])('初期値');
  const [outputSVG, setOutputSVG] = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(); // 取得した設定値をstateに反映

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    _wordpress_api__WEBPACK_IMPORTED_MODULE_3___default.a.loadPromise.then(() => {
      const model = new _wordpress_api__WEBPACK_IMPORTED_MODULE_3___default.a.models.Settings();
      model.fetch().then(response => {
        setText(response.altslogo_base_svg_tags);
      });
    });
  }, []); // SVGにnamespaceを追加する

  const addNameSpace = data => {
    data.trim();

    if (data.indexOf(`http://www.w3.org/2000/svg`) < 0) {
      data = data.replace(/<svg/g, `<svg xmlns="http://www.w3.org/2000/svg"`);
    }

    return data;
  }; // SVGをエンコードする


  const encodeSVG = data => {
    data = data.replace(/"/g, `'`);
    data = data.replace(/>\s{1,}</g, `><`);
    data = data.replace(/\s{2,}/g, ` `); // Using encodeURIComponent() as replacement function

    return data.replace(symbols, encodeURIComponent);
  }; // CSS用にヘッダーをつける


  const readyForCSS = data => {
    data = `url("data:image/svg+xml,${data}")`;
    return data;
  }; // 設定項目の登録


  const onClick = () => {
    const nameSpaced = addNameSpace(rowSvg);
    console.log(nameSpaced);
    const encoded = encodeSVG(nameSpaced);
    console.log(encoded);
    const resultCSS = readyForCSS(encoded);
    setOutputSVG(resultCSS);
    _wordpress_api__WEBPACK_IMPORTED_MODULE_3___default.a.loadPromise.then(() => {
      const model = new _wordpress_api__WEBPACK_IMPORTED_MODULE_3___default.a.models.Settings({
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

  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "wrapper"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h1", null, "Alternative Site Log Config"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "logo-svg"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["TextControl"], {
    label: "Logo SVG",
    value: rowSvg,
    onChange: value => setText(value)
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    isPrimary: true,
    onClick: onClick
  }, "\u8A2D\u5B9A\u3092\u4FDD\u5B58"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "encodeSVG"
  }, outputSVG), outputSVG && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "previewSVG",
    style: {
      backgroundColor: "white",
      backgroundImage: outputSVG
    }
  }));
}; // AdminコンポーネントをルートDOMにレンダリング


Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["render"])(Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(Admin, null), document.getElementById('altslogo_admin'));

/***/ }),

/***/ "@wordpress/api":
/*!*****************************!*\
  !*** external ["wp","api"] ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["api"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ })

/******/ });
//# sourceMappingURL=main.js.map