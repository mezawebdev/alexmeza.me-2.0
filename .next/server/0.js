exports.ids = [0];
exports.modules = {

/***/ "./assets/scss/backgrounds.scss":
/*!**************************************!*\
  !*** ./assets/scss/backgrounds.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/World/Backgrounds.js":
/*!*****************************************!*\
  !*** ./components/World/Backgrounds.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _public_js_vendor_granim_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../public/js/vendor/granim.min.js */ "./public/js/vendor/granim.min.js");
/* harmony import */ var _public_js_vendor_granim_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_vendor_granim_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/scss/backgrounds.scss */ "./assets/scss/backgrounds.scss");
/* harmony import */ var _assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_backgrounds_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/RescueAMeza_SD/Desktop/Desktop/mezaWebLab/Personal/alexmeza.me Version 2/components/World/Backgrounds.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





class Backgrounds extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.colorBackground = new Granim({
      element: '#bottom-color-background',
      direction: 'top-bottom',
      isPausedWhenNotInView: true,
      states: {
        "default-state": {
          gradients: _Config__WEBPACK_IMPORTED_MODULE_1__["default"].backgrounds.bottomColorBackground.gradients
        }
      }
    });
  }

  render() {
    return __jsx("div", {
      style: _Config__WEBPACK_IMPORTED_MODULE_1__["default"].backgrounds.style,
      id: "backgrounds",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      style: _Config__WEBPACK_IMPORTED_MODULE_1__["default"].backgrounds.centerGradientBackground.style,
      id: "gradient-center-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("canvas", {
      style: _Config__WEBPACK_IMPORTED_MODULE_1__["default"].backgrounds.bottomColorBackground.style,
      id: "bottom-color-background",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Backgrounds);

/***/ }),

/***/ "./components/World/Buildings.js":
/*!***************************************!*\
  !*** ./components/World/Buildings.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");


class Buildings {
  constructor(scene) {
    this.scene = scene;
    this.meshes = [];
    this.createBuildings();
  }

  createBuildings() {
    _Config__WEBPACK_IMPORTED_MODULE_0__["default"].buildings.meshes.forEach(mesh => {
      var randomKey = `building-${Math.round(Math.random() * 10000)}`,
          gridMaterial = new BABYLON.GridMaterial(`gridMaterial-${Math.round(Math.random() * 100)}`, this.scene),
          highlightMaterial = new BABYLON.StandardMaterial("highlightMaterial", this.scene),
          currentMesh;
      gridMaterial.mainColor = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].buildings.material.mainColor;
      gridMaterial.lineColor = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].buildings.material.lineColor;
      gridMaterial.gridRatio = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].buildings.material.gridRatio;
      gridMaterial.backFaceCulling = false;
      gridMaterial.majorUnitFrequency = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].buildings.material.majorUnitFrequency;
      gridMaterial.opacity = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].buildings.material.opacity; // standardMaterial.emissiveTexture = new BABYLON.Texture("/images/grid-texture-blue-2.png", this.scene);
      // standardMaterial.emissiveTexture.uScale = 0.75;
      // standardMaterial.emissiveTexture.vScale = 1.5;

      highlightMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0);

      switch (mesh.shape) {
        case "rectangle":
          this.meshes.push(new BABYLON.MeshBuilder.CreateBox(randomKey, {
            width: mesh.width,
            height: mesh.height,
            depth: mesh.depth
          }, this.scene));
          break;
      }

      currentMesh = this.meshes[this.meshes.length - 1];
      currentMesh.material = gridMaterial;
      currentMesh.rotation.y = mesh.rotation;
      currentMesh.position.x = mesh.x;
      currentMesh.position.z = mesh.z;

      if (mesh.highlight) {
        currentMesh.material = highlightMaterial;
      } else {
        currentMesh.material = gridMaterial;
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Buildings);

/***/ }),

