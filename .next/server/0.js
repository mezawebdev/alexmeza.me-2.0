exports.ids = [0];
exports.modules = {

/***/ "./assets/scss/stars.scss":
/*!********************************!*\
  !*** ./assets/scss/stars.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/World/Camera.js":
/*!************************************!*\
  !*** ./components/World/Camera.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");




class Camera {
  constructor(canvas, scene) {
    this.scene = scene;
    this.setCamera();
    this.defaultCamera.setTarget(new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](_Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.initialTarget.x, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.initialTarget.y, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.initialTarget.z));

    if (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].debug.cameraControls) {
      this.defaultCamera.attachControl(canvas, true);
    }

    this.defaultCamera.minZ = 0;
  }

  setCamera() {
    switch (_Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.type) {
      case "free":
        this.defaultCamera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["UniversalCamera"]("UniversalCamera", new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](_Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.initialPosition.z), this.scene);
        break;

      case "arc":
        this.defaultCamera = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["ArcRotateCamera"]("Camera", 0, 0, 0, new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Vector3"](_Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.initialPosition.x, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.initialPosition.y, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].camera.initialPosition.z), this.scene);
        break;
    }
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
  debug: {
    axis: true,
    axisSize: 1.5,
    cameraControls: true
  },
  canvas: {
    style: {
      background: "radial-gradient(circle, rgba(50,37,107,1) 0%, rgba(14,8,32,1) 100%)"
    }
  },
  stars: {
    show: true,
    numberOfPoints: 150,
    radius: 0.25,
    interval: 50,
    color: "rgb(250, 250, 250)"
  },
  camera: {
    type: "free",
    maxZ: 10,
    initialPosition: {
      x: -1.5,
      y: 0.2,
      z: -1.5
    },
    initialTarget: {
      x: 0.5,
      y: 0.5,
      z: 0.5
    },
    walk: true,
    walkSpeed: 0.01
  },
  effects: {
    glow: {
      intensity: 0.25
    }
  },
  ground: {
    heightMap: "images/height_map5.png",
    width: 4,
    height: 15,
    textureHeight: 0.75,
    subdivisions: 25,
    rotation: 0.785,
    grid: {
      mainColor: new BABYLON.Color3.FromHexString("#41093c"),
      lineColor: new BABYLON.Color3.FromHexString("#e55ec9"),
      gridRatio: 0.1,
      majorUnitFrequency: 1,
      opacity: 1
    }
  }
});

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


class Effects {
  constructor(scene) {
    this.scene = scene;
    this.createGlow();
  }

  createGlow() {
    this.glow = new BABYLON.GlowLayer("glow", this.scene);
    this.glow.intensity = _Config__WEBPACK_IMPORTED_MODULE_0__["default"].effects.glow.intensity;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Effects);

/***/ }),

/***/ "./components/World/Ground.js":
/*!************************************!*\
  !*** ./components/World/Ground.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! babylonjs-materials */ "babylonjs-materials");
/* harmony import */ var babylonjs_materials__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__);




class Ground {
  constructor(scene) {
    this.scene = scene;
    this.createGround(); // this.setTerrain();

    this.setMaterial();
  }

  createGround() {
    this.defaultGround = new babylonjs__WEBPACK_IMPORTED_MODULE_0__["Mesh"].CreateGroundFromHeightMap("ground", _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.heightMap, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.width, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.height, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.subdivisions, 0, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.textureHeight, this.scene, true);
    this.defaultGround.rotate(babylonjs__WEBPACK_IMPORTED_MODULE_0__["Axis"].Y, _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.rotation, babylonjs__WEBPACK_IMPORTED_MODULE_0__["Space"].WORLD); // this.defaultGround.setPosition(new BABYLON.Vector3(2, 2, 0));
  }

