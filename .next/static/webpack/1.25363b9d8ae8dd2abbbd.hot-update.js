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
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");


// import * as BABYLON from "babylonjs";



var Camera =
/*#__PURE__*/
function () {
  function Camera(canvas, scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Camera);

    this.scene = scene;
    this.setCamera();
    this.camera.minZ = 0;

    if (_Config__WEBPACK_IMPORTED_MODULE_2__["default"].debug.cameraControls) {
      this.camera.attachControl(canvas, true);
    }
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Camera, [{
    key: "setCamera",
    value: function setCamera() {
      switch (_Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.type) {
        case "free":
          this.camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.z), this.scene); // this.camera.setTarget(0, 0, 0);

          break;

        case "arc":
          this.camera = new BABYLON.ArcRotateCamera("Camera", _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialTarget.x, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialTarget.y, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialTarget.z, new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.z), this.scene);
          this.createTarget();
          break;

        case "follow":
          this.camera = new BABYLON.FollowCamera("Camera", new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.z), this.scene);
          this.createTarget();
          break;
      }
    }
  }, {
    key: "createTarget",
    value: function createTarget() {
      this.camera.targetSphere = new BABYLON.MeshBuilder.CreateSphere("target", {
        diameter: 0.01
      });
      this.camera.targetSphere.position = new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialTarget.x, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialTarget.y, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialTarget.z);
      this.camera.lockedTarget = this.camera.targetSphere;
      this.camera.position = new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.z);
    }
  }]);

  return Camera;
}();

/* harmony default export */ __webpack_exports__["default"] = (Camera);

/***/ })

})
//# sourceMappingURL=1.25363b9d8ae8dd2abbbd.hot-update.js.map