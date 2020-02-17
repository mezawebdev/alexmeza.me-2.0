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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _assets_scss_stars_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/scss/stars.scss */ "./assets/scss/stars.scss");
/* harmony import */ var _assets_scss_stars_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_stars_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");









var Stars =
/*#__PURE__*/
function () {
  function Stars(scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Stars);

    this.scene = scene;
    this.stars = [];
    this.createStar(_Config__WEBPACK_IMPORTED_MODULE_4__["default"].stars.amount);
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Stars, [{
    key: "createStars",
    value: function createStars(amount) {
      for (var i = 0; i < amount; i++) {
        var star = BABYLON.MeshBuilder.CreateSphere("sphere", {
          diameter: _Config__WEBPACK_IMPORTED_MODULE_4__["default"].stars.diameter
        }, this.scene);
        var starMaterial = new BABYLON.StandardMaterial("myMaterial", this.scene);
        starMaterial.emissiveColor = new BABYLON.Color3.FromHexString(_Utils__WEBPACK_IMPORTED_MODULE_6__["default"].getRandomPaletteColor());
        star.position = new BABYLON.Vector3(Math.random(_Config__WEBPACK_IMPORTED_MODULE_4__["default"].stars.minPos, _Config__WEBPACK_IMPORTED_MODULE_4__["default"].stars.maxPos), Math.random(_Config__WEBPACK_IMPORTED_MODULE_4__["default"].stars.minPos, _Config__WEBPACK_IMPORTED_MODULE_4__["default"].stars.maxPos), Math.random(_Config__WEBPACK_IMPORTED_MODULE_4__["default"].stars.minPos, _Config__WEBPACK_IMPORTED_MODULE_4__["default"].stars.maxPos));
        star.material = starMaterial;
        this.stars.push(star);
      }
    }
  }]);

  return Stars;
}();

/* harmony default export */ __webpack_exports__["default"] = (Stars);

/***/ })

})
//# sourceMappingURL=1.d4fff4fa9a0b7594bf4a.hot-update.js.map