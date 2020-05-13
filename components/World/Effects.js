import Config from "./Config";
// import * as BABYLON from 'babylonjs';

class Effects {
    constructor(world) {
        this.world = world;
        this.createGlow();
        // this.extraEffects();

        if (Config.effects.fog.enabled) {
            this.createFog();
        }

        if (Config.effects.lens.enabled) {
            this.enableLens();
        }
    }

    createGlow() {
        this.glow = new BABYLON.GlowLayer("glow", this.world.scene);

        this.glow.intensity = Config.effects.glow.intensity;
    }

    createFog() {
        this.world.scene.fogMode = BABYLON.Scene.FOGMODE_EXP;
        this.world.scene.fogDensity = Config.effects.fog.density;
        this.world.scene.fogColor = Config.effects.fog.color;
    }

    enableLens() {
        // this.lensEffect = new BABYLON.LensRenderingPipeline('lens', {
        //     edge_blur: 1.0,
        //     chromatic_aberration: 1.0,
        //     distortion: 1.0,
        //     dof_focus_distance: 50,
        //     dof_aperture: 6.0,			// set this very high for tilt-shift effect
        //     grain_amount: 1.0,
        //     dof_pentagon: true,
        //     dof_gain: 1.0,
        //     dof_threshold: 1.0,
        //     dof_darken: 0.25
        // }, this.world.scene, 1.0, this.world.camera);

        // console.log(BABYLON.FxaaPostProcess);

        // this.world.camera.getScene = () => { return this.world.scene; };

        // var postProcess = new BABYLON.BlurPostProcess("Horizontal blur", new BABYLON.Vector2(2, 5), 32, 0.25);
        // var postProcess = new BABYLON.FxaaPostProcess("fxaa", 1.0, null, null, this.world.engine);
        // this.world.camera.attachPostProcess(postProcess);


        // this.postProcess = new BABYLON.FxaaPostProcess("fxaa", 1.0, null, null, this.world.engine);
    }

    extraEffects() {
        this.glowBar = new BABYLON.MeshBuilder.CreateBox("glowBar", {
            width: 7,
            height: 0.5,
            depth: 0.1
        }, this.world.scene);

        this.glowBar.material = new BABYLON.StandardMaterial("glow-material", this.scene);

        this.glowBar.material.emissiveColor = new BABYLON.Color3.FromHexString(Config.palette[0]);

        this.glowBar.rotation.y = Math.PI / 4;
        this.glowBar.position.x = 8.25;
        this.glowBar.position.z = 8.25;
        this.glowBar.position.y = -0.275;

        // var hl = new BABYLON.HighlightLayer("hl1", this.world.scene, true);
        // hl.addMesh(this.glowBar, new BABYLON.Color3.FromHexString(Config.palette[0]));
    }
}

export default Effects;