/***/ "./components/World/Camera.js":
/*!************************************!*\
  !*** ./components/World/Camera.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");
// import * as BABYLON from "babylonjs";



class Camera {
  constructor(canvas, scene) {
    this.scene = scene;
    this.setCamera();
    this.animate();
    this.camera.minZ = 0;

    if (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].debug.cameraControls) {
      this.camera.attachControl(canvas, true);
    }
  }

  setCamera() {
    switch (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.type) {
      case "free":
        this.camera = new BABYLON.UniversalCamera("UniversalCamera", new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.z), this.scene);
        this.createTarget();
        this.camera.setTarget(new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.x, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.y, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.z));
        break;

      case "arc":
        this.camera = new BABYLON.ArcRotateCamera("Camera", _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.x, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.y, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.z, new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.z), this.scene);
        this.createTarget();
        break;

      case "follow":
        this.camera = new BABYLON.FollowCamera("Camera", new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.z), this.scene);
        this.createTarget();
        break;
    }
  }

  createTarget() {
    this.targetSphere = new BABYLON.MeshBuilder.CreateSphere("target", {
      diameter: _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.diameter
    }, this.scene);
    this.targetSphere.material = new BABYLON.StandardMaterial("transparent-material", this.scene);
    this.targetSphere.material.emissiveColor = new BABYLON.Color3(1, 0, 0);
    this.targetSphere.material.alpha = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.showTarget ? 1 : 0;
    this.targetSphere.position = new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.x, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.y, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.z);

    if (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.type === "arc") {
      this.camera.lockedTarget = this.targetSphere;
    }

    this.camera.position = new BABYLON.Vector3(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialPosition.z);
  }

  animate() {// this.scene.onPointerObservable.add(pointerInfo => {
    //     switch (pointerInfo.type) {
    //         case BABYLON.PointerEventTypes.POINTERDOWN:
    //             console.log("POINTER DOWN");
    //             // this.targetSphere.position.y += -0.01;
    //             // this.camera.position.y += -0.1;
    //             // console.log(this.camera.position.y);
    //             break;
    //         case BABYLON.PointerEventTypes.POINTERUP:
    //             console.log("POINTER UP");
    //             // this.targetSphere.position.y += 0.01;
    //             // this.camera.position.y += 0.1;
    //             // console.log(this.camera.position.y);
    //             break;
    //         case BABYLON.PointerEventTypes.POINTERMOVE:
    //             // this.camera.position.y += 0.1;
    //             this.targetSphere.position.y += 0.01;
    //             console.log(pointerInfo);
    //             console.log("POINTER MOVE");
    //             // this.camera.position.y += -0.001;
    //             break;
    //         case BABYLON.PointerEventTypes.POINTERWHEEL:
    //             console.log("POINTER WHEEL");
    //             // this.targetSphere.position.y += -0.01;
    //             break;
    //         case BABYLON.PointerEventTypes.POINTERPICK:
    //             console.log("POINTER PICK");
    //             break;
    //         case BABYLON.PointerEventTypes.POINTERTAP:
    //             console.log("POINTER TAP");
    //             break;
    //         case BABYLON.PointerEventTypes.POINTERDOUBLETAP:
    //             console.log("POINTER DOUBLE-TAP");
    //             break;
    //     }
    // });
  }

}

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
  responsive: {
    sizes: {
      origin: 0,
      small: 640,
      medium: 767,
      large: 1200,
      xlarge: 1400
    }
  },
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
  lights: {
    enabled: true,
    all: []
  },
  consciousness: {
    enabled: true,
    walkSpeed: 0.003
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
  title: {
    enabled: false,
    text: "ALEX MEZA",
    settings: {
      default: {
        scale: 0.027,
        z: 1.56,
        x: 1,
        y: 4.4
      },
      medium: {}
    }
  },
  stars: {
    enabled: true,
    animated: true,
    amount: 300,
    minSize: 0.0025,
    maxSize: 0.007,
    minPos: -10,
    maxPos: 50,
    fadeInSpeed: 0.05,
    rotationSpeed: 0.01
  },
  camera: {
    type: "free",
    maxZ: 0.001,
    showTarget: false,
    initialPosition: {
      x: -0.11,
      y: 0.05,
      z: -0.11
    },
    initialTarget: {
      x: 0.1,
      y: 0.075,
      z: 0.1,
      diameter: 0.01
    },
    walk: true,
    walkSpeed: 0.005
  },
  effects: {
    enabled: true,
    glow: {
      intensity: 0.75
    },
    fog: {
      enabled: false,
      density: 0.01,
      color: new BABYLON.Color3.FromHexString("#000000")
    },
    lens: {
      enabled: true
    }
  },
  grid: {
    enabled: true,
    animated: true,
    verticalLinesAmount: 100,
    horizontalLinesAmount: 60,
    color: new BABYLON.Color3.FromHexString("#F706CF"),
    frequency: 0.05,
    diameter: 0.001,
    height: 10,
    speed: 0.003
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
    }]
  },
  sky: {
    enabled: true,
    colors: {
      top: {
        r: 8,
        g: 13,
        b: 46
      },
      bottom: {
        r: 247,
        g: 6,
        b: 207
      }
    }
  },
  sun: {
    enabled: true,
    diameter: 9,
    position: {
      x: 17,
      y: 0,
      z: 17
    },
    color: "#FF6C11"
  },
  planes: [{
    enabled: true,
    followCamera: true,
    width: 15,
    height: 15,
    y: -0.01,
    rotation: 0.7854,
    material: {
      color: new BABYLON.Color3.FromHexString("#000000")
    }
  }],
  buildings: {
    enabled: true,
    material: {
      mainColor: new BABYLON.Color3.FromHexString("#000000"),
      lineColor: new BABYLON.Color3.FromHexString("#2de2e6"),
      gridRatio: 0.11,
      majorUnitFrequency: 0.5,
      opacity: 1
    },
    meshes: [{
      shape: "rectangle",
      highlight: false,
      width: 0.4,
      height: 1.5,
      depth: 0.5,
      x: 9,
      z: 9.5,
      rotation: Math.PI / 4
    }, {
      shape: "rectangle",
      highlight: false,
      width: 0.6,
      height: 1,
      depth: 0.5,
      x: 9.5,
      z: 9,
      rotation: Math.PI / 4
    }, {
      shape: "rectangle",
      highlight: false,
      width: 0.4,
      height: 1.25,
      depth: 0.5,
      x: 9,
      z: 10.5,
      rotation: Math.PI / 4
    }, {
      shape: "rectangle",
      highlight: false,
      width: 0.4,
      height: 2,
      depth: 0.5,
      x: 10.5,
      z: 9,
      rotation: Math.PI / 4
    }, {
      shape: "rectangle",
      highlight: false,
      width: 0.4,
      height: 2,
      depth: 0.5,
      x: 10.5,
      z: 9,
      rotation: Math.PI / 4
    }, {
      shape: "rectangle",
      highlight: false,
      width: 0.6,
      height: 0.7,
      depth: 0.5,
      x: 10,
      z: 11,
      rotation: Math.PI / 4
    }]
  }
});

/***/ }),

