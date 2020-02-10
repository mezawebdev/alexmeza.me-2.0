import Config from "./Config";
import * as BABYLON from 'babylonjs';

class Effects {
    constructor(scene) {
        this.scene = scene;
        this.createGlow();

        if (Config.effects.fog.enabled) {
            this.createFog();
        }
    }

    createGlow() {
        this.glow = new BABYLON.GlowLayer("glow", this.scene);

        this.glow.intensity = Config.effects.glow.intensity;
    }

    createFog() {
        this.scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
        this.scene.fogDensity = Config.effects.fog.density;
        this.scene.fogColor = Config.effects.fog.color;
    }
}

export default Effects;