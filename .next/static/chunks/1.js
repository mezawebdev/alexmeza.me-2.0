(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./components/World/Backgrounds.js":
/*!*****************************************!*\
  !*** ./components/World/Backgrounds.js ***!
  \*****************************************/
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
/* harmony import */ var _public_js_vendor_granim_min_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../public/js/vendor/granim.min.js */ "./public/js/vendor/granim.min.js");
/* harmony import */ var _public_js_vendor_granim_min_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_js_vendor_granim_min_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../assets/scss/backgrounds.scss */ "./assets/scss/backgrounds.scss");
/* harmony import */ var _assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "/Users/RescueAMeza_SD/Desktop/mezaWebLab/Personal/alexmeza.me/components/World/Backgrounds.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;





var Backgrounds =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Backgrounds, _React$Component);

  function Backgrounds(props) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Backgrounds);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Backgrounds).call(this, props));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Backgrounds, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.colorBackground = new Granim({
        element: '#bottom-color-background',
        direction: 'top-bottom',
        isPausedWhenNotInView: true,
        states: {
          "default-state": {
            gradients: _Config__WEBPACK_IMPORTED_MODULE_6__["default"].backgrounds.bottomColorBackground.gradients
          }
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        style: _Config__WEBPACK_IMPORTED_MODULE_6__["default"].backgrounds.style,
        id: "backgrounds",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, __jsx("div", {
        style: _Config__WEBPACK_IMPORTED_MODULE_6__["default"].backgrounds.centerGradientBackground.style,
        id: "gradient-center-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), __jsx("canvas", {
        style: _Config__WEBPACK_IMPORTED_MODULE_6__["default"].backgrounds.bottomColorBackground.style,
        id: "bottom-color-background",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }));
    }
  }]);

  return Backgrounds;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Backgrounds);

/***/ }),

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
          this.camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialPosition.z), this.scene);
          this.camera.setTarget(new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialTarget.x, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialTarget.y, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.initialTarget.z));
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

/***/ }),

/***/ "./components/World/Config.js":
/*!************************************!*\
  !*** ./components/World/Config.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  debug: {
    axis: true,
    axisSize: 1.5,
    cameraControls: true
  },
  palette: ["#2DE2E6", "#F706CF", "#791E94", "#FF4365", "#F9C80E", "#FF6C11"],
  canvas: {
    style: {
      background: "radial-gradient(circle, rgba(50,37,107,1) 0%, rgba(14,8,32,1) 100%)",
      zIndex: "5",
      position: "fixed"
    }
  },
  controls: {
    enabled: true
  },
  backgrounds: {
    style: {
      zIndex: "6"
    },
    centerGradientBackground: {
      style: {
        zIndex: "3",
        background: "rgba(0, 0, 0, 0)"
      }
    },
    bottomColorBackground: {
      gradients: [['rgba(0, 0, 0, 0)', 'rgb(45, 226, 230)'], ['rgba(0, 0, 0, 0)', 'rgb(101, 13, 137)'], ['rgba(0, 0, 0, 0)', 'rgb(255, 108, 17)'], ['rgba(0, 0, 0, 0)', 'rgb(246, 1, 157)'], ['rgba(0, 0, 0, 0)', 'rgb(121, 30, 148)']],
      style: {
        zIndex: "2",
        opacity: "0.2"
      }
    }
  },
  stars: {
    enabled: false,
    amount: 500,
    diameter: 0.005,
    minPos: -10,
    maxPos: 50
  },
  camera: {
    type: "arc",
    maxZ: 10,
    initialPosition: {
      x: -0.11,
      y: 0.05,
      z: -0.11
    },
    initialTarget: {
      x: 0.1,
      y: 0.075,
      z: 0.1
    },
    walk: true,
    walkSpeed: 0.001
  },
  effects: {
    enabled: true,
    glow: {
      intensity: 3
    },
    fog: {
      enabled: false,
      density: 0.01,
      color: new BABYLON.Color3.FromHexString("#000000")
    }
  },
  ground: {
    type: "static",
    "static": {
      heightMap: "images/height_map5.png",
      width: 15,
      height: 15,
      textureHeight: 0,
      subdivisions: 2,
      rotation: 0.7854,
      x: 3,
      z: 3,
      grid: {
        mainColor: new BABYLON.Color3.FromHexString("#000000"),
        lineColor: new BABYLON.Color3.FromHexString("#F706CF"),
        gridRatio: 0.1,
        majorUnitFrequency: 1,
        opacity: 1
      }
    },
    dynamic: {
      heightMap: "images/height_map5.png",
      width: 15,
      height: 15,
      textureHeight: 0,
      subdivisions: 2,
      rotation: 0.7854,
      x: 3,
      z: 3,
      grid: {
        mainColor: new BABYLON.Color3.FromHexString("#000000"),
        lineColor: new BABYLON.Color3.FromHexString("#F706CF"),
        gridRatio: 0.1,
        majorUnitFrequency: 1,
        opacity: 1
      }
    }
  },
  mountains: {
    enabled: false,
    meshes: [{
      heightMap: "images/height_map5.png",
      width: 15,
      height: 15,
      textureHeight: 3,
      subdivisions: 20,
      rotation: 0.785,
      x: 3,
      z: 3,
      y: -0.1,
      grid: {
        mainColor: new BABYLON.Color3.FromHexString("#000000"),
        lineColor: new BABYLON.Color3.FromHexString("#2de2e6"),
        gridRatio: 0.2,
        majorUnitFrequency: 1,
        opacity: 1
      }
    }, {
      heightMap: "images/height_map8.png",
      width: 2,
      height: 5,
      textureHeight: 0.5,
      subdivisions: 20,
      rotation: 0.785,
      x: 3,
      z: 3,
      y: -0.1,
      grid: {
        mainColor: new BABYLON.Color3.FromHexString("#000000"),
        lineColor: new BABYLON.Color3.FromHexString("#2de2e6"),
        gridRatio: 0.2,
        majorUnitFrequency: 1,
        opacity: 1
      }
    }]
  }
});

/***/ }),

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
      console.log(this.world.camera.camera); // Camera

      this.world.camera.camera.position.x += _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.walkSpeed;
      this.world.camera.camera.position.z += _Config__WEBPACK_IMPORTED_MODULE_2__["default"].camera.walkSpeed;
    }
  }]);

  return Controls;
}();

