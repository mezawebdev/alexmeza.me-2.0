webpackHotUpdate(1,{

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
    numberOfPoints: 500,
    radius: 0.25,
    interval: 150,
    color: "rgb(250, 250, 250)"
  },
  camera: {
    type: "free",
    maxZ: 10,
    initialPosition: {
      x: -1.5,
      y: 0.5,
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
      intensity: 5,
      mainTextureSamples: 4
    }
  },
  ground: {
    heightMap: "images/height_map4.png",
    width: 5,
    height: 15,
    textureHeight: 0.5,
    subdivisions: 15,
    rotation: 0.785,
    grid: {
      mainColor: new BABYLON.Color3.FromHexString("#41093c"),
      lineColor: new BABYLON.Color3.FromHexString("#e55ec9"),
      gridRatio: 0.075,
      majorUnitFrequency: 1,
      opacity: 0.9
    }
  }
});

/***/ })

})
//# sourceMappingURL=1.6c4e65526bcbd75cd9ba.hot-update.js.map