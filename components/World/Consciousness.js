import Config from "./Config";

class Consciousness {
    constructor(world) {
        this.world = world;
        this.garbage = {
            horizontalLines: []
        };
        this.setGarbageDisposalIntervals();
        this.setCretionIntervals();
    }

    update() {
        // Camera (Target Sphere)
        this.world.camera.targetSphere.position.x += Config.consciousness.walkSpeed;
        this.world.camera.targetSphere.position.z += Config.consciousness.walkSpeed;

        // Mountains
        this.world.mountains.mountains.forEach(mountain => {
            mountain.position.x += Config.consciousness.walkSpeed;
            mountain.position.z += Config.consciousness.walkSpeed;
        });

        // Ground
        this.world.ground.verticalLines.forEach(line => {
            line.position.x += Config.consciousness.walkSpeed;
            line.position.z += Config.consciousness.walkSpeed;
        });

        // Planes
        Config.planes.forEach(plane => {
            if (plane.followCamera) {
                plane._mesh.position.x += Config.consciousness.walkSpeed;
                plane._mesh.position.z += Config.consciousness.walkSpeed;
            }
        });
    }

    destroy() {
        this.world.ground.horizontalLines.forEach(line => {
            if (line.position.x <= (this.world.camera.targetSphere.position.x - 0.25) + Config.camera.initialTarget.diameter && line.position.z <= (this.world.camera.targetSphere.position.z - 0.25) + Config.camera.initialTarget.diameter && line.position.x >= (this.world.camera.targetSphere.position.x - 0.25) - Config.camera.initialTarget.diameter && line.position.z >= (this.world.camera.targetSphere.position.z - 0.25) - Config.camera.initialTarget.diameter) {
                if (! this.garbage.horizontalLines.isInArray(line.uniqueKey)) {
                    this.garbage.horizontalLines.push(line.uniqueKey);
                } else {
                    // Nothing
                }
            }
        });
    }

    setGarbageDisposalIntervals() {
        setInterval(() => {
            for (let i = 0; i < this.garbage.horizontalLines.length; i++) {
                this.world.ground.horizontalLines.forEach(line => {
                    if (line.uniqueKey === this.garbage.horizontalLines[i]) {
                        line.dispose();
                        this.world.ground.newHorizontalLine(new BABYLON.Vector3(this.world.ground.horizontalLinesInitialMax * Config.grid.frequency, 0, this.world.ground.horizontalLinesInitialMax * Config.grid.frequency));
                        this.world.ground.horizontalLinesInitialMax++;
                    }
                });
            }

            this.garbage.horizontalLines = [];
        }, Config.consciousness.garbage.horizontalLines.disposalInterval);
    }

    setCretionIntervals() {
        // setInterval(() => {
        //     console.log("created lines.");
        // }, Config.consciousness.creation.horizontalLines.creationInterval);
    }
}

export default Consciousness;