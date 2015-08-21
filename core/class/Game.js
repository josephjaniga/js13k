import GameObject from "./GameObject.js";
import Vector2 from "./Vector2.js";

class Game {
    constructor(options){
        console.log("Game | constructor");
        let scale = 3;
        this.resolution = new Vector2(320*scale, 188*scale);
        this.objs = [new GameObject()];
        this.canvas = options.canvas;
        this.canvas.width = this.resolution.x;
        this.canvas.height = this.resolution.y;
        this.CTX = this.canvas.getContext('2d');
        this.CTX.scale(scale, scale);
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
        this.Loop();
    }
}


module.exports = Game;

/**
 *  using ARROW FUNCTIONS here in ES6 for lexical scope inheritance
 *  they assume the scope (this) from their parent scoping
 */