import Config from "./Config";

class Sun {
    constructor(scene) {
        this.scene = scene;
        this.init();
    }

    init() {
        this.sphere = new BABYLON.MeshBuilder.CreateSphere("sun", {
            diameter: 8
        }, this.scene);

        this.sphere.material = new BABYLON.StandardMaterial("sun-material", this.scene);
        this.sphere.material.emissiveColor = new BABYLON.Color3.FromHexString(Config.palette[5]);

        this.sphere.position.x = 17;
        this.sphere.position.z = 17;
        this.sphere.position.y = -0.5;
    }
}

export default Sun;