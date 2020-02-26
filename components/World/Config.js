export default {
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
        walkSpeed: 0.003,
        garbage: {
            horizontalLines: {
                disposalInterval: 2500
            }
        },
        creation: {
            horizontalLines: {
                creationInterval: 2500,
                amount: 5
            }
        }
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
    stars: {
        enabled: false,
        amount: 500,
        diameter: 0.005,
        minPos: -10,
        maxPos: 50
    },
    camera: {
        type: "free",
        maxZ: 10,
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
            intensity: 1
        },
        fog: {
            enabled: false,
            density: 0.01,
            color: new BABYLON.Color3.FromHexString("#000000")
        }
    },
    ground: {
        type: "none",
        static: {
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
                opacity: 0.99
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
    grid: {
        verticalLinesAmount: 100,
        horizontalLinesAmount: 215,
        color: new BABYLON.Color3.FromHexString("#F706CF"),
        frequency: 0.05,
        diameter: 0.001,
        height: 10
    },
    mountains: {
        enabled: true,
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
            },
            // {
            //     heightMap: "images/height_map8.png",
            //     width: 2,
            //     height: 5,
            //     textureHeight: 0.5,
            //     subdivisions: 20,
            //     rotation: 0.785,
            //     x: 3,
            //     z: 3,
            //     y: -0.1,
            //     grid: {
            //         mainColor: new BABYLON.Color3.FromHexString("#000000"),
            //         lineColor: new BABYLON.Color3.FromHexString("#2de2e6"),
            //         gridRatio: 0.2,
            //         majorUnitFrequency: 1,
            //         opacity: 1
            //     }
            // }
        ]
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
    ]
}