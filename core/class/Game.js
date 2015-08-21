import GameObject from "./GameObject.js";
import Vector2 from "./Vector2.js";

let singleton = Symbol();
let singletonEnforcer = Symbol();

export default class Game {
    constructor(options){
        console.log("Game | constructor");

        // METHODS
        this.Update = ()=>{
            this.objs.forEach((el)=>{
                el.Update();
            });
        };
        this.Draw = ()=>{
            this.CTX.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.objs.forEach((el)=>{
                el.Draw(this.CTX);
            });
        };
        this.Loop = ()=>{
            this.Update();
            this.Draw();
            requestAnimationFrame(this.Loop);
        };
        this.ResizeCanvas = (x, y)=>{
            this.canvas.width = x;
            this.canvas.height = y;
        };
        this.init = (options) =>{
            this.canvas = options.canvas;

            // PROPERTIES
            let scale = 3;
            this.resolution = new Vector2(320*scale, 188*scale);
            this.CTX = this.canvas.getContext('2d');
            this.objs = [];
            this.ResizeCanvas(this.resolution.x, this.resolution.y);
            this.CTX.scale(scale, scale);
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
