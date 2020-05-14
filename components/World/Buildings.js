import Config from "./Config";

class Buildings {
    constructor(scene) {
        this.scene = scene;
        this.meshes = [];
        this.createBuildings();
    }

    createBuildings() {
        Config.buildings.meshes.forEach(mesh => {
            var randomKey = `building-${ Math.round(Math.random() * 10000) }`,
                gridMaterial = new BABYLON.GridMaterial(`gridMaterial-${ Math.round(Math.random() * 100) }`, this.scene),
                currentMesh;

            gridMaterial.mainColor = Config.buildings.material.mainColor;
            gridMaterial.lineColor = Config.buildings.material.lineColor;
            gridMaterial.gridRatio = Config.buildings.material.gridRatio;
            gridMaterial.backFaceCulling = false;
            gridMaterial.majorUnitFrequency = Config.buildings.material.majorUnitFrequency;
            gridMaterial.opacity = Config.buildings.material.opacity;

            switch (mesh.shape) {
                case "rectangle":
                    this.meshes.push(
                        new BABYLON.MeshBuilder.CreateBox(randomKey, {
                            width: mesh.width,
                            height: mesh.height,
                            depth: mesh.depth
                        }, this.scene)
                    );
                break;
            }

            currentMesh = this.meshes[this.meshes.length - 1];
            currentMesh.material = gridMaterial;
            currentMesh.rotation.y = Math.PI / 4;
            currentMesh.position.x = mesh.x;
            currentMesh.position.z = mesh.z;
        });
    }
}

export default Buildings;