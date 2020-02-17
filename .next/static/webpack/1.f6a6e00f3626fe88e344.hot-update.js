webpackHotUpdate(1,{

/***/ "./components/World/DynamicGround.js":
/*!*******************************************!*\
  !*** ./components/World/DynamicGround.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");




var DynamicGround =
/*#__PURE__*/
function () {
  function DynamicGround(scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DynamicGround);

    this.scene = scene;
    var mapSubX = 100,
        mapSubZ = 100,
        mapData = new Float32Array(mapSubX * mapSubZ * 3);

    for (var l = 0; l < mapSubZ; l++) {
      for (var w = 0; w < mapSubX; w++) {
        mapData[3 * (l * mapSubX + w)] = (w - mapSubX * 0.5) * 2.0;
        mapData[3 * (l * mapSubX + w) + 1] = w / (l + 1) * Math.sin(l / 1) * Math.cos(w / 1) * 1.0;
        mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.5) * 2.0;
      }
    }

    var params = {
      mapData: mapData,
      mapSubX: mapSubX,
      mapSubZ: mapSubZ,
      terrainSub: 200
    };
    this.ground = new BABYLON.DynamicTerrain("terrain", params, this.scene); // this.ground.subToleranceX = 16;
    // this.ground.subToleranceZ = 16;
    // this.ground.LODLimits = [4, 3, 2, 1, 1];

    this.setMaterial();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DynamicGround, [{
    key: "setMaterial",
    value: function setMaterial() {
      this.gridMaterial = new BABYLON.GridMaterial("gridMaterial", this.scene);
      this.gridMaterial.mainColor = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground.dynamic.grid.mainColor;
      this.gridMaterial.lineColor = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground.dynamic.grid.lineColor;
      this.gridMaterial.gridRatio = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground.dynamic.grid.gridRatio;
      this.gridMaterial.backFaceCulling = false;
      this.gridMaterial.majorUnitFrequency = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground.dynamic.grid.majorUnitFrequency;
      this.gridMaterial.opacity = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground.dynamic.grid.opacity;
      this.ground.mesh.material = this.gridMaterial;
    }
  }]);

  return DynamicGround;
}();

/* harmony default export */ __webpack_exports__["default"] = (DynamicGround);

/***/ })

})
//# sourceMappingURL=1.f6a6e00f3626fe88e344.hot-update.js.map