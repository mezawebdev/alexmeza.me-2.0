import * as BABYLON from "babylonjs";
import Config from "./Config";
import * as Materials from "babylonjs-materials";

class Ground {
    constructor(scene) {
        this.scene = scene;

        this.createGround();

        // this.setTerrain();

        this.setMaterial();
    }

    createGround() {
        this.defaultGround = new BABYLON.Mesh.CreateGroundFromHeightMap(
            "ground", 
            Config.ground.heightMap, 
            Config.ground.width, 
            Config.ground.height, 
            Config.ground.subdivisions, 
            0, 
            Config.ground.textureHeight, 
            this.scene, 
            true
        );

        this.defaultGround.rotate(BABYLON.Axis.Y, Config.ground.rotation, BABYLON.Space.WORLD);
        
        this.defaultGround.position.x = Config.ground.x;
        this.defaultGround.position.z = Config.ground.z;
    }

    setTerrain() {
        // let script = document.createElement("script");
        // script.src = "https://cdn.rawgit.com/BabylonJS/Extensions/master/DynamicTerrain/dist/babylon.dynamicTerrain.min.js";
        // document.body.appendChild(script);
        // script.onload = () => {
        //     var mapSubX = 500;
        //     var mapSubZ = 300;
        //     var terrainSub = 100;
        //     var mapData = new Float32Array(mapSubX * mapSubZ * 3);  

        //     for (var l = 0; l < mapSubZ; l++) {           
        //         for (var w = 0; w < mapSubX; w++) {                
        //             mapData[3 *(l * mapSubX + w)] = (w - mapSubX * 0.5) * 2.0;
        //             mapData[3 * (l * mapSubX + w) + 1] = w / (l +1) * Math.sin((l + 1) / 2) * Math.cos(w / 2) * 2.0;
        //             mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.5) * 2.0;
        //        }            
        //     }

        //     var params = {
        //         mapData: mapData,
        //         mapSubX: mapSubX,
        //         mapSubZ: mapSubZ,
        //         terrainSub: terrainSub
        //     };

        //     terrain = new BABYLON.DynamicTerrain("terrain", params, this.scene);
        //     terrain.mesh.material = terrainMaterial;
        //     terrain.subToleranceX = 8;
        //     terrain.subToleranceZ = 8;
        //     terrain.LODLimits = [4, 3, 2, 1, 1];
        //     terrainCreated = true;
        // }

        // var mapSubX = 500;
        //     var mapSubZ = 300;
        //     var terrainSub = 100;
        //     var mapData = new Float32Array(mapSubX * mapSubZ * 3);  

        //     for (var l = 0; l < mapSubZ; l++) {           
        //         for (var w = 0; w < mapSubX; w++) {                
        //             mapData[3 *(l * mapSubX + w)] = (w - mapSubX * 0.5) * 2.0;
        //             mapData[3 * (l * mapSubX + w) + 1] = w / (l +1) * Math.sin((l + 1) / 2) * Math.cos(w / 2) * 2.0;
        //             mapData[3 * (l * mapSubX + w) + 2] = (l - mapSubZ * 0.5) * 2.0;
        //        }            
        //     }

        //     var params = {
        //         mapData: mapData,
        //         mapSubX: mapSubX,
        //         mapSubZ: mapSubZ,
        //         terrainSub: terrainSub
        //     };

        // terrain = new BABYLON.DynamicTerrain("terrain", params, this.scene);
        // terrain.mesh.material = terrainMaterial;
        // terrain.subToleranceX = 8;
        // terrain.subToleranceZ = 8;
        // terrain.LODLimits = [4, 3, 2, 1, 1];
        // terrainCreated = true;
    }

    setMaterial() {
        this.gridMaterial = new Materials.GridMaterial("gridMaterial", this.scene);
        this.gridMaterial.mainColor = Config.ground.grid.mainColor;
        this.gridMaterial.lineColor = Config.ground.grid.lineColor;
        this.gridMaterial.gridRatio = Config.ground.grid.gridRatio;
        this.gridMaterial.backFaceCulling = false;
        this.gridMaterial.majorUnitFrequency = Config.ground.grid.majorUnitFrequency;
        this.gridMaterial.opacity = Config.ground.grid.opacity;
        this.gridMaterial.emissiveColor = Config.ground.grid.lineColor;
        this.defaultGround.material = this.gridMaterial;
    }
}

export default Ground;