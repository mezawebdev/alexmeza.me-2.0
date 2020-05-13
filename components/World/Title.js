import Config from "./Config";
import Utils from "./Utils";

class Title {
    constructor(scene) {
        this.scene = scene;
        this.scale = Utils.getProp("title", "scale");
        this.x = Utils.getProp("title", "x");
        this.y = Utils.getProp("title", "y");
        this.z = Utils.getProp("title", "z");
        this.rotationY = 0.75;
        this.rotationX = -Math.PI / 2;
        this.createTitle();
    }

    createTitle() {
        let Writer = BABYLON.MeshWriter(this.scene, { scale: this.scale });

        this.text = new Writer(
            Config.title.text,
            {
                anchor: "center",
                "letter-height": 0.5,
                "letter-thickness": 0.1,
                colors: {
                    emissive: Config.palette[0]
                },
                position: {
                    z: this.z,
                    x: this.x,
                    y: this.y
                }
            }
        );

        this.text.getMesh().rotation.y = this.rotationY;
        this.text.getMesh().rotation.x = this.rotationX;
    }
}

export default Title;