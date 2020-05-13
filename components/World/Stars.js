import Config from "./Config";
import Utils from "./Utils";

class Stars {
    constructor(scene) {
        this.scene = scene;
        this.stars = [];
        this.createStars(Config.stars.amount, false);
    }

    createStars(amount, fadeIn) {
        fadeIn = fadeIn || false;

        function getRandomMinMax(min, max) {
            return Math.random() * (max - min) + min;
        }

        for (let i = 0; i < amount; i++) {
            let star = BABYLON.MeshBuilder.CreateBox("sphere", {
                size: getRandomMinMax(Config.stars.minSize, Config.stars.maxSize)
            }, this.scene);

            let starMaterial = new BABYLON.StandardMaterial("myMaterial", this.scene);

            starMaterial.emissiveColor = new BABYLON.Color3.FromHexString(Utils.getRandomPaletteColor());

            if (fadeIn) {
                starMaterial.alpha = 0;
            }

            star.position = new BABYLON.Vector3(
                Math.random(Config.stars.minPos, Config.stars.maxPos), 
                Math.random(Config.stars.minPos, Config.stars.maxPos), 
                Math.random(Config.stars.minPos, Config.stars.maxPos)
            );

            star.material = starMaterial;

            this.stars.push(star);
        }
    }

    animate() {
        var i = 0,
            sceneOriginOffset = -0.1;

        this.stars.forEach(star => {
            star.position.x += -Config.consciousness.walkSpeed;
            star.position.z += -Config.consciousness.walkSpeed;
            star.rotation.x += Config.stars.rotationSpeed;
            star.rotation.z += Config.stars.rotationSpeed;
            star.rotation.y += Config.stars.rotationSpeed;

            if (star.material.alpha < 1) {
                star.material.alpha += Config.stars.fadeInSpeed;
            }

            if (star.position.x <= sceneOriginOffset && star.position.z <= sceneOriginOffset) {
                star.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
                star.dispose();
                this.stars.splice(i, 1);
                this.createStars(1, true);
            }

            i++;
        });
    }
}

export default Stars;