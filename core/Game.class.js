class Game {
    constructor(options){
        "use strict";
        console.log("instantiated the game");
        console.log(options);
        console.log(document.getElementById("view"));

        if(options.canvas != null){
            this.ctx = options.canvas.getContext('2d');
        }
    }
}