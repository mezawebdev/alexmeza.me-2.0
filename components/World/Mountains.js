import Config from "./Config";

class Mountains {
    constructor(scene) {
        this.scene = scene;
        this.mountains = [];
        this.createMountains();
        this.setMaterials();
    }

    createMountains() {
        Config.mountains.meshes.forEach(mountain => {
            let mesh = new BABYLON.Mesh.CreateGroundFromHeightMap(
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

            mesh.rotate(BABYLON.Axis.Y, mountain.rotation, BABYLON.Space.WORLD);
            mesh.position.x = mountain.x;
            mesh.position.z = mountain.z;
            mesh.position.y = mountain.y;

            mesh.grid = mountain.grid;

            this.mountains.push(mesh);
        });
    }

    setMaterials() {
        this.mountains.forEach(mountain => {
            let gridMaterial = new BABYLON.GridMaterial(`gridMaterial-${ Math.round(Math.random() * 100) }`, this.scene);

            gridMaterial.mainColor = mountain.grid.mainColor;
            gridMaterial.lineColor = mountain.grid.lineColor;
            gridMaterial.gridRatio = mountain.grid.gridRatio;
            gridMaterial.backFaceCulling = false;
            gridMaterial.majorUnitFrequency = mountain.grid.majorUnitFrequency;
            gridMaterial.opacity = mountain.grid.opacity;
            mountain.material = gridMaterial;
        });
    }
}

export default Mountains;