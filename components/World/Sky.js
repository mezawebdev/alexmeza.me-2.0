import Config from "./Config";

class Sky {
    constructor(scene) {
        this.scene = scene;
        this.skybox = BABYLON.Mesh.CreateSphere("skyBox", 10.0, 1000.0, this.scene);
        BABYLON.Effect.ShadersStore.gradientVertexShader = "precision mediump float;attribute vec3 position;attribute vec3 normal;attribute vec2 uv;uniform mat4 worldViewProjection;varying vec4 vPosition;varying vec3 vNormal;void main(){vec4 p = vec4(position,1.);vPosition = p;vNormal = normal;gl_Position = worldViewProjection * p;}";
        BABYLON.Effect.ShadersStore.gradientPixelShader = "precision mediump float;uniform mat4 worldView;varying vec4 vPosition;varying vec3 vNormal;uniform float offset;uniform vec3 topColor;uniform vec3 bottomColor;void main(void){float h = normalize(vPosition+offset).y;gl_FragColor = vec4(mix(bottomColor,topColor,max(pow(max(h,0.0),0.6),0.0)),1.0);}";
        this.shader = new BABYLON.ShaderMaterial("gradient", this.scene, "gradient", {});
        this.shader.setFloat("offset", 20);
        this.shader.setColor3("topColor", BABYLON.Color3.FromInts(Config.sky.colors.top.r, Config.sky.colors.top.g, Config.sky.colors.top.b));
        this.shader.setColor3("bottomColor", BABYLON.Color3.FromInts(Config.sky.colors.bottom.r, Config.sky.colors.bottom.g, Config.sky.colors.bottom.b));
        this.shader.backFaceCulling = false;
        this.skybox.material = this.shader;
        this.skybox.rotation.x = -2.625;
        this.skybox.rotation.z = -2.625;
    }
}

export default Sky;