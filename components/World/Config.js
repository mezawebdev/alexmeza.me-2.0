export default {
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
}