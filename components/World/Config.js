export default {
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
    palette: [
        "#2DE2E6",
        "#F706CF",
        "#791E94",
        "#FF4365",
        "#F9C80E",
        "#FF6C11"
    ],
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
            gradients: [
                ['rgba(0, 0, 0, 0)', 'rgb(45, 226, 230)'],
                ['rgba(0, 0, 0, 0)', 'rgb(101, 13, 137)'],
                ['rgba(0, 0, 0, 0)', 'rgb(255, 108, 17)'],
                ['rgba(0, 0, 0, 0)', 'rgb(246, 1, 157)'],
                ['rgba(0, 0, 0, 0)', 'rgb(121, 30, 148)']
            ],
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
            medium: {

            }
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
        showTarget: true,
        walk: true,
        walkSpeed: 0.005,
        view: "buildings",
        targetDiameter: 0.01,
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
        views: [
        	{
	            location: "default",
	            position: { x: -0.11, z: -0.11, y: 0.05 },
	            target: { x: 0.1, z: 0.1, y: 0.075 }
	        },
	        {
	            location: "buildings",
	            position: { x: 9, z: 9, y: 0.05 },
	            target: { x: 10, z: 10, y: 0.075 }
	        }
        ]
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
        meshes: [
            {
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
            }
        ]
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
    planes: [
        {
            enabled: true,
            followCamera: true,
            width: 15,
            height: 15,
            y: -0.01,
            rotation: 0.7854,
            material: {
                color: new BABYLON.Color3.FromHexString("#000000")
            }
        }
    ],
    buildings: {
        enabled: true,
        material: {
            mainColor: new BABYLON.Color3.FromHexString("#000000"),
            lineColor: new BABYLON.Color3.FromHexString("#2de2e6"),
            gridRatio: 0.11,
            majorUnitFrequency: 0.5,
            opacity: 1
        },
        meshes: [
            {
                shape: "rectangle",
                highlight: false,
                width: 0.4,
                height: 1.5,
                depth: 0.5,
                x: 9,
                z: 9.5,
                rotation: Math.PI / 4
            },
            {
                shape: "rectangle",
                highlight: false,
                width: 0.6,
                height: 1,
                depth: 0.5,
                x: 9.5,
                z: 9,
                rotation: Math.PI / 4
            },
            {
                shape: "rectangle",
                highlight: false,
                width: 0.4,
                height: 1.25,
                depth: 0.5,
                x: 9,
                z: 10.5,
                rotation: Math.PI / 4
            },
            {
                shape: "rectangle",
                highlight: false,
                width: 0.4,
                height: 2,
                depth: 0.5,
                x: 10.5,
                z: 9,
                rotation: Math.PI / 4
            },
            {
                shape: "rectangle",
                highlight: false,
                width: 0.4,
                height: 2,
                depth: 0.5,
                x: 10.5,
                z: 9,
                rotation: Math.PI / 4
            },
            {
                shape: "rectangle",
                highlight: false,
                width: 0.6,
                height: 0.7,
                depth: 0.5,
                x: 10,
                z: 11,
                rotation: Math.PI / 4
            }
        ]
    }
}