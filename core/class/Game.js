import GameObject from "./GameObject.js";

class Game {
    constructor(options){
        //console.log("Game | constructor");
        this.objs = [new GameObject()];
        this.CTX = options.canvas.getContext('2d');
        this.Update = ()=>{
            this.objs.forEach((el)=>{
                el.Update();
            });
        };
        this.Draw = ()=>{
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