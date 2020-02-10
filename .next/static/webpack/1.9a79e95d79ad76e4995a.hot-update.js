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
      background: "rgba(0, 0, 0, 0)",
      zIndex: "5",
      position: "fixed"
    }
  },
  backgrounds: {
    style: {
      zIndex: "3"
    },
    centerGradientBackground: {
      style: {
        zIndex: "3",
        background: "radial-gradient(circle, rgba(50,37,107,1) 0%, rgba(14,8,32,1) 100%)"
      }
    },
    bottomColorBackground: {
      gradients: [['rgba(0, 0, 0, 0)', 'rgb(45, 226, 230)'], ['rgba(0, 0, 0, 0)', 'rgb(101, 13, 137)'], ['rgba(0, 0, 0, 0)', 'rgb(255, 108, 17)'], ['rgba(0, 0, 0, 0)', 'rgb(246, 1, 157)'], ['rgba(0, 0, 0, 0)', 'rgb(121, 30, 148)']],
      style: {
        zIndex: "4",
        opacity: "0.5"
      }
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
    },
    fog: {
      intensity: 0.01
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
      opacity: 0.99
    }
  }
});

/***/ })

})
//# sourceMappingURL=1.9a79e95d79ad76e4995a.hot-update.js.map