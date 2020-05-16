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
                highlightMaterial = new BABYLON.StandardMaterial("highlightMaterial", this.scene),
                currentMesh;

            gridMaterial.mainColor = Config.buildings.material.mainColor;
            gridMaterial.lineColor = Config.buildings.material.lineColor;
            gridMaterial.gridRatio = Config.buildings.material.gridRatio;
            gridMaterial.backFaceCulling = false;
            gridMaterial.majorUnitFrequency = Config.buildings.material.majorUnitFrequency;
            gridMaterial.opacity = Config.buildings.material.opacity;

            // standardMaterial.emissiveTexture = new BABYLON.Texture("/images/grid-texture-blue-2.png", this.scene);
            // standardMaterial.emissiveTexture.uScale = 0.75;
            // standardMaterial.emissiveTexture.vScale = 1.5;

            highlightMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0);

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
            currentMesh.rotation.y = mesh.rotation;
            currentMesh.position.x = mesh.x;
            currentMesh.position.z = mesh.z;

            if (mesh.highlight) {
                currentMesh.material = highlightMaterial;
            } else {
                currentMesh.material = gridMaterial;
            }
        });
    }
}

export default Buildings;