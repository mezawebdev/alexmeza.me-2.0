import Config from "./Config";

class Sun {
    constructor(scene) {
        this.scene = scene;
        this.init();
    }

    init() {
        this.sphere = new BABYLON.MeshBuilder.CreateSphere("sun", {
            diameter: Config.sun.diameter
        }, this.scene);

        this.sphere.material = new BABYLON.StandardMaterial("sun-material", this.scene);
        this.sphere.material.emissiveColor = new BABYLON.Color3.FromHexString(Config.sun.color);

        this.sphere.position.x = Config.sun.x;
        this.sphere.position.z = Config.sun.z;
        this.sphere.position.y = Config.sun.y;
    }
}

export default Sun;