class Light {
    constructor(scene) {
        this.lights = [
            new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 1), scene)
        ]

        // this.lights[0].intensity = 30;
    }
}

export default Light;