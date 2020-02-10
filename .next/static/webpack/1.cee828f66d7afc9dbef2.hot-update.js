webpackHotUpdate(1,{

/***/ "./components/World/Backgrounds.js":
/*!*****************************************!*\
  !*** ./components/World/Backgrounds.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _public_js_vendor_granim_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/js/vendor/granim.min.js */ "./public/js/vendor/granim.min.js");
/* harmony import */ var _public_js_vendor_granim_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_js_vendor_granim_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/scss/backgrounds.scss */ "./assets/scss/backgrounds.scss");
/* harmony import */ var _assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/RescueAMeza_SD/Desktop/mezaWebLab/Personal/alexmeza.me/components/World/Backgrounds.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var Backgrounds =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Backgrounds, _React$Component);

  function Backgrounds(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Backgrounds);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Backgrounds).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Backgrounds, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.colorBackground = new Granim({
        element: '#color-background',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        states: {
          "default-state": {
            gradients: _Config__WEBPACK_IMPORTED_MODULE_6__["default"].backgrounds.bottomColorBackground.gradients
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "backgrounds",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        id: "gradient-center-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx("canvas", {
        id: "color-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return Backgrounds;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Backgrounds);

/***/ })

})
//# sourceMappingURL=1.cee828f66d7afc9dbef2.hot-update.js.map