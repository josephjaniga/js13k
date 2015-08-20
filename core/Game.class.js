class Game {
    constructor(options){
        console.log("Game | constructor");
        this.CTX = options.canvas.getContext('2d');
        this.CTX.fillRect(10, 10, 10, 10);
    }
}