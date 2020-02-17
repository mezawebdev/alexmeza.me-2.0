import Config from "./Config";

class DynamicGround {
    constructor(scene) {
        this.scene = scene;

        let mapSubX = 100,
            mapSubZ = 100,
            mapData = new Float32Array(mapSubX * mapSubZ * 3);   

        for (var l = 0; l < mapSubZ; l++) {           
            for (var w = 0; w < mapSubX; w++) {                
                mapData[3 * (l * mapSubX + w)] = (w - mapSubX * 0.0) * 1.0;
                mapData[3 * (l * mapSubX + w) + 1] = w / (l +1) * Math.sin(l / 1) * Math.cos(w / 1) * 1.0;
                mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.0) * 1.0;
           }            
        }

        var params = {
            mapData: mapData,
            mapSubX: mapSubX,
            mapSubZ: mapSubZ,
            terrainSub: 200
        };

        this.ground = new BABYLON.DynamicTerrain("terrain", params, this.scene);
        // this.ground.subToleranceX = 16;
        // this.ground.subToleranceZ = 16;
        // this.ground.LODLimits = [4, 3, 2, 1, 1];

        this.setMaterial();
    }

    setMaterial() {
        this.gridMaterial = new BABYLON.GridMaterial("gridMaterial", this.scene);
        this.gridMaterial.mainColor = Config.ground.dynamic.grid.mainColor;
        this.gridMaterial.lineColor = Config.ground.dynamic.grid.lineColor;
        this.gridMaterial.gridRatio = Config.ground.dynamic.grid.gridRatio;
        this.gridMaterial.backFaceCulling = false;
        this.gridMaterial.majorUnitFrequency = Config.ground.dynamic.grid.majorUnitFrequency;
        this.gridMaterial.opacity = Config.ground.dynamic.grid.opacity;
        this.ground.mesh.material = this.gridMaterial;
    }
}

export default DynamicGround;