  setTerrain() {// let script = document.createElement("script");
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

  setMaterial() {
    this.gridMaterial = new babylonjs_materials__WEBPACK_IMPORTED_MODULE_2__["GridMaterial"]("gridMaterial", this.scene);
    this.gridMaterial.mainColor = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.grid.mainColor;
    this.gridMaterial.lineColor = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.grid.lineColor;
    this.gridMaterial.gridRatio = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.grid.gridRatio;
    this.gridMaterial.backFaceCulling = false;
    this.gridMaterial.majorUnitFrequency = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.grid.majorUnitFrequency;
    this.gridMaterial.opacity = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.grid.opacity;
    this.gridMaterial.emissiveColor = _Config__WEBPACK_IMPORTED_MODULE_1__["default"].ground.grid.lineColor;
    this.defaultGround.material = this.gridMaterial;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Ground);

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
    this.lights = [new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 1), scene)]; // this.lights[0].intensity = 30;
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Light);

/***/ }),

/***/ "./components/World/Stars.js":
/*!***********************************!*\
  !*** ./components/World/Stars.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _assets_scss_stars_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/scss/stars.scss */ "./assets/scss/stars.scss");
/* harmony import */ var _assets_scss_stars_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_scss_stars_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/RescueAMeza_SD/Desktop/mezaWebLab/Personal/alexmeza.me/components/World/Stars.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






class Stars extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
    console.log(jquery__WEBPACK_IMPORTED_MODULE_0___default()("#stars"));

    __webpack_require__(/*! ../../public/js/vendor/flexBackground.js */ "./public/js/vendor/flexBackground.js");

    jquery__WEBPACK_IMPORTED_MODULE_0___default()("#stars").flexBackground({
      numberOfPoints: _Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.numberOfPoints,
      radius: _Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.radius,
      interval: _Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.interval,
      color: _Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.color
    });
  }

  render() {
    return __jsx("canvas", {
      id: "stars",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Stars);

/***/ }),

/***/ "./components/World/Utils.js":
/*!***********************************!*\
  !*** ./components/World/Utils.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babylonjs */ "babylonjs");
/* harmony import */ var babylonjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babylonjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./components/World/Config.js");
/* harmony import */ var _Ground__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Ground */ "./components/World/Ground.js");
/* harmony import */ var _Camera__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Camera */ "./components/World/Camera.js");
/* harmony import */ var _Light__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Light */ "./components/World/Light.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Utils */ "./components/World/Utils.js");
/* harmony import */ var _Effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Effects */ "./components/World/Effects.js");
/* harmony import */ var _Stars__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Stars */ "./components/World/Stars.js");
var _jsxFileName = "/Users/RescueAMeza_SD/Desktop/mezaWebLab/Personal/alexmeza.me/components/World/World.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










