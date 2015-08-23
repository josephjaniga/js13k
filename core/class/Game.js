import Collider from "./Collider.js";
import Component from "./Component.js";
import GameObject from "./GameObject.js";
import Input from "./Input.js";
import Jump from "./Jump.js";
import PhysicsBody from "./PhysicsBody.js";
import Rect from "./Rect.js";
import RectRenderer from "./RectRenderer.js";
import ScrollingTerrain from "./ScrollingTerrain.js";
import SpriteRenderer from "./SpriteRenderer.js";
import Transform from "./Transform.js";
import Vector2 from "./Vector2.js";

let singleton = Symbol();
let singletonEnforcer = Symbol();

export default class Game {
    constructor(options) {
        console.log("Game | constructor");

        this.color = {
            black: "rgba(0,0,0,0)",
            dark: "rgba(0,0,0,0.5)",
            light: "rgba(255,255,255,0.5)",
            white: "rgba(255,255,255,1)",
            transparent: "rgba(255,255,255,0)"
        };

        var desiredPlatforms = 2;
        this.platformCount = 0;

        // METHODS
        this.Update = ()=> {

            this.objs.forEach((el)=> {
                el.Update();
            });

        };
        this.Draw = ()=> {
            this.CTX.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.objs.forEach((el)=> {
                el.Draw(this.CTX);
            });
        };
        this.Loop = ()=> {
            this.Update();
            this.Draw();
            requestAnimationFrame(this.Loop);
        };
        this.ResizeCanvas = (x, y)=> {
            this.canvas.width = x;
            this.canvas.height = y;
        };
        this.init = (options) => {
            this.canvas = options.canvas;

            // PROPERTIES
            this.scale = 3;
            this.resolution = new Vector2(320, 188);
            this.CTX = this.canvas.getContext('2d');
            this.objs = [];
            this.ResizeCanvas(this.resolution.x * this.scale, this.resolution.y * this.scale);
            this.CTX.scale(this.scale, this.scale);
        };
        this.SpawnPlatform = (position, size)=> {
            // setup the platform
            var platform = new GameObject();
            platform.transform = new Transform({
                position: position,
                size: size
            });
            platform.AddComponent(new Collider());
            platform.AddComponent(new ScrollingTerrain());
            platform.AddComponent(new RectRenderer());
            platform.color = Game.instance.color.light;
            platform.name = "Platform";

            this.RecalculatePlatforms();
            this.objs.push(platform);
        };
        this.SpawnPlayer = (position, size)=> {
            // setup the player
            var player = new GameObject();
            player.transform = new Transform({
                position: position,
                size: size
            });
            player.AddComponent(new Collider());
            player.AddComponent(new PhysicsBody({kinematic: false}));
            player.AddComponent(new Jump({input: Input.instance}));
            player.AddComponent(new SpriteRenderer({
                animations: [
                    {name: "Walk", frames: [0, 1, 2, 3]},
                    {name: "Jump", frames: [4]}
                ]
            }));
            player.color = this.color.transparent;
            player.name = "Player";

            // add the player to the game
            this.objs.push(player);
        };
        this.RecalculatePlatforms = ()=>{
            let i = 0;
            this.objs.forEach((el)=> {
                if ( el.name.indexOf("Platform") > -1 ){
                    i++
                }
            });
            this.platformCount = i;
        };
    }
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new Game(singletonEnforcer);
        }
        return this[singleton];
    }
}

/**
 *  using ARROW FUNCTIONS here in ES6 for lexical scope inheritance
 *  they assume the scope (this) from their parent scoping
 */


