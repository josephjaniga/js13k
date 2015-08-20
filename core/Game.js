class Game {
    constructor(options){
        "use strict";
        console.log("instantiated the game");
        console.log(options);
        console.log(document.getElementById("view"));

        this.CTX = options.canvas.getContext('2d');
        this.CTX.fillRect(10, 10, 10, 10);
    }
}