/***/ "./components/World/Consciousness.js":
/*!*******************************************!*\
  !*** ./components/World/Consciousness.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");


class Consciousness {
  constructor(world) {
    this.world = world;
  }

  update() {
    if (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.animated) {
      this.world.grid.animate();
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.animated) {
      this.world.stars.animate();
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Consciousness);

/***/ }),

/***/ "./components/World/Effects.js":
/*!*************************************!*\
  !*** ./components/World/Effects.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
 // import * as BABYLON from 'babylonjs';

class Effects {
  constructor(world) {
    this.world = world;
    this.createGlow(); // this.extraEffects();

    if (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].effects.fog.enabled) {
      this.createFog();
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].effects.lens.enabled) {
      this.enableLens();
    }
  }

  createGlow() {
    this.glow = new BABYLON.GlowLayer("glow", this.world.scene);
    this.glow.intensity = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].effects.glow.intensity;
  }

  createFog() {
    this.world.scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
    this.world.scene.fogDensity = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].effects.fog.density;
    this.world.scene.fogColor = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].effects.fog.color;
  }

  enableLens() {// this.lensEffect = new BABYLON.LensRenderingPipeline('lens', {
    //     edge_blur: 1.0,
    //     chromatic_aberration: 1.0,
    //     distortion: 1.0,
    //     dof_focus_distance: 50,
    //     dof_aperture: 6.0,			// set this very high for tilt-shift effect
    //     grain_amount: 1.0,
    //     dof_pentagon: true,
    //     dof_gain: 1.0,
    //     dof_threshold: 1.0,
    //     dof_darken: 0.25
    // }, this.world.scene, 1.0, this.world.camera);
    // console.log(BABYLON.FxaaPostProcess);
    // this.world.camera.getScene = () => { return this.world.scene; };
    // var postProcess = new BABYLON.BlurPostProcess("Horizontal blur", new BABYLON.Vector2(2, 5), 32, 0.25);
    // var postProcess = new BABYLON.FxaaPostProcess("fxaa", 1.0, null, null, this.world.engine);
    // this.world.camera.attachPostProcess(postProcess);
    // this.postProcess = new BABYLON.FxaaPostProcess("fxaa", 1.0, null, null, this.world.engine);
  }

  extraEffects() {
    this.glowBar = new BABYLON.MeshBuilder.CreateBox("glowBar", {
      width: 7,
      height: 0.5,
      depth: 0.1
    }, this.world.scene);
    this.glowBar.material = new BABYLON.StandardMaterial("glow-material", this.scene);
    this.glowBar.material.emissiveColor = new BABYLON.Color3.FromHexString(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].palette[0]);
    this.glowBar.rotation.y = Math.PI / 4;
    this.glowBar.position.x = 8.25;
    this.glowBar.position.z = 8.25;
    this.glowBar.position.y = -0.275; // var hl = new BABYLON.HighlightLayer("hl1", this.world.scene, true);
    // hl.addMesh(this.glowBar, new BABYLON.Color3.FromHexString(Config.palette[0]));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Effects);

/***/ }),

