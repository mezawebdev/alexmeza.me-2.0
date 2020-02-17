import Config from "./Config";
import Utils from "./Utils";

class Stars {
    constructor(scene) {
        this.scene = scene;
        this.stars = [];
        this.createStars(Config.stars.amount);
    }

    createStars(amount) {
        for (let i = 0; i < amount; i++) {
            let star = BABYLON.MeshBuilder.CreateSphere("sphere", {
                diameter: Config.stars.diameter
            }, this.scene);

            let starMaterial = new BABYLON.StandardMaterial("myMaterial", this.scene);

            starMaterial.emissiveColor = new BABYLON.Color3.FromHexString(Utils.getRandomPaletteColor());

            star.position = new BABYLON.Vector3(Math.random(Config.stars.minPos, Config.stars.maxPos), Math.random(Config.stars.minPos, Config.stars.maxPos), Math.random(Config.stars.minPos, Config.stars.maxPos));

            star.material = starMaterial;

            this.stars.push(star);
        }
    }
}

export default Stars;