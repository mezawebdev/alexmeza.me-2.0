import Config from "./Config";

class Grid {
    constructor(scene) {
        this.scene = scene;
        this.verticalLines = [];
        this.horizontalLines = [];
        this.horizontalLineRotation = 1.57;
        this.verticalLineRotation = 1.57;
        this.horizontalLinesInitialMax = Config.grid.horizontalLinesAmount;
        this.createGrid();
    }

    createGrid() {
        // Horizontal Lines
        for (let i = 0; i < Config.grid.horizontalLinesAmount; i++) {
            this.newHorizontalLine(new BABYLON.Vector3(i * Config.grid.frequency, 0, i * Config.grid.frequency));
        }

        this.horizontalLines.forEach(line => {
            line.uniqueKey = `line-${ Math.round(Math.random() * 10000000) }`;
        });

        // Vertical Lines
        this.newVerticalLine(new BABYLON.Vector3(0, 0, 0));

        for (let i = 0; i < Config.grid.verticalLinesAmount / 2; i++) {
            if (i > 0) {
                this.newVerticalLine(new BABYLON.Vector3(i * Config.grid.frequency, 0, 0));
            }
        }

        for (let i = 0; i < Config.grid.verticalLinesAmount / 2; i++) {
            if (i > 0) {
                this.newVerticalLine(new BABYLON.Vector3(0, 0, i * Config.grid.frequency));
            }
        }
    }

    newHorizontalLine(position) {
        this.horizontalLines.push(
            new BABYLON.MeshBuilder.CreateCylinder("grid-line", {
                diameter: Config.grid.diameter,
                height: Config.grid.height
            }, this.scene)
        );
        this.horizontalLines.last().position = position;
        this.horizontalLines.last().rotate(BABYLON.Axis.X, this.horizontalLineRotation, BABYLON.Space.WORLD);
        this.horizontalLines.last().rotate(BABYLON.Axis.Y, -this.horizontalLineRotation / 2, BABYLON.Space.WORLD);
        this.horizontalLines.last().material = new BABYLON.StandardMaterial("material", this.scene);
        this.horizontalLines.last().material.emissiveColor = Config.grid.color;
    }

    newVerticalLine(position) {
        this.verticalLines.push(
            new BABYLON.MeshBuilder.CreateCylinder("grid-line", {
                diameter: Config.grid.diameter,
                height: 10
            }, this.scene)
        );
        this.verticalLines.last().rotate(BABYLON.Axis.X, this.verticalLineRotation, BABYLON.Space.WORLD);
        this.verticalLines.last().rotate(BABYLON.Axis.Y, this.verticalLineRotation / 2, BABYLON.Space.WORLD);
        this.verticalLines.last().position = position;
        this.verticalLines.last().material = new BABYLON.StandardMaterial("material", this.scene);
        this.verticalLines.last().material.emissiveColor = Config.grid.color;
    }

    animate() {
        // Grid
        var i = 0,
            sceneOriginOffset = -0.1;

            this.horizontalLines.forEach(line => {
                line.position.x += -Config.consciousness.walkSpeed;
                line.position.z += -Config.consciousness.walkSpeed;

                if (line.position.x <= sceneOriginOffset + Config.camera.initialTarget.diameter && line.position.z <= sceneOriginOffset + Config.camera.initialTarget.diameter && line.position.x >= sceneOriginOffset - Config.camera.initialTarget.diameter && line.position.z >= sceneOriginOffset - Config.camera.initialTarget.diameter) {
                    line.material.emissiveColor = new BABYLON.Color3(1, 1, 1);
                    line.dispose();
                    this.horizontalLines.splice(i, 1);
                    this.newHorizontalLine(new BABYLON.Vector3(this.horizontalLinesInitialMax * Config.grid.frequency, 0, this.horizontalLinesInitialMax * Config.grid.frequency));
                }

                i++;
            });
    }
}

export default Grid;