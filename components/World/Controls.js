import Config from "./Config";

class Controls {
    constructor(world) {
        this.world = world;
    }

    update() {
        console.log(this.world.camera.camera);
        // Camera
        this.world.camera.camera.position.x += Config.camera.walkSpeed;
        this.world.camera.camera.position.z += Config.camera.walkSpeed;
    }
}

export default Controls;