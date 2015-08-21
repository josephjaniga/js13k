import GameObject from "./GameObject.js";
import Vector2 from "./Vector2.js";

class Game {
    constructor(options){

        console.log("Game | constructor");

        // PROPERTIES
        let scale = 3;
        this.canvas = options.canvas;
        this.resolution = new Vector2(320*scale, 188*scale);
        this.CTX = this.canvas.getContext('2d');
        this.objs = [];

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
        this.init = () =>{
            this.ResizeCanvas(this.resolution.x, this.resolution.y);
            this.CTX.scale(scale, scale);
        };

        this.init();
    }
}


module.exports = Game;

/**
 *  using ARROW FUNCTIONS here in ES6 for lexical scope inheritance
 *  they assume the scope (this) from their parent scoping
 */