(window["webpackJsonp_alternative_site_logo"] = window["webpackJsonp_alternative_site_logo"] || []).push([["style-main"],{

/***/ "./src/block/style.scss":
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./src/block/style.scss?");

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp_alternative_site_logo"] = window["webpackJsonp_alternative_site_logo"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/block/index.js","style-main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/block/block.json":
/*!******************************!*\
  !*** ./src/block/block.json ***!
  \******************************/
/*! exports provided: $schema, apiVersion, name, version, title, category, icon, description, keywords, supports, textdomain, default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"{\\\"$schema\\\":\\\"https://schemas.wp.org/trunk/block.json\\\",\\\"apiVersion\\\":2,\\\"name\\\":\\\"alternative-site-logo/alternative-site-logo\\\",\\\"version\\\":\\\"0.1.0\\\",\\\"title\\\":\\\"Alternative Site Logo\\\",\\\"category\\\":\\\"widgets\\\",\\\"icon\\\":\\\"smiley\\\",\\\"description\\\":\\\"Example block written with ESNext standard and JSX support – build step required.\\\",\\\"keywords\\\":[\\\"logo\\\"],\\\"supports\\\":{\\\"anchor\\\":true,\\\"html\\\":false,\\\"color\\\":{\\\"text\\\":false,\\\"background\\\":true},\\\"spacing\\\":{\\\"margin\\\":true,\\\"padding\\\":true}},\\\"textdomain\\\":\\\"altslogo\\\"}\");\n\n//# sourceURL=webpack:///./src/block/block.json?");

/***/ }),

/***/ "./src/block/index.js":
/*!****************************************!*\
  !*** ./src/block/index.js + 2 modules ***!
  \****************************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Cannot concat with ./src/block/style.scss */
/*! ModuleConcatenation bailout: Cannot concat with ./src/block/block.json (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external ["wp","blockEditor"] (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external ["wp","blocks"] (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external ["wp","element"] (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXTERNAL MODULE: external [\"wp\",\"blocks\"]\nvar external_wp_blocks_ = __webpack_require__(\"@wordpress/blocks\");\n\n// EXTERNAL MODULE: ./src/block/block.json\nvar block = __webpack_require__(\"./src/block/block.json\");\n\n// EXTERNAL MODULE: external [\"wp\",\"element\"]\nvar external_wp_element_ = __webpack_require__(\"@wordpress/element\");\n\n// EXTERNAL MODULE: external [\"wp\",\"blockEditor\"]\nvar external_wp_blockEditor_ = __webpack_require__(\"@wordpress/block-editor\");\n\n// EXTERNAL MODULE: external [\"wp\",\"components\"]\nvar external_wp_components_ = __webpack_require__(\"@wordpress/components\");\n\n// CONCATENATED MODULE: ./src/block/edit.js\n\n//import { __ } from '@wordpress/i18n';\n //import './editor.scss';\n// renderメソッドのインポート\n\n // Componentのインポート\n\n // stateの初期値設定\n// const [rowSvg, setText] = useState('初期値');\n// const [outputSVG, setOutputSVG] = useState();\n\nfunction edit() {\n  return (// <p { ...useBlockProps() }>\n    // \t{ __(\n    // \t\t'Alternative Site Logo – hello from the editor!',\n    // \t\t'alternative-site-logo'\n    // \t) }\n    // </p>\n    Object(external_wp_element_[\"createElement\"])(\"div\", Object(external_wp_blockEditor_[\"useBlockProps\"])())\n  );\n}\n// CONCATENATED MODULE: ./src/block/save.js\n\n//import { __ } from '@wordpress/i18n';\n\nfunction save() {\n  return (// <p { ...useBlockProps.save() }>\n    // \t{ __(\n    // \t\t'Alternative Site Logo – hello from the saved content!',\n    // \t\t'alternative-site-logo'\n    // \t) }\n    // </p>\n    Object(external_wp_element_[\"createElement\"])(\"div\", external_wp_blockEditor_[\"useBlockProps\"].save())\n  );\n}\n// EXTERNAL MODULE: ./src/block/style.scss\nvar style = __webpack_require__(\"./src/block/style.scss\");\n\n// CONCATENATED MODULE: ./src/block/index.js\n/**\n * WordPress dependencies\n */\n\n/**\n * Internal dependencies\n */\n\n\n\n\n\nObject(external_wp_blocks_[\"registerBlockType\"])(block.name, { ...block,\n  edit: edit,\n  save: save\n});\n\n//# sourceURL=webpack:///./src/block/index.js_+_2_modules?");

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"blockEditor\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22blockEditor%22%5D?");

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"blocks\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22blocks%22%5D?");

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"components\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22components%22%5D?");

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("(function() { module.exports = window[\"wp\"][\"element\"]; }());\n\n//# sourceURL=webpack:///external_%5B%22wp%22,%22element%22%5D?");

/***/ })

/******/ });