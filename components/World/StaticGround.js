import Config from "./Config";

class StaticGround {
    constructor(scene) {
        this.scene = scene;
        this.loops = 1;
        this.createGround();
        this.setMaterial();
    }

    createGround() {
        this.ground = new BABYLON.MeshBuilder.CreateGround("ground", {
            width: Config.ground.static.width,
            height: Config.ground.static.height
        });
        this.ground.rotate(BABYLON.Axis.Y, Config.ground.static.rotation, BABYLON.Space.WORLD);
        this.ground.position.x = Config.ground.static.x;
        this.ground.position.z = Config.ground.static.z;
    }

    setMaterial() {
        this.gridMaterial = new BABYLON.GridMaterial("gridMaterial", this.scene);
        this.gridMaterial.mainColor = Config.ground.static.grid.mainColor;
        this.gridMaterial.lineColor = Config.ground.static.grid.lineColor;
        this.gridMaterial.gridRatio = Config.ground.static.grid.gridRatio;
        this.gridMaterial.backFaceCulling = false;
        this.gridMaterial.majorUnitFrequency = Config.ground.static.grid.majorUnitFrequency;
        this.gridMaterial.opacity = Config.ground.static.grid.opacity;
        this.gridMaterial.emissiveColor = Config.ground.static.grid.lineColor;
        this.ground.material = this.gridMaterial;
    }
}

export default StaticGround;