import GameObject from "./GameObject.js";

class Game {
    constructor(options){
        alert("the right one");
        //console.log("Game | constructor");
        this.o = [new GameObject()];
        this.CTX = options.canvas.getContext('2d');
        Game.Loop();
    }
    static Loop(){
        Game.Update();
        Game.Draw();
        requestAnimationFrame(Game.Loop);
    }
    static Update(){
//        console.log(Game);
//        Game.o.forEach(function(element){
//            element.Update();
//        });
    }
    static Draw(){
//        Game.CTX.fillRect(10, 10, 10, 10);
//        Game.o.forEach(function(element){
//            // draw them too!
//        });
    }
}

module.exports = Game;