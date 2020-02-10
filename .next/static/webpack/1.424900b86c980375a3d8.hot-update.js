webpackHotUpdate(1,{

/***/ "./components/World/Camera.js":
/*!************************************!*\
  !*** ./components/World/Camera.js ***!
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
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");






var Camera =
/*#__PURE__*/
function () {
  function Camera(canvas, scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Camera);

    this.scene = scene;
    this.setCamera();
    this.defaultCamera.setTarget(new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"](_Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.initialTarget.x, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.initialTarget.y, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.initialTarget.z));

    if (_Config__WEBPACK_IMPORTED_MODULE_3__["default"].debug.cameraControls) {
      alert("wassup");
      this.defaultCamera.attachControl(canvas, true);
    }

    this.defaultCamera.minZ = 0;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Camera, [{
    key: "setCamera",
    value: function setCamera() {
      switch (_Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.type) {
        case "free":
          this.defaultCamera = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["UniversalCamera"]("UniversalCamera", new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"](_Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.initialPosition.z), this.scene);
          break;

        case "arc":
          this.defaultCamera = new babylonjs__WEBPACK_IMPORTED_MODULE_2__["ArcRotateCamera"]("Camera", 0, 0, 0, new babylonjs__WEBPACK_IMPORTED_MODULE_2__["Vector3"](_Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_3__["default"].camera.initialPosition.z), this.scene);
          break;
      }
    }
  }]);

  return Camera;
}();

/* harmony default export */ __webpack_exports__["default"] = (Camera);

/***/ })

})
//# sourceMappingURL=1.424900b86c980375a3d8.hot-update.js.map