/* harmony default export */ __webpack_exports__["default"] = (Controls);

/***/ }),

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
        mapData[3 * (l * mapSubX + w)] = (w - mapSubX * 0.0) * 1.0;
        mapData[3 * (l * mapSubX + w) + 1] = w / (l + 1) * Math.sin(l / 1) * Math.cos(w / 1) * 1.0;
        mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.0) * 1.0;
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

/***/ }),

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


 // import * as BABYLON from 'babylonjs';

var Effects =
/*#__PURE__*/
function () {
  function Effects(scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Effects);

    this.scene = scene;
    this.createGlow();

    if (_Config__WEBPACK_IMPORTED_MODULE_2__["default"].effects.fog.enabled) {
      this.createFog();
    }
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
      this.scene.fogColor = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].effects.fog.color;
    }
  }]);

  return Effects;
}();

/* harmony default export */ __webpack_exports__["default"] = (Effects);

/***/ }),

/***/ "./components/World/Light.js":
/*!***********************************!*\
  !*** ./components/World/Light.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");


var Light = function Light(scene) {
  Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Light);

  this.lights = [new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 1), scene)]; // this.lights[0].intensity = 30;
};

/* harmony default export */ __webpack_exports__["default"] = (Light);

/***/ }),

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

/***/ }),

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

/***/ "./components/World/StaticGround.js":
/*!******************************************!*\
  !*** ./components/World/StaticGround.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");




var StaticGround =
/*#__PURE__*/
function () {
  function StaticGround(scene) {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, StaticGround);

    this.scene = scene;
    this.createGround();
    this.setMaterial();
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(StaticGround, [{
    key: "createGround",
    value: function createGround() {
      this.defaultGround = new BABYLON.MeshBuilder.CreateGround("ground", {
        width: _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].width,
        height: _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].height
      });
      this.defaultGround.rotate(BABYLON.Axis.Y, _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].rotation, BABYLON.Space.WORLD);
      this.defaultGround.position.x = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].x;
      this.defaultGround.position.z = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].z;
    }
  }, {
    key: "setMaterial",
    value: function setMaterial() {
      this.gridMaterial = new BABYLON.GridMaterial("gridMaterial", this.scene);
      this.gridMaterial.mainColor = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].grid.mainColor;
      this.gridMaterial.lineColor = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].grid.lineColor;
      this.gridMaterial.gridRatio = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].grid.gridRatio;
      this.gridMaterial.backFaceCulling = false;
      this.gridMaterial.majorUnitFrequency = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].grid.majorUnitFrequency;
      this.gridMaterial.opacity = _Config__WEBPACK_IMPORTED_MODULE_2__["default"].ground["static"].grid.opacity;
      this.defaultGround.material = this.gridMaterial;
    }
  }]);

  return StaticGround;
}();

/* harmony default export */ __webpack_exports__["default"] = (StaticGround);

/***/ }),

