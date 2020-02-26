import React from "react";
import Config from "./Config";
import Mountains from "./Mountains";
import Camera from "./Camera";
import Light from "./Light";
import Utils from "./Utils";
import Effects from "./Effects";
import Stars from "./Stars";
import Backgrounds from "./Backgrounds";
import Consciousness from "./Consciousness";
import Plane from "./Plane";
import Grid from "./Grid";

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

        if (Config.lights.enabled) {
            this.light = new Light(this.scene);
        }
        
        // TO BE DELETED
        // if (Config.ground.type === "static") {
        //     this.staticGround = new StaticGround(this.scene);
        // } else if (Config.ground.type === "dynamic") {
        //     this.dynamicGround = new DynamicGround(this.scene);
        // } else {
        //     this.ground = new Grid(this.scene);
        // }
        this.ground = new Grid(this.scene);

        if (Config.mountains.enabled) {
            this.mountains = new Mountains(this.scene);
        }

        if (Config.stars.enabled) {
            this.stars = new Stars(this.scene);
        }

        if (Config.effects.enabled) {
            this.effects = new Effects(this.scene);
        }

        Config.planes.forEach(plane => {
            if (plane.enabled) {
                plane.mesh = new Plane(plane, this.scene);
            }
        });
    }

    componentDidMount() {
        this.startEngine();

        this.renderWorld();

        if (Config.debug.axis) {
            Utils.showWorldAxis(Config.debug.axisSize, this.scene);
        }

        if (Config.consciousness.enabled) {
            this.consciousness = new Consciousness(this);
        }

        this.resize();

        window.addEventListener("resize", () => { 
            this.resize();
        });

        this.engine.runRenderLoop(() => { 
            this.scene.render();

            if (Config.consciousness.enabled) {
                this.consciousness.update();
                this.consciousness.destroy();
            }
        });

        // if (Config.consciousness.enabled) {
        //     setInterval(() => {
        //         this.consciousness.destroy();
        //     }, 1000);
        // }
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