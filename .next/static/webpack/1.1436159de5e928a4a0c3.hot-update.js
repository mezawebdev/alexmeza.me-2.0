webpackHotUpdate(1,{

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
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Ground__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Ground */ "./components/World/Ground.js");
/* harmony import */ var _Mountains__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Mountains */ "./components/World/Mountains.js");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Camera */ "./components/World/Camera.js");
/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Light */ "./components/World/Light.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");
/* harmony import */ var _Effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Effects */ "./components/World/Effects.js");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Stars */ "./components/World/Stars.js");
/* harmony import */ var _Backgrounds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Backgrounds */ "./components/World/Backgrounds.js");
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Controls */ "./components/World/Controls.js");





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
      this.engine = new BABYLON.Engine(this.canvas.current, true);
      this.scene = new BABYLON.Scene(this.engine);
      this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_9__["default"](this.canvas.current, this.scene);
    }
  }, {
    key: "renderWorld",
    value: function renderWorld() {
      this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
      this.light = new _Light__WEBPACK_IMPORTED_MODULE_10__["default"](this.scene);
      this.ground = new _Ground__WEBPACK_IMPORTED_MODULE_7__["default"](this.scene);
      this.mountains = new _Mountains__WEBPACK_IMPORTED_MODULE_8__["default"](this.scene);

      if (_Config__WEBPACK_IMPORTED_MODULE_6__["default"].stars.enabled) {
        this.stars = new _Stars__WEBPACK_IMPORTED_MODULE_13__["default"](this.scene);
      }

      this.effects = new _Effects__WEBPACK_IMPORTED_MODULE_12__["default"](this.scene);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.startEngine();
      this.renderWorld();

      if (_Config__WEBPACK_IMPORTED_MODULE_6__["default"].debug.axis) {
        _Utils__WEBPACK_IMPORTED_MODULE_11__["default"].showWorldAxis(_Config__WEBPACK_IMPORTED_MODULE_6__["default"].debug.axisSize, this.scene);
      }

      if (_Config__WEBPACK_IMPORTED_MODULE_6__["default"].controls.enabled) {
        this.controls = new _Controls__WEBPACK_IMPORTED_MODULE_15__["default"](this);
      }

      this.resize();
      window.addEventListener("resize", function () {
        _this2.resize();
      });
      this.engine.runRenderLoop(function () {
        _this2.scene.render();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, __jsx(_Backgrounds__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), __jsx("canvas", {
        id: "canvas",
        style: _Config__WEBPACK_IMPORTED_MODULE_6__["default"].canvas.style,
        ref: this.canvas,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
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
//# sourceMappingURL=1.1436159de5e928a4a0c3.hot-update.js.map