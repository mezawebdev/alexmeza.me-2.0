class Plane {
    constructor(plane, scene, followCamera) {
        this.plane = plane;
        this.scene = scene;
        this.followCamera = followCamera;
        this.createPlane();
    }

    createPlane() {
        this.plane._mesh = new BABYLON.MeshBuilder.CreateGround("plane", {
            width: this.plane.width,
            height: this.plane.height
        }, this.scene);

        this.plane._mesh.rotate(BABYLON.Axis.Y, this.plane.rotation, BABYLON.Space.WORLD);

        this.plane._mesh.material = new BABYLON.StandardMaterial("material", this.scene);

        this.plane._mesh.material.diffuseColor = this.plane.material.color;

        this.plane._mesh.material.specularColor = this.plane.material.color;

        this.plane._mesh.material.backFaceCulling = true;

        this.plane._mesh.position.y = this.plane.y;
    }
}

export default Plane;