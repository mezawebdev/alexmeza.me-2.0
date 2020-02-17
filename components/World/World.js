import React from "react";
import Config from "./Config";
import Ground from "./Ground";
import Mountains from "./Mountains";
import Camera from "./Camera";
import Light from "./Light";
import Utils from "./Utils";
import Effects from "./Effects";
import Stars from "./Stars";
import Backgrounds from "./Backgrounds";
import Controls from "./Controls";

class World extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    resize() {
        this.canvas.current.width = window.innerWidth;
        this.canvas.current.height = window.innerHeight;
        this.engine.resize();
    }

    startEngine() {
        this.engine = new BABYLON.Engine(this.canvas.current, true);
        this.scene = new BABYLON.Scene(this.engine);
        this.camera = new Camera(this.canvas.current, this.scene);
    }

    renderWorld() {
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
        this.light = new Light(this.scene);

        if (Config.ground.enabled) {
            this.ground = new Ground(this.scene);
        }

        if (Config.mountains.enabled) {
            this.mountains = new Mountains(this.scene);
        }

        if (Config.stars.enabled) {
            this.stars = new Stars(this.scene);
        }

        if (Config.effects.enabled) {
            this.effects = new Effects(this.scene);
        }
    }

    componentDidMount() {
        this.startEngine();

        this.renderWorld();

        if (Config.debug.axis) {
            Utils.showWorldAxis(Config.debug.axisSize, this.scene);
        }

        if (Config.controls.enabled) {
            this.controls = new Controls(this);
        }

        this.resize();

        window.addEventListener("resize", () => { 
            this.resize();
        });

        this.engine.runRenderLoop(() => { 
            this.scene.render();
        });
    }

    render() {
        return (
            <div>
                <Backgrounds />
                <canvas 
                    id="canvas"
                    style={ Config.canvas.style }
                    ref={ this.canvas }>
                </canvas>
            </div>
        );
    }
}

export default World;