/***/ "./components/World/Grid.js":
/*!**********************************!*\
  !*** ./components/World/Grid.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");


class Grid {
  constructor(scene) {
    this.scene = scene;
    this.verticalLines = [];
    this.horizontalLines = [];
    this.horizontalLineRotation = 1.57;
    this.verticalLineRotation = 1.57;
    this.horizontalLinesInitialMax = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.horizontalLinesAmount;
    this.createGrid();
  }

  createGrid() {
    // Horizontal Lines
    for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.horizontalLinesAmount; i++) {
      this.newHorizontalLine(new BABYLON.Vector3(i * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.frequency, 0, i * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.frequency));
    }

    this.horizontalLines.forEach(line => {
      line.uniqueKey = `line-${Math.round(Math.random() * 10000000)}`;
    }); // Vertical Lines

    this.newVerticalLine(new BABYLON.Vector3(0, 0, 0));

    for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.verticalLinesAmount / 2; i++) {
      if (i > 0) {
        this.newVerticalLine(new BABYLON.Vector3(i * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.frequency, 0, 0));
      }
    }

    for (let i = 0; i < _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.verticalLinesAmount / 2; i++) {
      if (i > 0) {
        this.newVerticalLine(new BABYLON.Vector3(0, 0, i * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.frequency));
      }
    }
  }

  newHorizontalLine(position) {
    this.horizontalLines.push(new BABYLON.MeshBuilder.CreateCylinder("grid-line", {
      diameter: _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.diameter,
      height: _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.height
    }, this.scene));
    this.horizontalLines.last().position = position;
    this.horizontalLines.last().rotate(BABYLON.Axis.X, this.horizontalLineRotation, BABYLON.Space.WORLD);
    this.horizontalLines.last().rotate(BABYLON.Axis.Y, -this.horizontalLineRotation / 2, BABYLON.Space.WORLD);
    this.horizontalLines.last().material = new BABYLON.StandardMaterial("material", this.scene);
    this.horizontalLines.last().material.emissiveColor = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.color;
  }

  newVerticalLine(position) {
    this.verticalLines.push(new BABYLON.MeshBuilder.CreateCylinder("grid-line", {
      diameter: _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.diameter,
      height: 10
    }, this.scene));
    this.verticalLines.last().rotate(BABYLON.Axis.X, this.verticalLineRotation, BABYLON.Space.WORLD);
    this.verticalLines.last().rotate(BABYLON.Axis.Y, this.verticalLineRotation / 2, BABYLON.Space.WORLD);
    this.verticalLines.last().position = position;
    this.verticalLines.last().material = new BABYLON.StandardMaterial("material", this.scene);
    this.verticalLines.last().material.emissiveColor = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.color;
  }

  animate() {
    // Grid
    var i = 0,
        sceneOriginOffset = -0.1;
    this.horizontalLines.forEach(line => {
      line.position.x += -_Config__WEBPACK_IMPORTED_MODULE_0__["default"].consciousness.walkSpeed;
      line.position.z += -_Config__WEBPACK_IMPORTED_MODULE_0__["default"].consciousness.walkSpeed;

      if (line.position.x <= sceneOriginOffset + _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.diameter && line.position.z <= sceneOriginOffset + _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.diameter && line.position.x >= sceneOriginOffset - _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.diameter && line.position.z >= sceneOriginOffset - _Config__WEBPACK_IMPORTED_MODULE_0__["default"].camera.initialTarget.diameter) {
        line.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
        line.dispose();
        this.horizontalLines.splice(i, 1);
        this.newHorizontalLine(new BABYLON.Vector3(this.horizontalLinesInitialMax * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.frequency, 0, this.horizontalLinesInitialMax * _Config__WEBPACK_IMPORTED_MODULE_0__["default"].grid.frequency));
      }

      i++;
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Grid);

/***/ }),

