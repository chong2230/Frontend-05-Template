/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./framework.js":
/*!**********************!*\
  !*** ./framework.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nexports.createElement = createElement;\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction createElement(type, attributes) {\n    var element = void 0;\n    if (typeof type === 'string') {\n        // 原生的元素\n        // element = document.createElement(type);\n        element = new ElementWrapper(type);\n    } else {\n        element = new type();\n    }\n    for (var name in attributes) {\n        element.setAttribute(name, attributes[name]);\n    }\n\n    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n        children[_key - 2] = arguments[_key];\n    }\n\n    var _iteratorNormalCompletion = true;\n    var _didIteratorError = false;\n    var _iteratorError = undefined;\n\n    try {\n        for (var _iterator = children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var child = _step.value;\n\n            if (typeof child === 'string') {\n                // child = document.createTextNode(child);\n                child = new TextWrapper(child);\n            }\n            element.appendChild(child);\n        }\n    } catch (err) {\n        _didIteratorError = true;\n        _iteratorError = err;\n    } finally {\n        try {\n            if (!_iteratorNormalCompletion && _iterator.return) {\n                _iterator.return();\n            }\n        } finally {\n            if (_didIteratorError) {\n                throw _iteratorError;\n            }\n        }\n    }\n\n    return element;\n}\n\nvar Component = exports.Component = function () {\n    function Component(type) {\n        // this.root = this.render();\n\n        _classCallCheck(this, Component);\n    }\n\n    _createClass(Component, [{\n        key: 'setAttribute',\n        value: function setAttribute(name, value) {\n            this.root.setAttribute(name, value);\n        }\n    }, {\n        key: 'appendChild',\n        value: function appendChild(child) {\n            child.mounteTo(this.root);\n        }\n    }, {\n        key: 'mounteTo',\n        value: function mounteTo(parent) {\n            parent.appendChild(this.root);\n        }\n        // render() {\n        //     return document.createElement('div');\n        // }\n\n    }]);\n\n    return Component;\n}();\n\nvar ElementWrapper = function (_Component) {\n    _inherits(ElementWrapper, _Component);\n\n    function ElementWrapper(type) {\n        _classCallCheck(this, ElementWrapper);\n\n        var _this = _possibleConstructorReturn(this, (ElementWrapper.__proto__ || Object.getPrototypeOf(ElementWrapper)).call(this));\n\n        _this.root = document.createElement(type);\n        return _this;\n    }\n\n    return ElementWrapper;\n}(Component);\n\nvar TextWrapper = function (_Component2) {\n    _inherits(TextWrapper, _Component2);\n\n    function TextWrapper(content) {\n        _classCallCheck(this, TextWrapper);\n\n        var _this2 = _possibleConstructorReturn(this, (TextWrapper.__proto__ || Object.getPrototypeOf(TextWrapper)).call(this));\n\n        _this2.root = document.createTextNode(content);\n        return _this2;\n    }\n\n    return TextWrapper;\n}(Component);\n\n//# sourceURL=webpack://jsx/./framework.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
eval("\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _framework = __webpack_require__(/*! ./framework.js */ \"./framework.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Carousel = function (_Component) {\n    _inherits(Carousel, _Component);\n\n    function Carousel() {\n        _classCallCheck(this, Carousel);\n\n        var _this = _possibleConstructorReturn(this, (Carousel.__proto__ || Object.getPrototypeOf(Carousel)).call(this));\n\n        _this.attributes = Object.create(null);\n        return _this;\n    }\n\n    _createClass(Carousel, [{\n        key: 'setAttribute',\n        value: function setAttribute(name, value) {\n            this.attributes[name] = value;\n        }\n    }, {\n        key: 'render',\n        value: function render() {\n            this.root = document.createElement('div');\n            var _iteratorNormalCompletion = true;\n            var _didIteratorError = false;\n            var _iteratorError = undefined;\n\n            try {\n                for (var _iterator = this.attributes.src[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                    var record = _step.value;\n\n                    // let child = document.createElement('img');\n                    // child.setAttribute('src', record);\n                    var child = document.createElement('div');\n                    child.style.backgroundImage = 'url(' + record + ')';\n                    this.root.appendChild(child);\n                }\n            } catch (err) {\n                _didIteratorError = true;\n                _iteratorError = err;\n            } finally {\n                try {\n                    if (!_iteratorNormalCompletion && _iterator.return) {\n                        _iterator.return();\n                    }\n                } finally {\n                    if (_didIteratorError) {\n                        throw _iteratorError;\n                    }\n                }\n            }\n\n            console.log(this.attributes.src);\n\n            return this.root;\n        }\n    }, {\n        key: 'mounteTo',\n        value: function mounteTo(parent) {\n            parent.appendChild(this.render());\n        }\n    }]);\n\n    return Carousel;\n}(_framework.Component);\n\nvar imgs = ['https://static001.geekbang.org/resource/image/95/d1/95775d0927a580170673aedfc70e33d1.jpg', 'https://static001.geekbang.org/resource/image/37/e4/37fbe168a471e8ee1267fd741d096fe4.jpg', 'https://static001.geekbang.org/resource/image/f7/f8/f7c1822abb4382896b9b4d3530b02ff8.jpg'];\n\n// var a = <Div id=\"a\">\n//     <span>1</span>\n//     <span>2</span>\n//     <span>3</span>\n//     </Div>;\n\n// document.body.appendChild(a);\n\nvar a = (0, _framework.createElement)(Carousel, { 'class': 'carousel', src: imgs });\n\na.mounteTo(document.body);\n\n//# sourceURL=webpack://jsx/./main.js?");
})();

/******/ })()
;