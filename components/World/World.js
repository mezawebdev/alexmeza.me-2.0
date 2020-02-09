import React from "react";
import * as BABYLON from 'babylonjs';
import Config from "./Config";
import Ground from "./Ground";
import Camera from "./Camera";
import Light from "./Light";
import Utils from "./Utils";
import Effects from "./Effects";
import Stars from "./Stars";

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
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
        this.light = new Light(this.scene);
        this.ground = new Ground(this.scene);
        this.effects = new Effects(this.scene);
    }

    componentDidMount() {
        this.startEngine();

        this.renderWorld();

        if (Config.debug.axis) {
            Utils.showWorldAxis(Config.debug.axisSize, this.scene);
        }

        this.engine.runRenderLoop(() => { 
            this.scene.render();
        });

        if (Config.stars.show) {
            this.stars = new Stars();
        }

        this.resize();

        window.addEventListener("resize", () => { 
            this.resize();
        });
    }

    render() {
        return (
            <div>
                <Stars />
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