/***/ "./components/World/Light.js":
/*!***********************************!*\
  !*** ./components/World/Light.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Light {
  constructor(scene) {
    this.lights = [// new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 1), scene)
    ];
  }

}

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
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");


class Mountains {
  constructor(scene) {
    this.scene = scene;
    this.mountains = [];
    this.createMountains();
    this.setMaterials();
  }

  createMountains() {
    _Config__WEBPACK_IMPORTED_MODULE_0__["default"].mountains.meshes.forEach(mountain => {
      let mesh = new BABYLON.Mesh.CreateGroundFromHeightMap(`ground-${Math.round(Math.random() * 100)}`, mountain.heightMap, mountain.width, mountain.height, mountain.subdivisions, 0, mountain.textureHeight, this.scene, true);
      mesh.rotate(BABYLON.Axis.Y, mountain.rotation, BABYLON.Space.WORLD);
      mesh.position.x = mountain.x;
      mesh.position.z = mountain.z;
      mesh.position.y = mountain.y;
      mesh.grid = mountain.grid;
      this.mountains.push(mesh);
    });
  }

  setMaterials() {
    this.mountains.forEach(mountain => {
      let gridMaterial = new BABYLON.GridMaterial(`gridMaterial-${Math.round(Math.random() * 100)}`, this.scene);
      gridMaterial.mainColor = mountain.grid.mainColor;
      gridMaterial.lineColor = mountain.grid.lineColor;
      gridMaterial.gridRatio = mountain.grid.gridRatio;
      gridMaterial.backFaceCulling = false;
      gridMaterial.majorUnitFrequency = mountain.grid.majorUnitFrequency;
      gridMaterial.opacity = mountain.grid.opacity;
      mountain.material = gridMaterial;
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Mountains);

/***/ }),

/***/ "./components/World/Plane.js":
/*!***********************************!*\
  !*** ./components/World/Plane.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Plane {
  constructor(plane, scene, followCamera) {
    this.plane = plane;
    this.scene = scene;
    this.followCamera = followCamera;
    this.createPlane();
  }

  createPlane() {
    this.plane._mesh = new BABYLON.MeshBuilder.CreateGround("plane", {
      width: this.plane.width,
      height: this.plane.height
    }, this.scene);

    this.plane._mesh.rotate(BABYLON.Axis.Y, this.plane.rotation, BABYLON.Space.WORLD);

    this.plane._mesh.material = new BABYLON.StandardMaterial("material", this.scene);
    this.plane._mesh.material.diffuseColor = this.plane.material.color;
    this.plane._mesh.material.specularColor = this.plane.material.color;
    this.plane._mesh.material.backFaceCulling = true;
    this.plane._mesh.position.y = this.plane.y;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Plane);

/***/ }),

/***/ "./components/World/Sky.js":
/*!*********************************!*\
  !*** ./components/World/Sky.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");


class Sky {
  constructor(scene) {
    this.scene = scene;
    this.skybox = BABYLON.Mesh.CreateSphere("skyBox", 10.0, 1000.0, this.scene);
    BABYLON.Effect.ShadersStore.gradientVertexShader = "precision mediump float;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;uniform mat4 worldViewProjection;varying vec4 vPosition;varying vec3 vNormal;void main(){vec4 p = vec4(position,1.);vPosition = p;vNormal = normal;gl_Position = worldViewProjection * p;}";
    BABYLON.Effect.ShadersStore.gradientPixelShader = "precision mediump float;uniform mat4 worldView;varying vec4 vPosition;varying vec3 vNormal;uniform float offset;uniform vec3 topColor;uniform vec3 bottomColor;void main(void){float h = normalize(vPosition+offset).y;gl_FragColor = vec4(mix(bottomColor,topColor,max(pow(max(h,0.0),0.6),0.0)),1.0);}";
    this.shader = new BABYLON.ShaderMaterial("gradient", this.scene, "gradient", {});
    this.shader.setFloat("offset", 20);
    this.shader.setColor3("topColor", BABYLON.Color3.FromInts(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].sky.colors.top.r, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].sky.colors.top.g, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].sky.colors.top.b));
    this.shader.setColor3("bottomColor", BABYLON.Color3.FromInts(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].sky.colors.bottom.r, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].sky.colors.bottom.g, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].sky.colors.bottom.b));
    this.shader.backFaceCulling = false;
    this.skybox.material = this.shader;
    this.skybox.rotation.x = -2.625;
    this.skybox.rotation.z = -2.625;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sky);

/***/ }),