/***/ "./components/World/Utils.js":
/*!***********************************!*\
  !*** ./components/World/Utils.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  showWorldAxis: function showWorldAxis(size, scene) {
    var makeTextPlane = function makeTextPlane(text, color, size) {
      var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
      dynamicTexture.hasAlpha = true;
      dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color, "transparent", true);
      var plane = BABYLON.Mesh.CreatePlane("TextPlane", size, scene, true);
      plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
      plane.material.backFaceCulling = false;
      plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
      plane.material.diffuseTexture = dynamicTexture;
      return plane;
    };

    var axisX = BABYLON.Mesh.CreateLines("axisX", [BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)], scene);
    axisX.color = new BABYLON.Color3(1, 0, 0);
    var xChar = makeTextPlane("X", "red", size / 10);
    xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);
    var axisY = BABYLON.Mesh.CreateLines("axisY", [BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)], scene);
    axisY.color = new BABYLON.Color3(0, 1, 0);
    var yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    var axisZ = BABYLON.Mesh.CreateLines("axisZ", [BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)], scene);
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    var zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
  },
  getRandomPaletteColor: function getRandomPaletteColor() {
    return _Config__WEBPACK_IMPORTED_MODULE_0__["default"].palette[Math.round(Math.random() * (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].palette.length - 1))];
  }
});

/***/ }),

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
/* harmony import */ var _StaticGround__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./StaticGround */ "./components/World/StaticGround.js");
/* harmony import */ var _Mountains__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Mountains */ "./components/World/Mountains.js");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Camera */ "./components/World/Camera.js");
/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Light */ "./components/World/Light.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");
/* harmony import */ var _Effects__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Effects */ "./components/World/Effects.js");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Stars */ "./components/World/Stars.js");
/* harmony import */ var _Backgrounds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Backgrounds */ "./components/World/Backgrounds.js");
/* harmony import */ var _Controls__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Controls */ "./components/World/Controls.js");
/* harmony import */ var _DynamicGround__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./DynamicGround */ "./components/World/DynamicGround.js");





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

      if (_Config__WEBPACK_IMPORTED_MODULE_6__["default"].ground.type === "static") {
        this.staticGround = new _StaticGround__WEBPACK_IMPORTED_MODULE_7__["default"](this.scene);
      } else if (_Config__WEBPACK_IMPORTED_MODULE_6__["default"].ground.type === "dynamic") {
        this.dynamicGround = new _DynamicGround__WEBPACK_IMPORTED_MODULE_16__["default"](this.scene);
      }

      if (_Config__WEBPACK_IMPORTED_MODULE_6__["default"].mountains.enabled) {
        this.mountains = new _Mountains__WEBPACK_IMPORTED_MODULE_8__["default"](this.scene);
      }

      if (_Config__WEBPACK_IMPORTED_MODULE_6__["default"].stars.enabled) {
        this.stars = new _Stars__WEBPACK_IMPORTED_MODULE_13__["default"](this.scene);
      }

      if (_Config__WEBPACK_IMPORTED_MODULE_6__["default"].effects.enabled) {
        this.effects = new _Effects__WEBPACK_IMPORTED_MODULE_12__["default"](this.scene);
      }
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

        _this2.controls.update();
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, __jsx(_Backgrounds__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx("canvas", {
        id: "canvas",
        style: _Config__WEBPACK_IMPORTED_MODULE_6__["default"].canvas.style,
        ref: this.canvas,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }));
    }
  }]);

  return World;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (World);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-float.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-float */ "./node_modules/core-js/library/fn/parse-float.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "./node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-float.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-float.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-float */ "./node_modules/core-js/library/modules/es6.parse-float.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-float.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-float.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseFloat = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseFloat;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;

module.exports = 1 / $parseFloat(__webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js") + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-float.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-float.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseFloat = __webpack_require__(/*! ./_parse-float */ "./node_modules/core-js/library/modules/_parse-float.js");
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./public/js/vendor/granim.min.js":
/*!****************************************!*\
  !*** ./public/js/vendor/granim.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;var _Array$isArray = __webpack_require__(/*! @babel/runtime-corejs2/core-js/array/is-array */ "./node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");

var _parseFloat = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-float */ "./node_modules/@babel/runtime-corejs2/core-js/parse-float.js");

var _parseInt = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");

var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

