webpackHotUpdate(1,{

/***/ "./components/World/Stars.js":
/*!***********************************!*\
  !*** ./components/World/Stars.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");





var Stars =
/*#__PURE__*/
function () {
  function Stars(scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stars);

    this.scene = scene;
    this.stars = [];
    this.createStars(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.amount);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stars, [{
    key: "createStars",
    value: function createStars(amount) {
      for (var i = 0; i < amount; i++) {
        var star = BABYLON.MeshBuilder.CreateSphere("sphere", {
          diameter: _Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.diameter
        }, this.scene);
        var starMaterial = new BABYLON.StandardMaterial("myMaterial", this.scene);
        starMaterial.emissiveColor = new BABYLON.Color3.FromHexString(_Utils__WEBPACK_IMPORTED_MODULE_3__["default"].getRandomPaletteColor());
        star.position = new BABYLON.Vector3(Math.random(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.minPos, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.maxPos), Math.random(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.minPos, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.maxPos), Math.random(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.minPos, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.maxPos));
        star.material = starMaterial;
        this.stars.push(star);
      }
    }
  }]);

  return Stars;
}();

/* harmony default export */ __webpack_exports__["default"] = (Stars);

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
false

})
//# sourceMappingURL=1.cb9025f8f9acaa9a71fd.hot-update.js.map