class World extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.canvas = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  resize() {
    this.canvas.current.width = window.innerWidth;
    this.canvas.current.height = window.innerHeight;
    this.engine.resize();
  }

  startEngine() {
    this.engine = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Engine"](this.canvas.current, true);
    this.scene = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Scene"](this.engine);
    this.camera = new _Camera__WEBPACK_IMPORTED_MODULE_4__["default"](this.canvas.current, this.scene);
  }

  renderWorld() {
    this.scene.clearColor = new babylonjs__WEBPACK_IMPORTED_MODULE_1__["Color4"](0, 0, 0, 0);
    this.light = new _Light__WEBPACK_IMPORTED_MODULE_5__["default"](this.scene);
    this.ground = new _Ground__WEBPACK_IMPORTED_MODULE_3__["default"](this.scene);
    this.effects = new _Effects__WEBPACK_IMPORTED_MODULE_7__["default"](this.scene);
  }

  componentDidMount() {
    this.startEngine();
    this.renderWorld();

    if (_Config__WEBPACK_IMPORTED_MODULE_2__["default"].debug.axis) {
      _Utils__WEBPACK_IMPORTED_MODULE_6__["default"].showWorldAxis(_Config__WEBPACK_IMPORTED_MODULE_2__["default"].debug.axisSize, this.scene);
    }

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    if (_Config__WEBPACK_IMPORTED_MODULE_2__["default"].stars.show) {
      this.stars = new _Stars__WEBPACK_IMPORTED_MODULE_8__["default"]();
    }

    this.resize();
    window.addEventListener("resize", () => {
      this.resize();
    });
  }

  render() {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, __jsx(_Stars__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx("canvas", {
      id: "canvas",
      style: _Config__WEBPACK_IMPORTED_MODULE_2__["default"].canvas.style,
      ref: this.canvas,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (World);

/***/ }),

/***/ "./public/js/vendor/flexBackground.js":
/*!********************************************!*\
  !*** ./public/js/vendor/flexBackground.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function ($) {
  $.fn.flexBackground = function (options) {
    'use strict';
    /**------------------ SETTING PARAMETERS ------------------**/

    var height;
    var width;
    var points = 800;
    var numberOfPoints = 200;
    var radius = 1;
    var interval = 50;
    var color = {
      r: 256,
      g: 256,
      b: 256
    };
    var config = {};

    if (options) {
      $.extend(config, options);
    }
    /**------------------ BEGIN FUNCTION BODY ------------------**/


    var selector = $(this);
    var selectorCan = $("#stars");
    if (config.numberOfPoints) points = parseInt(config.numberOfPoints, 10);
    if (config.radius) radius = parseInt(config.radius, 10);
    if (config.interval) interval = parseInt(config.interval, 10);

    if (config.color) {
      var regExp = new RegExp("\\d+", "g");
      color.r = regExp.exec(config.color);
      color.g = regExp.exec(config.color);
      color.b = regExp.exec(config.color);
    }
    /**------------------------------------------------  SETTING FUNCTIONS ------------------------------------------------- **/


    width = selector.width();
    height = selector.height();
    selectorCan.attr('height', height);
    selectorCan.attr('width', width);
    var canvas = selectorCan[0];
    var ctx = canvas.getContext("2d");
    var snow = new Array();

    function refresh() {
      width = selector.width();
      height = selector.height();
      selectorCan.attr('height', height);
      selectorCan.attr('width', width);

      for (var i = 0; i < points; i++) {
        var tempVar;
        snow[i] = {
          posX: 100,
          posY: 100,
          initialX: 100,
          initialY: 100,
          radius: 3,
          opacity: .5,
          initialOpacity: .5
        };
        snow[i].posX = width * Math.random();
        snow[i].posY = height * Math.random();
        snow[i].initialX = snow[i].posX;
        snow[i].initialY = snow[i].posY;
        snow[i].radius = Math.random() * radius;
        snow[i].opacity = Math.random();
        snow[i].initialOpacity = snow[i].opacity;
      }
    }

    function createSnow(snowID) {
      ctx.beginPath();
      ctx.arc(snow[snowID].posX, snow[snowID].posY, snow[snowID].radius, 0, 2 * Math.PI, false);
      ctx.fillStyle = "rgba(" + color.r + "," + color.g + "," + color.b + "," + snow[snowID].opacity + ")";
      ctx.fill();
      ctx.closePath();
      snow[snowID].posX = snow[snowID].posX - (width / 2 - snow[snowID].posX) / 200;
      snow[snowID].posY = snow[snowID].posY - (height / 2 - snow[snowID].posY) / 200;
      snow[snowID].radius += .005;

      if (snow[snowID].posX < 0 || snow[snowID].posY < 0 || snow[snowID].posX > width || snow[snowID].posY > height) {
        snow[snowID].posX = snow[snowID].initialX;
        snow[snowID].posY = snow[snowID].initialY;
        snow[snowID].radius = 0;
      }

      if (snow[snowID].radius > 2) {
        if (snow[snowID].opacity >= 0) {
          snow[snowID].opacity -= .05;
        } else {
          snow[snowID].posX = snow[snowID].initialX;
          snow[snowID].posY = snow[snowID].initialY;
          snow[snowID].radius = 0;
          snow[snowID].opacity = snow[snowID].initialOpacity;
        }
      }
    }

    function setBackground() {
      ctx.clearRect(0, 0, width, height);

      for (var i = 0; i < points; i++) {
        createSnow(i);
      }
    }

    refresh();
    setInterval(setBackground, interval);
    $(window).resize(function () {
      refresh();
    });
  };
})(jQuery);

/***/ })

};;
//# sourceMappingURL=0.js.map