webpackHotUpdate(1,{

/***/ "./components/World/Mountains.js":
/*!***************************************!*\
  !*** ./components/World/Mountains.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");




var Mountains =
/*#__PURE__*/
function () {
  function Mountains(scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Mountains);

    this.scene = scene;
    this.createMountains();
    this.setMaterials();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Mountains, [{
    key: "createMountains",
    value: function createMountains() {
      var _this = this;

      _Config__WEBPACK_IMPORTED_MODULE_2__["default"].mountains.meshes.forEach(function (mountain) {
        mountain.mesh = new BABYLON.Mesh.CreateGroundFromHeightMap("ground-".concat(Math.round(Math.random() * 100)), mountain.heightMap, mountain.width, mountain.height, mountain.subdivisions, 0, mountain.textureHeight, _this.scene, true);
        mountain.mesh.rotate(BABYLON.Axis.Y, mountain.rotation, BABYLON.Space.WORLD);
        mountain.mesh.position.x = mountain.x;
        mountain.mesh.position.z = mountain.z;
        mountain.mesh.position.y = mountain.y;
      });
    }
  }, {
    key: "setMaterials",
    value: function setMaterials() {
      var _this2 = this;

      _Config__WEBPACK_IMPORTED_MODULE_2__["default"].mountains.meshes.forEach(function (mountain) {
        var gridMaterial = new BABYLON.GridMaterial("gridMaterial-".concat(Math.round(Math.random() * 100)), _this2.scene);
        gridMaterial.mainColor = mountain.grid.mainColor;
        gridMaterial.lineColor = mountain.grid.lineColor;
        gridMaterial.gridRatio = mountain.grid.gridRatio;
        gridMaterial.backFaceCulling = false;
        gridMaterial.majorUnitFrequency = mountain.grid.majorUnitFrequency;
        gridMaterial.opacity = mountain.grid.opacity;
        mountain.mesh.material = gridMaterial;
      });
    }
  }]);

  return Mountains;
}();

/* harmony default export */ __webpack_exports__["default"] = (Mountains);

/***/ })

})
//# sourceMappingURL=1.8e429966034af6449492.hot-update.js.map