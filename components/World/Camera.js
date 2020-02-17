// import * as BABYLON from "babylonjs";
import Config from "./Config";
import Utils from "./Utils";

class Camera {
    constructor(canvas, scene) {
        this.scene = scene;
        this.setCamera();
        this.camera.minZ = 0;
        
        if (Config.debug.cameraControls) {
            this.camera.attachControl(canvas, true);
        }
    }

    setCamera() {
        switch (Config.camera.type) {
            case "free":
                this.camera = new BABYLON.UniversalCamera(
                    "UniversalCamera", 
                    new BABYLON.Vector3(Config.camera.initialPosition.x, Config.camera.initialPosition.y, Config.camera.initialPosition.z), 
                    this.scene
                );

                this.camera.setTarget(new BABYLON.Vector3(Config.camera.initialTarget.x, Config.camera.initialTarget.y, Config.camera.initialTarget.z));
            break;
            case "arc":
                this.camera = new BABYLON.ArcRotateCamera(
                    "Camera", 
                    Config.camera.initialTarget.x, 
                    Config.camera.initialTarget.y, 
                    Config.camera.initialTarget.z, 
                    new BABYLON.Vector3(Config.camera.initialPosition.x, Config.camera.initialPosition.y, Config.camera.initialPosition.z), 
                    this.scene
                );

                this.createTarget();
            break;
            case "follow":
                this.camera = new BABYLON.FollowCamera(
                    "Camera", 
                    new BABYLON.Vector3(Config.camera.initialPosition.x, Config.camera.initialPosition.y, Config.camera.initialPosition.z), 
                    this.scene
                );

                this.createTarget();
            break;
        }
    }

    createTarget() {
        this.camera.targetSphere = new BABYLON.MeshBuilder.CreateSphere("target", {
            diameter: 0.01
        });

        this.camera.targetSphere.position = new BABYLON.Vector3(Config.camera.initialTarget.x, Config.camera.initialTarget.y, Config.camera.initialTarget.z);

        this.camera.lockedTarget = this.camera.targetSphere;

        this.camera.position = new BABYLON.Vector3(Config.camera.initialPosition.x, Config.camera.initialPosition.y, Config.camera.initialPosition.z);
    }
}

export default Camera;