/*! Granim v2.0.0 - https://sarcadass.github.io/granim.js */
!function t(e, i, s) {
  function o(r, a) {
    if (!i[r]) {
      if (!e[r]) {
        var h = "function" == typeof require && require;
        if (!a && h) return require(r, !0);
        if (n) return n(r, !0);
        var c = new Error("Cannot find module '" + r + "'");
        throw c.code = "MODULE_NOT_FOUND", c;
      }

      var l = i[r] = {
        exports: {}
      };
      e[r][0].call(l.exports, function (t) {
        var i = e[r][1][t];
        return o(i ? i : t);
      }, l, l.exports, t, e, i, s);
    }

    return i[r].exports;
  }

  for (var n = "function" == typeof require && require, r = 0; r < s.length; r++) {
    o(s[r]);
  }

  return o;
}({
  1: [function (t, e, i) {
    "use strict";

    function s(t) {
      this.getElement(t.element), this.x1 = 0, this.y1 = 0, this.name = t.name || !1, this.elToSetClassOn = t.elToSetClassOn || "body", this.direction = t.direction || "diagonal", this.customDirection = t.customDirection || {}, this.validateInput("direction"), this.isPausedWhenNotInView = t.isPausedWhenNotInView || !1, this.states = t.states, this.stateTransitionSpeed = t.stateTransitionSpeed || 1e3, this.previousTimeStamp = null, this.progress = 0, this.isPaused = !1, this.isCleared = !1, this.isPausedBecauseNotInView = !1, this.context = this.canvas.getContext("2d"), this.channels = {}, this.channelsIndex = 0, this.activeState = t.defaultStateName || "default-state", this.isChangingState = !1, this.currentColors = [], this.currentColorsPos = [], this.activetransitionSpeed = null, this.eventPolyfill(), this.scrollDebounceThreshold = t.scrollDebounceThreshold || 300, this.scrollDebounceTimeout = null, this.isImgLoaded = !1, this.isCanvasInWindowView = !1, this.firstScrollInit = !0, this.animating = !1, this.gradientLength = this.states[this.activeState].gradients[0].length, t.image && t.image.source && (this.image = {
        source: t.image.source,
        position: t.image.position || ["center", "center"],
        stretchMode: t.image.stretchMode || !1,
        blendingMode: t.image.blendingMode || !1
      }), this.events = {
        start: new CustomEvent("granim:start"),
        end: new CustomEvent("granim:end"),
        gradientChange: function gradientChange(t) {
          return new CustomEvent("granim:gradientChange", {
            detail: {
              isLooping: t.isLooping,
              colorsFrom: t.colorsFrom,
              colorsTo: t.colorsTo,
              activeState: t.activeState
            },
            bubbles: !1,
            cancelable: !1
          });
        }
      }, this.callbacks = {
        onStart: "function" == typeof t.onStart && t.onStart,
        onGradientChange: "function" == typeof t.onGradientChange && t.onGradientChange,
        onEnd: "function" == typeof t.onEnd && t.onEnd
      }, this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.setColors(), this.image && (this.validateInput("image"), this.prepareImage()), this.pauseWhenNotInViewNameSpace = this.pauseWhenNotInView.bind(this), this.setSizeAttributesNameSpace = this.setSizeAttributes.bind(this), this.onResize(), this.isPausedWhenNotInView ? this.onScroll() : this.image || (this.refreshColorsAndPos(), this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.animating = !0), this.callbacks.onStart && this.callbacks.onStart(), this.canvas.dispatchEvent(this.events.start);
    }

    s.prototype.animateColors = t("./animateColors.js"), s.prototype.changeBlendingMode = t("./changeBlendingMode.js"), s.prototype.changeDirection = t("./changeDirection.js"), s.prototype.changeState = t("./changeState.js"), s.prototype.clear = t("./clear.js"), s.prototype.convertColorToRgba = t("./convertColorToRgba.js"), s.prototype.destroy = t("./destroy.js"), s.prototype.eventPolyfill = t("./eventPolyfill.js"), s.prototype.getColor = t("./getColor.js"), s.prototype.getColorDiff = t("./getColorDiff.js"), s.prototype.getColorPos = t("./getColorPos.js"), s.prototype.getColorPosDiff = t("./getColorPosDiff.js"), s.prototype.getCurrentColors = t("./getCurrentColors.js"), s.prototype.getCurrentColorsPos = t("./getCurrentColorsPos.js"), s.prototype.getDimensions = t("./getDimensions.js"), s.prototype.getElement = t("./getElement.js"), s.prototype.getLightness = t("./getLightness.js"), s.prototype.makeGradient = t("./makeGradient.js"), s.prototype.onResize = t("./onResize.js"), s.prototype.onScroll = t("./onScroll.js"), s.prototype.pause = t("./pause.js"), s.prototype.pauseWhenNotInView = t("./pauseWhenNotInView.js"), s.prototype.play = t("./play.js"), s.prototype.prepareImage = t("./prepareImage.js"), s.prototype.refreshColorsAndPos = t("./refreshColorsAndPos.js"), s.prototype.setColors = t("./setColors.js"), s.prototype.setDirection = t("./setDirection.js"), s.prototype.setSizeAttributes = t("./setSizeAttributes.js"), s.prototype.triggerError = t("./triggerError.js"), s.prototype.validateInput = t("./validateInput.js"), e.exports = s;
  }, {
    "./animateColors.js": 2,
    "./changeBlendingMode.js": 3,
    "./changeDirection.js": 4,
    "./changeState.js": 5,
    "./clear.js": 6,
    "./convertColorToRgba.js": 7,
    "./destroy.js": 8,
    "./eventPolyfill.js": 9,
    "./getColor.js": 10,
    "./getColorDiff.js": 11,
    "./getColorPos.js": 12,
    "./getColorPosDiff.js": 13,
    "./getCurrentColors.js": 14,
    "./getCurrentColorsPos.js": 15,
    "./getDimensions.js": 16,
    "./getElement.js": 17,
    "./getLightness.js": 18,
    "./makeGradient.js": 19,
    "./onResize.js": 20,
    "./onScroll.js": 21,
    "./pause.js": 22,
    "./pauseWhenNotInView.js": 23,
    "./play.js": 24,
    "./prepareImage.js": 25,
    "./refreshColorsAndPos.js": 26,
    "./setColors.js": 27,
    "./setDirection.js": 28,
    "./setSizeAttributes.js": 29,
    "./triggerError.js": 30,
    "./validateInput.js": 31
  }],
  2: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e,
          i,
          s,
          o = t - this.previousTimeStamp > 100,
          n = void 0 === this.states[this.activeState].loop || this.states[this.activeState].loop;
      (null === this.previousTimeStamp || o) && (this.previousTimeStamp = t), this.progress = this.progress + (t - this.previousTimeStamp), e = (this.progress / this.activetransitionSpeed * 100).toFixed(2), this.previousTimeStamp = t, this.refreshColorsAndPos(e), e < 100 ? this.animation = requestAnimationFrame(this.animateColors.bind(this)) : this.channelsIndex < this.states[this.activeState].gradients.length - 2 || n ? (this.isChangingState && (this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3, this.isChangingState = !1), this.previousTimeStamp = null, this.progress = 0, this.channelsIndex++, i = !1, this.channelsIndex === this.states[this.activeState].gradients.length - 1 ? i = !0 : this.channelsIndex === this.states[this.activeState].gradients.length && (this.channelsIndex = 0), s = void 0 === this.states[this.activeState].gradients[this.channelsIndex + 1] ? this.states[this.activeState].gradients[0] : this.states[this.activeState].gradients[this.channelsIndex + 1], this.setColors(), this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.callbacks.onGradientChange && this.callbacks.onGradientChange({
        isLooping: i,
        colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
        colorsTo: s,
        activeState: this.activeState
      }), this.canvas.dispatchEvent(this.events.gradientChange({
        isLooping: i,
        colorsFrom: this.states[this.activeState].gradients[this.channelsIndex],
        colorsTo: s,
        activeState: this.activeState
      }))) : (cancelAnimationFrame(this.animation), this.callbacks.onEnd && this.callbacks.onEnd(), this.canvas.dispatchEvent(new CustomEvent("granim:end")));
    };
  }, {}],
  3: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      this.context.clearRect(0, 0, this.x1, this.y1), this.context.globalCompositeOperation = this.image.blendingMode = t, this.validateInput("blendingMode"), this.isPaused && this.refreshColorsAndPos();
    };
  }, {}],
  4: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      this.context.clearRect(0, 0, this.x1, this.y1), this.direction = t, this.validateInput("direction"), this.isPaused && this.refreshColorsAndPos();
    };
  }, {}],
  5: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e = this;
      this.activeState !== t && (this.isPaused || (this.isPaused = !0, this.pause()), this.channelsIndex = -1, this.activetransitionSpeed = this.stateTransitionSpeed, this.activeColorsDiff = [], this.activeColorsPosDiff = [], this.activeColors = this.getCurrentColors(), this.activeColorsPos = this.getCurrentColorsPos(), this.progress = 0, this.previousTimeStamp = null, this.isChangingState = !0, this.states[t].gradients[0].forEach(function (t, i, s) {
        var o = e.convertColorToRgba(e.getColor(t)),
            n = e.getColorPos(t, i),
            r = e.getColorDiff(e.activeColors[i], o),
            a = e.getColorPosDiff(e.activeColorsPos[i], n);
        e.activeColorsDiff.push(r), e.activeColorsPosDiff.push(a);
      }), this.activeState = t, this.play());
    };
  }, {}],
  6: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      this.isPaused ? this.isPaused = !1 : cancelAnimationFrame(this.animation), this.isCleared = !0, this.context.clearRect(0, 0, this.x1, this.y1);
    };
  }, {}],
  7: [function (t, e, i) {
    "use strict";

    function s(t) {
      var e = _Object$keys(h),
          i = 0;

      for (i; i < e.length; i++) {
        if (a = h[e[i]].exec(t)) return e[i];
      }

      return !1;
    }

    function o(t) {
      var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      t = t.replace(e, function (t, e, i, s) {
        return e + e + i + i + s + s;
      });
      var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return i ? [_parseInt(i[1], 16), _parseInt(i[2], 16), _parseInt(i[3], 16), 1] : null;
    }

    function n(t, e, i) {
      return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < .5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
    }

    function r(t, e, i, s) {
      var o, r, a, h, c;
      return 0 === e ? o = r = a = i : (h = i < .5 ? i * (1 + e) : i + e - i * e, c = 2 * i - h, o = n(c, h, t + 1 / 3), r = n(c, h, t), a = n(c, h, t - 1 / 3)), [Math.round(255 * o), Math.round(255 * r), Math.round(255 * a), s];
    }

    var a,
        h = {
      hexa: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
      rgba: /^rgba\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3}), ?(.?\d{1,3})\)$/,
      rgb: /^rgb\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)$/,
      hsla: /^hsla\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%, ?(.?\d{1,3})\)$/,
      hsl: /^hsl\((\d{1,3}), ?(\d{1,3})%, ?(\d{1,3})%\)$/
    };

    e.exports = function (t) {
      switch (s(t)) {
        default:
          this.triggerError("colorType");

        case "hexa":
          return o(t);

        case "rgba":
          return [_parseInt(a[1], 10), _parseInt(a[2], 10), _parseInt(a[3], 10), _parseFloat(a[4])];

        case "rgb":
          return [_parseInt(a[1], 10), _parseInt(a[2], 10), _parseInt(a[3], 10), 1];

        case "hsla":
          return r(_parseInt(a[1], 10) / 360, _parseInt(a[2], 10) / 100, _parseInt(a[3], 10) / 100, _parseFloat(a[4]));

        case "hsl":
          return r(_parseInt(a[1], 10) / 360, _parseInt(a[2], 10) / 100, _parseInt(a[3], 10) / 100, 1);
      }
    };
  }, {}],
  8: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      this.onResize("removeListeners"), this.onScroll("removeListeners"), this.clear();
    };
  }, {}],
  9: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      function t(t, e) {
        e = e || {
          bubbles: !1,
          cancelable: !1,
          detail: void 0
        };
        var i = document.createEvent("CustomEvent");
        return i.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), i;
      }

      "function" != typeof window.CustomEvent && (t.prototype = window.Event.prototype, window.CustomEvent = t);
    };
  }, {}],
  10: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      return "string" == typeof t ? t : "object" == typeof t && t.color ? t.color : void this.triggerError("gradient.color");
    };
  }, {}],
  11: [function (t, e, i) {
    "use strict";

    e.exports = function (t, e) {
      var i = 0,
          s = [];

      for (i; i < 4; i++) {
        s.push(e[i] - t[i]);
      }

      return s;
    };
  }, {}],
  12: [function (t, e, i) {
    "use strict";

    e.exports = function (t, e) {
      return "object" == typeof t && t.pos ? t.pos : _parseFloat(e ? (1 / (this.gradientLength - 1) * e).toFixed(2) : 0);
    };
  }, {}],
  13: [function (t, e, i) {
    "use strict";

    e.exports = function (t, e) {
      return e - t;
    };
  }, {}],
  14: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t,
          e,
          i = [];

      for (t = 0; t < this.currentColors.length; t++) {
        for (i.push([]), e = 0; e < 4; e++) {
          i[t].push(this.currentColors[t][e]);
        }
      }

      return i;
    };
  }, {}],
  15: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t,
          e = [];

      for (t = 0; t < this.currentColorsPos.length; t++) {
        e.push(this.currentColorsPos[t]);
      }

      return e;
    };
  }, {}],
  16: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      this.x1 = this.canvas.offsetWidth, this.y1 = this.canvas.offsetHeight;
    };
  }, {}],
  17: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      if (t instanceof HTMLCanvasElement) this.canvas = t;else {
        if ("string" != typeof t) throw new Error("The element you used is neither a String, nor a HTMLCanvasElement");
        this.canvas = document.querySelector(t);
      }
      if (!this.canvas) throw new Error("`" + t + "` could not be found in the DOM");
    };
  }, {}],
  18: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t,
          e,
          i = this.getCurrentColors(),
          s = null,
          o = i.map(function (t) {
        return Math.max(t[0], t[1], t[2]);
      });

      for (e = 0; e < o.length; e++) {
        s = null === s ? o[e] : s + o[e], e === o.length - 1 && (t = Math.round(s / (e + 1)));
      }

      return t >= 128 ? "light" : "dark";
    };
  }, {}],
  19: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t = this.setDirection(),
          e = document.querySelector(this.elToSetClassOn).classList,
          i = 0;

      for (this.context.clearRect(0, 0, this.x1, this.y1), this.image && this.context.drawImage(this.imageNode, this.imagePosition.x, this.imagePosition.y, this.imagePosition.width, this.imagePosition.height), i; i < this.currentColors.length; i++) {
        t.addColorStop(this.currentColorsPos[i], "rgba(" + this.currentColors[i][0] + ", " + this.currentColors[i][1] + ", " + this.currentColors[i][2] + ", " + this.currentColors[i][3] + ")");
      }

      this.name && ("light" === this.getLightness() ? (e.remove(this.name + "-dark"), e.add(this.name + "-light")) : (e.remove(this.name + "-light"), e.add(this.name + "-dark"))), this.context.fillStyle = t, this.context.fillRect(0, 0, this.x1, this.y1);
    };
  }, {}],
  20: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      return "removeListeners" === t ? void window.removeEventListener("resize", this.setSizeAttributesNameSpace) : void window.addEventListener("resize", this.setSizeAttributesNameSpace);
    };
  }, {}],
  21: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      return "removeListeners" === t ? void window.removeEventListener("scroll", this.pauseWhenNotInViewNameSpace) : (window.addEventListener("scroll", this.pauseWhenNotInViewNameSpace), void this.pauseWhenNotInViewNameSpace());
    };
  }, {}],
  22: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e = "isPausedBecauseNotInView" === t;
      this.isCleared || (e || (this.isPaused = !0), cancelAnimationFrame(this.animation), this.animating = !1);
    };
  }, {}],
  23: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t = this;
      this.scrollDebounceTimeout && clearTimeout(this.scrollDebounceTimeout), this.scrollDebounceTimeout = setTimeout(function () {
        var e = t.canvas.getBoundingClientRect();

        if (t.isCanvasInWindowView = !(e.bottom < 0 || e.right < 0 || e.left > window.innerWidth || e.top > window.innerHeight), t.isCanvasInWindowView) {
          if (!t.isPaused || t.firstScrollInit) {
            if (t.image && !t.isImgLoaded) return;
            t.isPausedBecauseNotInView = !1, t.play("isPlayedBecauseInView"), t.firstScrollInit = !1;
          }
        } else !t.image && t.firstScrollInit && (t.refreshColorsAndPos(), t.firstScrollInit = !1), t.isPaused || t.isPausedBecauseNotInView || (t.isPausedBecauseNotInView = !0, t.pause("isPausedBecauseNotInView"));
      }, this.scrollDebounceThreshold);
    };
  }, {}],
  24: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e = "isPlayedBecauseInView" === t;
      e || (this.isPaused = !1), this.isCleared = !1, this.animating || (this.animation = requestAnimationFrame(this.animateColors.bind(this)), this.animating = !0);
    };
  }, {}],
  25: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      function t() {
        function t(t) {
          var i,
              s = e[t + "1"],
              o = e["x" === t ? "imgOriginalWidth" : "imgOriginalHeight"],
              n = "x" === t ? e.image.position[0] : e.image.position[1];

          switch (n) {
            case "center":
              i = o > s ? -(o - s) / 2 : (s - o) / 2, e.imagePosition[t] = i, e.imagePosition["x" === t ? "width" : "height"] = o;
              break;

            case "top":
              e.imagePosition.y = 0, e.imagePosition.height = o;
              break;

            case "bottom":
              e.imagePosition.y = s - o, e.imagePosition.height = o;
              break;

            case "right":
              e.imagePosition.x = s - o, e.imagePosition.width = o;
              break;

            case "left":
              e.imagePosition.x = 0, e.imagePosition.width = o;
          }

          if (e.image.stretchMode) switch (n = "x" === t ? e.image.stretchMode[0] : e.image.stretchMode[1]) {
            case "none":
              break;

            case "stretch":
              e.imagePosition[t] = 0, e.imagePosition["x" === t ? "width" : "height"] = s;
              break;

            case "stretch-if-bigger":
              if (o < s) break;
              e.imagePosition[t] = 0, e.imagePosition["x" === t ? "width" : "height"] = s;
              break;

            case "stretch-if-smaller":
              if (o > s) break;
              e.imagePosition[t] = 0, e.imagePosition["x" === t ? "width" : "height"] = s;
          }
        }

        var i, s;

        for (i = 0; i < 2; i++) {
          s = i ? "y" : "x", t(s);
        }
      }

      var e = this;
      return this.imagePosition || (this.imagePosition = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      }), this.image.blendingMode && (this.context.globalCompositeOperation = this.image.blendingMode), this.imageNode ? void t() : (this.imageNode = new Image(), this.imageNode.onerror = function () {
        throw new Error("Granim: The image source is invalid.");
      }, this.imageNode.onload = function () {
        e.imgOriginalWidth = e.imageNode.width, e.imgOriginalHeight = e.imageNode.height, t(), e.refreshColorsAndPos(), e.isPausedWhenNotInView && !e.isCanvasInWindowView || (e.animation = requestAnimationFrame(e.animateColors.bind(e))), e.isImgLoaded = !0;
      }, void (this.imageNode.src = this.image.source));
    };
  }, {}],
  26: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e,
          i,
          s,
          o,
          n = this;

      for (s = 0; s < this.activeColors.length; s++) {
        for (o = 0; o < 4; o++) {
          e = n.activeColors[s][o] + (3 !== o ? Math.ceil(n.activeColorsDiff[s][o] / 100 * t) : Math.round(n.activeColorsDiff[s][o] / 100 * t * 100) / 100), e <= 255 && e >= 0 && (n.currentColors[s][o] = e);
        }

        i = _parseFloat((n.activeColorsPos[s] + n.activeColorsPosDiff[s] / 100 * t).toFixed(4)), i <= 1 && i >= 0 && (n.currentColorsPos[s] = i);
      }

      this.makeGradient();
    };
  }, {}],
  27: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t,
          e,
          i,
          s,
          o = this;
      return this.channels[this.activeState] || (this.channels[this.activeState] = []), void 0 !== this.channels[this.activeState][this.channelsIndex] ? (this.activeColors = this.channels[this.activeState][this.channelsIndex].colors, this.activeColorsDiff = this.channels[this.activeState][this.channelsIndex].colorsDiff, this.activeColorsPos = this.channels[this.activeState][this.channelsIndex].colorsPos, void (this.activeColorsPosDiff = this.channels[this.activeState][this.channelsIndex].colorsPosDiff)) : (this.channels[this.activeState].push([{}]), this.channels[this.activeState][this.channelsIndex].colors = [], this.channels[this.activeState][this.channelsIndex].colorsDiff = [], this.channels[this.activeState][this.channelsIndex].colorsPos = [], this.channels[this.activeState][this.channelsIndex].colorsPosDiff = [], this.activeColors = [], this.activeColorsDiff = [], this.activeColorsPos = [], this.activeColorsPosDiff = [], this.states[this.activeState].gradients[this.channelsIndex].forEach(function (n, r) {
        var a = o.getColorPos(n, r),
            n = o.getColor(n),
            h = o.convertColorToRgba(n),
            c = o.channels[o.activeState];
        c[o.channelsIndex].colors.push(h), o.activeColors.push(h), c[o.channelsIndex].colorsPos.push(a), o.activeColorsPos.push(a), o.isCurrentColorsSet || (o.currentColors.push(o.convertColorToRgba(n)), o.currentColorsPos.push(a)), o.channelsIndex === o.states[o.activeState].gradients.length - 1 ? (t = o.getColorDiff(c[o.channelsIndex].colors[r], c[0].colors[r]), e = o.getColorPosDiff(c[o.channelsIndex].colorsPos[r], c[0].colorsPos[r])) : (i = o.convertColorToRgba(o.getColor(o.states[o.activeState].gradients[o.channelsIndex + 1][r])), s = o.getColorPos(o.states[o.activeState].gradients[o.channelsIndex + 1][r], r), t = o.getColorDiff(c[o.channelsIndex].colors[r], i), e = o.getColorPosDiff(c[o.channelsIndex].colorsPos[r], s)), c[o.channelsIndex].colorsDiff.push(t), o.activeColorsDiff.push(t), c[o.channelsIndex].colorsPosDiff.push(e), o.activeColorsPosDiff.push(e);
      }), this.activetransitionSpeed = this.states[this.activeState].transitionSpeed || 5e3, void (this.isCurrentColorsSet = !0));
    };
  }, {}],
  28: [function (t, e, i) {
    "use strict";

    function s(t, e) {
      return t.indexOf("%") > -1 ? e / 100 * _parseInt(t.split("%")[0], 10) : _parseInt(t.split("px")[0], 10);
    }

    e.exports = function () {
      var t = this.context;

      switch (this.direction) {
        case "diagonal":
          return t.createLinearGradient(0, 0, this.x1, this.y1);

        case "left-right":
          return t.createLinearGradient(0, 0, this.x1, 0);

        case "top-bottom":
          return t.createLinearGradient(this.x1 / 2, 0, this.x1 / 2, this.y1);

        case "radial":
          return t.createRadialGradient(this.x1 / 2, this.y1 / 2, this.x1 / 2, this.x1 / 2, this.y1 / 2, 0);

        case "custom":
          return t.createLinearGradient(s(this.customDirection.x0, this.x1), s(this.customDirection.y0, this.y1), s(this.customDirection.x1, this.x1), s(this.customDirection.y1, this.y1));
      }
    };
  }, {}],
  29: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      this.getDimensions(), this.canvas.setAttribute("width", this.x1), this.canvas.setAttribute("height", this.y1), this.image && this.prepareImage(), this.refreshColorsAndPos();
    };
  }, {}],
  30: [function (t, e, i) {
    "use strict";

    e.exports = function (t) {
      var e = "https://sarcadass.github.io/granim.js/api.html";
      throw new Error('Granim: Input error on "' + t + '" option.\nCheck the API ' + e + ".");
    };
  }, {}],
  31: [function (t, e, i) {
    "use strict";

    function s(t) {
      for (var e, i = !0, s = 0; i && s < t.length;) {
        if (e = t[s], "string" != typeof e) i = !1;else {
          var o = null,
              n = null;
          e.indexOf("px") !== -1 && (n = "px"), e.indexOf("%") !== -1 && (n = "%"), o = e.split(n).filter(function (t) {
            return t.length > 0;
          }), (!n || o.length > 2 || !o[0] || o[1] || !/^-?\d+\.?\d*$/.test(o[0])) && (i = !1);
        }
        s++;
      }

      return i;
    }

    e.exports = function (t) {
      var e = ["left", "center", "right"],
          i = ["top", "center", "bottom"],
          o = ["none", "stretch", "stretch-if-smaller", "stretch-if-bigger"],
          n = ["multiply", "screen", "normal", "overlay", "darken", "lighten", "lighter", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"],
          r = ["diagonal", "left-right", "top-bottom", "radial", "custom"];

      switch (t) {
        case "image":
          _Array$isArray(this.image.position) && 2 === this.image.position.length && e.indexOf(this.image.position[0]) !== -1 && i.indexOf(this.image.position[1]) !== -1 || this.triggerError("image.position"), this.image.stretchMode && (_Array$isArray(this.image.stretchMode) && 2 === this.image.stretchMode.length && o.indexOf(this.image.stretchMode[0]) !== -1 && o.indexOf(this.image.stretchMode[1]) !== -1 || this.triggerError("image.stretchMode"));
          break;

        case "blendingMode":
          n.indexOf(this.image.blendingMode) === -1 && (this.clear(), this.triggerError("blendingMode"));
          break;

        case "direction":
          r.indexOf(this.direction) === -1 ? this.triggerError("direction") : "custom" === this.direction && (s([this.customDirection.x0, this.customDirection.x1, this.customDirection.y0, this.customDirection.y1]) || this.triggerError("customDirection"));
      }
    };
  }, {}],
  32: [function (t, e, i) {
    window.Granim = t("./lib/Granim.js");
  }, {
    "./lib/Granim.js": 1
  }]
}, {}, [32]);

/***/ })

}]);
//# sourceMappingURL=1.js.map