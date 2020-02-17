import Config from "./Config";

class Mountains {
    constructor(scene) {
        this.scene = scene;
        this.createMountains();
        this.setMaterials();
    }

    createMountains() {
        Config.mountains.meshes.forEach(mountain => {
            mountain.mesh = new BABYLON.Mesh.CreateGroundFromHeightMap(
                `ground-${ Math.round(Math.random() * 100) }`, 
                mountain.heightMap, 
                mountain.width, 
                mountain.height, 
                mountain.subdivisions, 
                0, 
                mountain.textureHeight, 
                this.scene, 
                true
            );

            mountain.mesh.rotate(BABYLON.Axis.Y, mountain.rotation, BABYLON.Space.WORLD);
            mountain.mesh.position.x = mountain.x;
            mountain.mesh.position.z = mountain.z;
            mountain.mesh.position.y = mountain.y;
        });
    }

    setMaterials() {
        Config.mountains.meshes.forEach(mountain => {
            let gridMaterial = new BABYLON.GridMaterial(`gridMaterial-${ Math.round(Math.random() * 100) }`, this.scene);

            gridMaterial.mainColor = mountain.grid.mainColor;
            gridMaterial.lineColor = mountain.grid.lineColor;
            gridMaterial.gridRatio = mountain.grid.gridRatio;
            gridMaterial.backFaceCulling = false;
            gridMaterial.majorUnitFrequency = mountain.grid.majorUnitFrequency;
            gridMaterial.opacity = mountain.grid.opacity;
            mountain.mesh.material = gridMaterial;
        });
    }
}

export default Mountains;