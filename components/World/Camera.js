// import * as BABYLON from "babylonjs";
import Config from "./Config";
import Utils from "./Utils";

class Camera {
    constructor(canvas, scene) {
        this.scene = scene;
        this.setCamera();
        this.animate();
        this.camera.minZ = 0;

        if (Config.debug.cameraControls) {
            this.camera.attachControl(canvas, true);
        }
    }

    setCamera() {
        let view = Config.camera.views.find(view => { return view.location === Config.camera.view });

        switch (Config.camera.type) {
            case "free":
                this.camera = new BABYLON.UniversalCamera(
                    "UniversalCamera", 
                    new BABYLON.Vector3(view.position.x, view.position.y, view.position.z), 
                    this.scene
                );
                this.createTarget();
                this.camera.setTarget(new BABYLON.Vector3(view.target.x, view.target.y, view.target.z));
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
        let view = Config.camera.views.find(view => { return view.location === Config.camera.view });

        this.targetSphere = new BABYLON.MeshBuilder.CreateSphere("target", {
            diameter: Config.camera.targetDiameter
        }, this.scene);

        this.targetSphere.material = new BABYLON.StandardMaterial("transparent-material", this.scene);

        this.targetSphere.material.emissiveColor = new BABYLON.Color3(1, 0, 0);

        this.targetSphere.material.alpha = Config.camera.showTarget ? 1 : 0;

        this.targetSphere.position = new BABYLON.Vector3(view.target.x, view.target.y, view.target.z);

        if (Config.camera.type === "arc" || Config.camera.type === "free") {
            this.camera.lockedTarget = this.targetSphere;
        }

        this.camera.position = new BABYLON.Vector3(view.position.x, view.position.y, view.position.z);
    }
    
    animate() {
        // this.scene.onPointerObservable.add(pointerInfo => {
        //     switch (pointerInfo.type) {
        //         case BABYLON.PointerEventTypes.POINTERDOWN:
        //             console.log("POINTER DOWN");
        //             // this.targetSphere.position.y += -0.01;
        //             // this.camera.position.y += -0.1;
        //             // console.log(this.camera.position.y);
        //             break;
        //         case BABYLON.PointerEventTypes.POINTERUP:
        //             console.log("POINTER UP");
        //             // this.targetSphere.position.y += 0.01;
        //             // this.camera.position.y += 0.1;
        //             // console.log(this.camera.position.y);
        //             break;
        //         case BABYLON.PointerEventTypes.POINTERMOVE:
        //             // this.camera.position.y += 0.1;
        //             this.targetSphere.position.y += 0.01;
        //             console.log(pointerInfo);
        //             console.log("POINTER MOVE");
        //             // this.camera.position.y += -0.001;
        //             break;
        //         case BABYLON.PointerEventTypes.POINTERWHEEL:
        //             console.log("POINTER WHEEL");
        //             // this.targetSphere.position.y += -0.01;
        //             break;
        //         case BABYLON.PointerEventTypes.POINTERPICK:
        //             console.log("POINTER PICK");
        //             break;
        //         case BABYLON.PointerEventTypes.POINTERTAP:
        //             console.log("POINTER TAP");
        //             break;
        //         case BABYLON.PointerEventTypes.POINTERDOUBLETAP:
        //             console.log("POINTER DOUBLE-TAP");
        //             break;
        //     }
        // });
    }
}

export default Camera;