webpackHotUpdate(1,{

/***/ "./components/World/Background.js":
false,

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
/* harmony import */ var _assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets/scss/backgrounds.scss */ "./assets/scss/backgrounds.scss");
/* harmony import */ var _assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_6__);





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
    key: "render",
    value: function render() {
      return __jsx("div", {
        id: "backgrounds",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      });
    }
  }]);

  return Backgrounds;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Backgrounds);

/***/ }),

/***/ "./components/World/World.js":
/*!***********************************!*\
  !*** ./components/World/World.js ***!
  \***********************************/
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
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Ground__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Ground */ "./components/World/Ground.js");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Camera */ "./components/World/Camera.js");
/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Light */ "./components/World/Light.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");
/* harmony import */ var _Effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Effects */ "./components/World/Effects.js");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Stars */ "./components/World/Stars.js");
/* harmony import */ var _Backgrounds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Backgrounds */ "./components/World/Backgrounds.js");





var _jsxFileName = "/Users/RescueAMeza_SD/Desktop/mezaWebLab/Personal/alexmeza.me/components/World/World.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;











var World =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(World, _React$Component);

  function World(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, World);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(World).call(this, props));
    _this.canvas = react__WEBPACK_IMPORTED_MODULE_5___default.a.createRef();
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(World, [{
    key: "resize",
    value: function resize() {
      this.canvas.current.width = window.innerWidth;
      this.canvas.current.height = window.innerHeight;
      this.engine.resize();
    }
  }, {
    key: "startEngine",
    value: function startEngine() {
      this.engine = new babylonjs__WEBPACK_IMPORTED_MODULE_6__["Engine"](this.canvas.current, true);
      this.scene = new babylonjs__WEBPACK_IMPORTED_MODULE_6__["Scene"](this.engine);
      this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_9__["default"](this.canvas.current, this.scene);
    }
  }, {
    key: "renderWorld",
    value: function renderWorld() {
      this.scene.clearColor = new babylonjs__WEBPACK_IMPORTED_MODULE_6__["Color4"](0, 0, 0, 0);
      this.light = new _Light__WEBPACK_IMPORTED_MODULE_10__["default"](this.scene);
      this.ground = new _Ground__WEBPACK_IMPORTED_MODULE_8__["default"](this.scene);
      this.effects = new _Effects__WEBPACK_IMPORTED_MODULE_12__["default"](this.scene);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.startEngine();
      this.renderWorld();

      if (_Config__WEBPACK_IMPORTED_MODULE_7__["default"].debug.axis) {
        _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].showWorldAxis(_Config__WEBPACK_IMPORTED_MODULE_7__["default"].debug.axisSize, this.scene);
      }

      this.engine.runRenderLoop(function () {
        _this2.scene.render();
      });

      if (_Config__WEBPACK_IMPORTED_MODULE_7__["default"].stars.show) {
        this.stars = new _Stars__WEBPACK_IMPORTED_MODULE_13__["default"]();
      }

      this.resize();
      window.addEventListener("resize", function () {
        _this2.resize();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, __jsx(_Stars__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }), __jsx(_Backgrounds__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }), __jsx("canvas", {
        id: "canvas",
        style: _Config__WEBPACK_IMPORTED_MODULE_7__["default"].canvas.style,
        ref: this.canvas,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }));
    }
  }]);

  return World;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (World);

/***/ })

})
//# sourceMappingURL=1.7afb3ee729bdb0e91809.hot-update.js.map