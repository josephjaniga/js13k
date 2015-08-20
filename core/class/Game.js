import GameObject from "./GameObject.js";

class Game {
    constructor(options){
        alert("the right one");
        //console.log("Game | constructor");
        this.objs = [new GameObject()];
        this.CTX = options.canvas.getContext('2d');

        this.Update = ()=>{};
        this.Draw = ()=>{};
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
 *  USING arrow functions here in ES6 for lexical scope inheritance
 *  they assume the scope (this) from thier parent scoping
 */