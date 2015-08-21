const SPACE = 32;

class Input {
    constructor(options){

        console.log("Input | constructor");

        this.isSpaceDown = false;

        this.KeyDown = (e)=>{
            switch (e.keyCode) {
                case SPACE:
                    this.isSpaceDown = true;
                    break;
            }
        };

        this.KeyUp = (e)=>{
            switch (e.keyCode) {
                case SPACE:
                    this.isSpaceDown = false;
                    break;
            }
        };

        this.Attach = ()=>{
            window.addEventListener('keydown', this.KeyDown);
            window.addEventListener('keyup', this.KeyUp);
        }
    }
}

module.exports = Input;