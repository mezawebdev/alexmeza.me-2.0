webpackHotUpdate(1,{

/***/ "./components/World/Controls.js":
/*!**************************************!*\
  !*** ./components/World/Controls.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");




var Controls =
/*#__PURE__*/
function () {
  function Controls(world) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Controls);

    this.world = world;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Controls, [{
    key: "update",
    value: function update() {
      // Camera
      this.world.camera.position.x += _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.walkSpeed;
      this.world.camera.position.z += _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.walkSpeed;
    }
  }]);

  return Controls;
}();

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ })

})
//# sourceMappingURL=1.3b2cd2a1285ec4ebe85e.hot-update.js.map