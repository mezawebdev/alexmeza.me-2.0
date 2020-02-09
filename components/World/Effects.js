import Config from "./Config";

class Effects {
    constructor(scene) {
        this.scene = scene;
        this.createGlow();
    }

    createGlow() {
        this.glow = new BABYLON.GlowLayer("glow", this.scene);

        this.glow.intensity = Config.effects.glow.intensity;
    }
}

export default Effects;