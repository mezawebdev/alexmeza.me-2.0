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
import Title from "./Title";
import Sky from "./Sky";
import Sun from "./Sun";
import Buildings from "./Buildings";

class World extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    resizeToMatchDisplaySize(canvas) {
        var displayWidth  = canvas.clientWidth  * window.devicePixelRatio,
            displayHeight = canvas.clientHeight * window.devicePixelRatio;

        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width  = displayWidth;
            canvas.height = displayHeight;
            return true;
        }

        return false;
    }

    resize() {
        // this.canvas.current.width = window.innerWidth;
        // this.canvas.current.height = window.innerHeight;
        this.resizeToMatchDisplaySize(this.canvas.current);
        this.engine.resize();
    }

    startEngine() {
        this.engine = new BABYLON.Engine(this.canvas.current, true, {
            stencil: false
        }, null, true);
        this.scene = new BABYLON.Scene(this.engine);
        this.camera = new Camera(this.canvas.current, this.scene);
    }

    renderWorld() {
        this.scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);

        if (Config.lights.enabled) {
            this.light = new Light(this.scene);
        }

        if (Config.grid.enabled) {
            this.grid = new Grid(this.scene);
        }

        if (Config.mountains.enabled) {
            this.mountains = new Mountains(this.scene);
        }

        if (Config.buildings.enabled) {
            this.buildings = new Buildings(this.scene);
        }

        if (Config.stars.enabled) {
            this.stars = new Stars(this.scene);
        }

        if (Config.sun.enabled) {
            this.sun = new Sun(this.scene);
        }

        if (Config.sky.enabled) {
            this.sky = new Sky(this.scene);
        }

        if (Config.effects.enabled) {
            this.effects = new Effects(this);
        }

        if (Config.title.enabled) {
            this.title = new Title(this.scene);
        }

        Config.planes.forEach(plane => {
            if (plane.enabled) {
                plane.mesh = new Plane(plane, this.scene, plane.followCamera);
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
            }
        });
    }

    render() {
        return (
            <div>
                <Backgrounds />
                <canvas 
                    touch-action="none"
                    id="canvas"
                    style={ Config.canvas.style }
                    ref={ this.canvas }>
                </canvas>
            </div>
        );
    }
}

export default World;