/***/ "./components/World/Stars.js":
/*!***********************************!*\
  !*** ./components/World/Stars.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");



class Stars {
  constructor(scene) {
    this.scene = scene;
    this.stars = [];
    this.createStars(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.amount, false);
  }

  createStars(amount, fadeIn) {
    fadeIn = fadeIn || false;

    function getRandomMinMax(min, max) {
      return Math.random() * (max - min) + min;
    }

    for (let i = 0; i < amount; i++) {
      let star = BABYLON.MeshBuilder.CreateBox("sphere", {
        size: getRandomMinMax(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.minSize, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.maxSize)
      }, this.scene);
      let starMaterial = new BABYLON.StandardMaterial("myMaterial", this.scene);
      starMaterial.emissiveColor = new BABYLON.Color3.FromHexString(_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].getRandomPaletteColor());

      if (fadeIn) {
        starMaterial.alpha = 0;
      }

      star.position = new BABYLON.Vector3(Math.random(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.minPos, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.maxPos), Math.random(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.minPos, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.maxPos), Math.random(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.minPos, _Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.maxPos));
      star.material = starMaterial;
      this.stars.push(star);
    }
  }

  animate() {
    var i = 0,
        sceneOriginOffset = -0.1;
    this.stars.forEach(star => {
      star.position.x += -_Config__WEBPACK_IMPORTED_MODULE_0__["default"].consciousness.walkSpeed;
      star.position.z += -_Config__WEBPACK_IMPORTED_MODULE_0__["default"].consciousness.walkSpeed;
      star.rotation.x += _Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.rotationSpeed;
      star.rotation.z += _Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.rotationSpeed;
      star.rotation.y += _Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.rotationSpeed;

      if (star.material.alpha < 1) {
        star.material.alpha += _Config__WEBPACK_IMPORTED_MODULE_0__["default"].stars.fadeInSpeed;
      }

      if (star.position.x <= sceneOriginOffset && star.position.z <= sceneOriginOffset) {
        star.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
        star.dispose();
        this.stars.splice(i, 1);
        this.createStars(1, true);
      }

      i++;
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Stars);

/***/ }),

/***/ "./components/World/Sun.js":
/*!*********************************!*\
  !*** ./components/World/Sun.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");


class Sun {
  constructor(scene) {
    this.scene = scene;
    this.init();
  }

  init() {
    this.sphere = new BABYLON.MeshBuilder.CreateSphere("sun", {
      diameter: _Config__WEBPACK_IMPORTED_MODULE_0__["default"].sun.diameter
    }, this.scene);
    this.sphere.material = new BABYLON.StandardMaterial("sun-material", this.scene);
    this.sphere.material.emissiveColor = new BABYLON.Color3.FromHexString(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].sun.color);
    this.sphere.position.x = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].sun.position.x;
    this.sphere.position.z = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].sun.position.z;
    this.sphere.position.y = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].sun.position.y;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sun);

/***/ }),

/***/ "./components/World/Title.js":
/*!***********************************!*\
  !*** ./components/World/Title.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");



class Title {
  constructor(scene) {
    this.scene = scene;
    this.scale = _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].getProp("title", "scale");
    this.x = _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].getProp("title", "x");
    this.y = _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].getProp("title", "y");
    this.z = _Utils__WEBPACK_IMPORTED_MODULE_1__["default"].getProp("title", "z");
    this.rotationY = 0.75;
    this.rotationX = -Math.PI / 2;
    this.createTitle();
  }

  createTitle() {
    let Writer = BABYLON.MeshWriter(this.scene, {
      scale: this.scale
    });
    this.text = new Writer(_Config__WEBPACK_IMPORTED_MODULE_0__["default"].title.text, {
      anchor: "center",
      "letter-height": 0.5,
      "letter-thickness": 0.1,
      colors: {
        emissive: _Config__WEBPACK_IMPORTED_MODULE_0__["default"].palette[0]
      },
      position: {
        z: this.z,
        x: this.x,
        y: this.y
      }
    });
    this.text.getMesh().rotation.y = this.rotationY;
    this.text.getMesh().rotation.x = this.rotationX;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Title);

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
  showWorldAxis(size, scene) {
    var makeTextPlane = function (text, color, size) {
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

  getRandomPaletteColor() {
    return _Config__WEBPACK_IMPORTED_MODULE_0__["default"].palette[Math.round(Math.random() * (_Config__WEBPACK_IMPORTED_MODULE_0__["default"].palette.length - 1))];
  },

  getProp(key1, key2) {
    if (window.innerWidth < _Config__WEBPACK_IMPORTED_MODULE_0__["default"].responsive.sizes.medium) {
      return _Config__WEBPACK_IMPORTED_MODULE_0__["default"][key1].settings.default[key2];
    }

    if (window.innerWidth >= _Config__WEBPACK_IMPORTED_MODULE_0__["default"].responsize.sizes.medium) {}
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Mountains__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mountains */ "./components/World/Mountains.js");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Camera */ "./components/World/Camera.js");
/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Light */ "./components/World/Light.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");
/* harmony import */ var _Effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Effects */ "./components/World/Effects.js");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Stars */ "./components/World/Stars.js");
/* harmony import */ var _Backgrounds__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Backgrounds */ "./components/World/Backgrounds.js");
/* harmony import */ var _Consciousness__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Consciousness */ "./components/World/Consciousness.js");
/* harmony import */ var _Plane__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Plane */ "./components/World/Plane.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Grid */ "./components/World/Grid.js");
/* harmony import */ var _Title__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Title */ "./components/World/Title.js");
/* harmony import */ var _Sky__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Sky */ "./components/World/Sky.js");
/* harmony import */ var _Sun__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Sun */ "./components/World/Sun.js");
/* harmony import */ var _Buildings__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Buildings */ "./components/World/Buildings.js");
var _jsxFileName = "/Users/RescueAMeza_SD/Desktop/Desktop/mezaWebLab/Personal/alexmeza.me Version 2/components/World/World.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

















