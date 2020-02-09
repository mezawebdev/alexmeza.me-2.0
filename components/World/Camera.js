import * as BABYLON from "babylonjs";
import Config from "./Config";
import Utils from "./Utils";

class Camera {
    constructor(canvas, scene) {
        this.scene = scene;
        this.setCamera();
        this.defaultCamera.setTarget(new BABYLON.Vector3(Config.camera.initialTarget.x, Config.camera.initialTarget.y, Config.camera.initialTarget.z));

        if (Config.debug.cameraControls) {
            this.defaultCamera.attachControl(canvas, true);
        }

        this.defaultCamera.minZ = 0;
    }

    setCamera() {
        switch (Config.camera.type) {
            case "free":
                this.defaultCamera = new BABYLON.UniversalCamera(
                    "UniversalCamera", 
                    new BABYLON.Vector3(Config.camera.initialPosition.x, Config.camera.initialPosition.y, Config.camera.initialPosition.z), 
                    this.scene
                );
            break;
            case "arc":
                this.defaultCamera = new BABYLON.ArcRotateCamera(
                    "Camera", 
                    0, 
                    0, 
                    0, 
                    new BABYLON.Vector3(Config.camera.initialPosition.x, Config.camera.initialPosition.y, Config.camera.initialPosition.z), 
                    this.scene
                );
            break;
        }
    }
}

export default Camera;