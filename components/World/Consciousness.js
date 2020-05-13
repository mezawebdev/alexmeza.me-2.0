import Config from "./Config";

class Consciousness {
    constructor(world) {
        this.world = world;
    }

    update() {
        if (Config.grid.animated) {
            this.world.grid.animate();
        }

        if (Config.stars.animated) {
            this.world.stars.animate();
        }
    }
}

export default Consciousness;