class World extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.canvas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  resizeToMatchDisplaySize(canvas) {
    var displayWidth = canvas.clientWidth * window.devicePixelRatio,
        displayHeight = canvas.clientHeight * window.devicePixelRatio;

    if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
      canvas.width = displayWidth;
      canvas.height = displayHeight;
      return true;
    }

    return false;
  }

  resize() {
    // this.canvas.current.width = window.innerWidth;
    // this.canvas.current.height = window.innerHeight;
    this.resizeToMatchDisplaySize(this.canvas.current);
    this.engine.resize();
  }

  startEngine() {
    this.engine = new BABYLON.Engine(this.canvas.current, true, {
      stencil: true
    });
    this.scene = new BABYLON.Scene(this.engine);
    this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_3__["default"](this.canvas.current, this.scene);
  }

  renderWorld() {
    this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].lights.enabled) {
      this.light = new _Light__WEBPACK_IMPORTED_MODULE_4__["default"](this.scene);
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].grid.enabled) {
      this.grid = new _Grid__WEBPACK_IMPORTED_MODULE_11__["default"](this.scene);
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].mountains.enabled) {
      this.mountains = new _Mountains__WEBPACK_IMPORTED_MODULE_2__["default"](this.scene);
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].buildings.enabled) {
      this.buildings = new _Buildings__WEBPACK_IMPORTED_MODULE_15__["default"](this.scene);
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].stars.enabled) {
      this.stars = new _Stars__WEBPACK_IMPORTED_MODULE_7__["default"](this.scene);
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].sun.enabled) {
      this.sun = new _Sun__WEBPACK_IMPORTED_MODULE_14__["default"](this.scene);
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].sky.enabled) {
      this.sky = new _Sky__WEBPACK_IMPORTED_MODULE_13__["default"](this.scene);
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].effects.enabled) {
      this.effects = new _Effects__WEBPACK_IMPORTED_MODULE_6__["default"](this);
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].title.enabled) {
      this.title = new _Title__WEBPACK_IMPORTED_MODULE_12__["default"](this.scene);
    }

    _Config__WEBPACK_IMPORTED_MODULE_1__["default"].planes.forEach(plane => {
      if (plane.enabled) {
        plane.mesh = new _Plane__WEBPACK_IMPORTED_MODULE_10__["default"](plane, this.scene, plane.followCamera);
      }
    });
  }

  componentDidMount() {
    this.startEngine();
    this.renderWorld();

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].debug.axis) {
      _Utils__WEBPACK_IMPORTED_MODULE_5__["default"].showWorldAxis(_Config__WEBPACK_IMPORTED_MODULE_1__["default"].debug.axisSize, this.scene);
    }

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].consciousness.enabled) {
      this.consciousness = new _Consciousness__WEBPACK_IMPORTED_MODULE_9__["default"](this);
    }

    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });
    this.engine.runRenderLoop(() => {
      this.scene.render();

      if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].consciousness.enabled) {
        this.consciousness.update();
      }
    });
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(_Backgrounds__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }), __jsx("canvas", {
      "touch-action": "none",
      id: "canvas",
      style: _Config__WEBPACK_IMPORTED_MODULE_1__["default"].canvas.style,
      ref: this.canvas,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (World);

/***/ }),

