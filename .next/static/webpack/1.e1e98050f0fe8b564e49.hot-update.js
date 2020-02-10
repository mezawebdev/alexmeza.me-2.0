webpackHotUpdate(1,{

/***/ "./components/World/Effects.js":
/*!*************************************!*\
  !*** ./components/World/Effects.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");




var Effects =
/*#__PURE__*/
function () {
  function Effects(scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Effects);

    this.scene = scene;
    this.createGlow();
    this.createFog();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Effects, [{
    key: "createGlow",
    value: function createGlow() {
      this.glow = new BABYLON.GlowLayer("glow", this.scene);
      this.glow.intensity = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].effects.glow.intensity;
    }
  }, {
    key: "createFog",
    value: function createFog() {
      this.scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
      this.scene.fogDensity = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].effects.fog.density;
    }
  }]);

  return Effects;
}();

/* harmony default export */ __webpack_exports__["default"] = (Effects);

/***/ })

})
//# sourceMappingURL=1.e1e98050f0fe8b564e49.hot-update.js.map