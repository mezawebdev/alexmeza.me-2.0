webpackHotUpdate(1,{

/***/ "./components/World/Ground.js":
/*!************************************!*\
  !*** ./components/World/Ground.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylonjs */ "./node_modules/babylonjs/babylon.js");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var babylonjs_materials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! babylonjs-materials */ "./node_modules/babylonjs-materials/babylonjs.materials.min.js");
/* harmony import */ var babylonjs_materials__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(babylonjs_materials__WEBPACK_IMPORTED_MODULE_4__);






var Ground =
/*#__PURE__*/
function () {
  function Ground(scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Ground);

    this.scene = scene;
    this.createGround(); // this.setTerrain();

    this.setMaterial();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Ground, [{
    key: "createGround",
    value: function createGround() {
      this.defaultGround = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Mesh"].CreateGroundFromHeightMap("ground", _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.heightMap, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.width, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.height, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.subdivisions, 0, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.textureHeight, this.scene, true);
      this.defaultGround.rotate(babylonjs__WEBPACK_IMPORTED_MODULE_2__["Axis"].Y, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.rotation, babylonjs__WEBPACK_IMPORTED_MODULE_2__["Space"].WORLD);
      this.defaultGround.position.x = 5;
      this.defaultGround.position.z = 5;
    }
  }, {
    key: "setTerrain",
    value: function setTerrain() {// let script = document.createElement("script");
      // script.src = "https://cdn.rawgit.com/BabylonJS/Extensions/master/DynamicTerrain/dist/babylon.dynamicTerrain.min.js";
      // document.body.appendChild(script);
      // script.onload = () => {
      //     var mapSubX = 500;
      //     var mapSubZ = 300;
      //     var terrainSub = 100;
      //     var mapData = new Float32Array(mapSubX * mapSubZ * 3);  
      //     for (var l = 0; l < mapSubZ; l++) {           
      //         for (var w = 0; w < mapSubX; w++) {                
      //             mapData[3 *(l * mapSubX + w)] = (w - mapSubX * 0.5) * 2.0;
      //             mapData[3 * (l * mapSubX + w) + 1] = w / (l +1) * Math.sin((l + 1) / 2) * Math.cos(w / 2) * 2.0;
      //             mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.5) * 2.0;
      //        }            
      //     }
      //     var params = {
      //         mapData: mapData,
      //         mapSubX: mapSubX,
      //         mapSubZ: mapSubZ,
      //         terrainSub: terrainSub
      //     };
      //     terrain = new BABYLON.DynamicTerrain("terrain", params, this.scene);
      //     terrain.mesh.material = terrainMaterial;
      //     terrain.subToleranceX = 8;
      //     terrain.subToleranceZ = 8;
      //     terrain.LODLimits = [4, 3, 2, 1, 1];
      //     terrainCreated = true;
      // }
      // var mapSubX = 500;
      //     var mapSubZ = 300;
      //     var terrainSub = 100;
      //     var mapData = new Float32Array(mapSubX * mapSubZ * 3);  
      //     for (var l = 0; l < mapSubZ; l++) {           
      //         for (var w = 0; w < mapSubX; w++) {                
      //             mapData[3 *(l * mapSubX + w)] = (w - mapSubX * 0.5) * 2.0;
      //             mapData[3 * (l * mapSubX + w) + 1] = w / (l +1) * Math.sin((l + 1) / 2) * Math.cos(w / 2) * 2.0;
      //             mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.5) * 2.0;
      //        }            
      //     }
      //     var params = {
      //         mapData: mapData,
      //         mapSubX: mapSubX,
      //         mapSubZ: mapSubZ,
      //         terrainSub: terrainSub
      //     };
      // terrain = new BABYLON.DynamicTerrain("terrain", params, this.scene);
      // terrain.mesh.material = terrainMaterial;
      // terrain.subToleranceX = 8;
      // terrain.subToleranceZ = 8;
      // terrain.LODLimits = [4, 3, 2, 1, 1];
      // terrainCreated = true;
    }
  }, {
    key: "setMaterial",
    value: function setMaterial() {
      this.gridMaterial = new babylonjs_materials__WEBPACK_IMPORTED_MODULE_4__["GridMaterial"]("gridMaterial", this.scene);
      this.gridMaterial.mainColor = _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.grid.mainColor;
      this.gridMaterial.lineColor = _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.grid.lineColor;
      this.gridMaterial.gridRatio = _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.grid.gridRatio;
      this.gridMaterial.backFaceCulling = false;
      this.gridMaterial.majorUnitFrequency = _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.grid.majorUnitFrequency;
      this.gridMaterial.opacity = _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.grid.opacity;
      this.gridMaterial.emissiveColor = _Config__WEBPACK_IMPORTED_MODULE_3__["default"].ground.grid.lineColor;
      this.defaultGround.material = this.gridMaterial;
    }
  }]);

  return Ground;
}();

/* harmony default export */ __webpack_exports__["default"] = (Ground);

/***/ })

})
//# sourceMappingURL=1.b5654e36d77898c5054a.hot-update.js.map