/***/ "./public/js/vendor/granim.min.js":
/*!****************************************!*\
  !*** ./public/js/vendor/granim.min.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var require;var require;/*! Granim v2.0.0 - https://sarcadass.github.io/granim.js */
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

  for (var n = "function" == typeof require && require, r = 0; r < s.length; r++) o(s[r]);

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
        gradientChange: function (t) {
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
      var e = Object.keys(h),
          i = 0;

      for (i; i < e.length; i++) if (a = h[e[i]].exec(t)) return e[i];

      return !1;
    }

    function o(t) {
      var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
      t = t.replace(e, function (t, e, i, s) {
        return e + e + i + i + s + s;
      });
      var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
      return i ? [parseInt(i[1], 16), parseInt(i[2], 16), parseInt(i[3], 16), 1] : null;
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
          return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10), parseFloat(a[4])];

        case "rgb":
          return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10), 1];

        case "hsla":
          return r(parseInt(a[1], 10) / 360, parseInt(a[2], 10) / 100, parseInt(a[3], 10) / 100, parseFloat(a[4]));

        case "hsl":
          return r(parseInt(a[1], 10) / 360, parseInt(a[2], 10) / 100, parseInt(a[3], 10) / 100, 1);
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

      for (i; i < 4; i++) s.push(e[i] - t[i]);

      return s;
    };
  }, {}],
  12: [function (t, e, i) {
    "use strict";

    e.exports = function (t, e) {
      return "object" == typeof t && t.pos ? t.pos : parseFloat(e ? (1 / (this.gradientLength - 1) * e).toFixed(2) : 0);
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

      for (t = 0; t < this.currentColors.length; t++) for (i.push([]), e = 0; e < 4; e++) i[t].push(this.currentColors[t][e]);

      return i;
    };
  }, {}],
  15: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t,
          e = [];

      for (t = 0; t < this.currentColorsPos.length; t++) e.push(this.currentColorsPos[t]);

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

      for (e = 0; e < o.length; e++) s = null === s ? o[e] : s + o[e], e === o.length - 1 && (t = Math.round(s / (e + 1)));

      return t >= 128 ? "light" : "dark";
    };
  }, {}],
  19: [function (t, e, i) {
    "use strict";

    e.exports = function () {
      var t = this.setDirection(),
          e = document.querySelector(this.elToSetClassOn).classList,
          i = 0;

      for (this.context.clearRect(0, 0, this.x1, this.y1), this.image && this.context.drawImage(this.imageNode, this.imagePosition.x, this.imagePosition.y, this.imagePosition.width, this.imagePosition.height), i; i < this.currentColors.length; i++) t.addColorStop(this.currentColorsPos[i], "rgba(" + this.currentColors[i][0] + ", " + this.currentColors[i][1] + ", " + this.currentColors[i][2] + ", " + this.currentColors[i][3] + ")");

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

        for (i = 0; i < 2; i++) s = i ? "y" : "x", t(s);
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
        for (o = 0; o < 4; o++) e = n.activeColors[s][o] + (3 !== o ? Math.ceil(n.activeColorsDiff[s][o] / 100 * t) : Math.round(n.activeColorsDiff[s][o] / 100 * t * 100) / 100), e <= 255 && e >= 0 && (n.currentColors[s][o] = e);

        i = parseFloat((n.activeColorsPos[s] + n.activeColorsPosDiff[s] / 100 * t).toFixed(4)), i <= 1 && i >= 0 && (n.currentColorsPos[s] = i);
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
      return t.indexOf("%") > -1 ? e / 100 * parseInt(t.split("%")[0], 10) : parseInt(t.split("px")[0], 10);
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
          Array.isArray(this.image.position) && 2 === this.image.position.length && e.indexOf(this.image.position[0]) !== -1 && i.indexOf(this.image.position[1]) !== -1 || this.triggerError("image.position"), this.image.stretchMode && (Array.isArray(this.image.stretchMode) && 2 === this.image.stretchMode.length && o.indexOf(this.image.stretchMode[0]) !== -1 && o.indexOf(this.image.stretchMode[1]) !== -1 || this.triggerError("image.stretchMode"));
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

};;
//# sourceMappingURL=0.js.map