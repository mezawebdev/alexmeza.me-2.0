import Config from "./Config";

class Ground {
    constructor(scene) {
        this.scene = scene;
        this.createGround();
        // this.createDynamicTerrain();
        this.setMaterial();
    }

    createGround() {
        // this.defaultGround = new BABYLON.Mesh.CreateGroundFromHeightMap(
        //     "ground", 
        //     Config.ground.heightMap, 
        //     Config.ground.width, 
        //     Config.ground.height, 
        //     Config.ground.subdivisions, 
        //     0, 
        //     Config.ground.textureHeight, 
        //     this.scene, 
        //     true
        // );

        this.defaultGround = new BABYLON.MeshBuilder.CreateGround("ground", {
            width: Config.ground.width,
            height: Config.ground.height
        });
        this.defaultGround.rotate(BABYLON.Axis.Y, Config.ground.rotation, BABYLON.Space.WORLD);
        this.defaultGround.position.x = Config.ground.x;
        this.defaultGround.position.z = Config.ground.z;
    }

    createDynamicTerrain() {
        let mapSubX = 500,
            mapSubZ = 500,
            mapData = new Float32Array(mapSubX * mapSubZ * 3);   

        // for (var l = 0; l < mapSubZ; l++) {           
        //     for (var w = 0; w < mapSubX; w++) {                
        //         mapData[3 *(l * mapSubX + w)] = (w - mapSubX * 0.5) * 2.0;
        //         mapData[3 * (l * mapSubX + w) + 1] = w / (l +1) * Math.sin(l / 2) * Math.cos(w / 2) * 2.0;
        //         mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.5) * 2.0;
        //    }            
        // }

        var params = {
            mapData: mapData,
            mapSubX: mapSubX,
            mapSubZ: mapSubZ,
            terrainSub: 200
        };

        this.terrain = new BABYLON.DynamicTerrain("terrain", params, this.scene);
        this.terrain.subToleranceX = 16;
        this.terrain.subToleranceZ = 16;
        this.terrain.LODLimits = [4, 3, 2, 1, 1];
        this.terrainCreated = true;
    }

    setMaterial() {
        this.gridMaterial = new BABYLON.GridMaterial("gridMaterial", this.scene);
        this.gridMaterial.mainColor = Config.ground.grid.mainColor;
        this.gridMaterial.lineColor = Config.ground.grid.lineColor;
        this.gridMaterial.gridRatio = Config.ground.grid.gridRatio;
        this.gridMaterial.backFaceCulling = false;
        this.gridMaterial.majorUnitFrequency = Config.ground.grid.majorUnitFrequency;
        this.gridMaterial.opacity = Config.ground.grid.opacity;
        this.defaultGround.material = this.gridMaterial;
        // this.terrain.mesh.material = this.gridMaterial;

    }
}

export default Ground;