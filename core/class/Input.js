const SPACE = 32;

let singleton = Symbol();
let singletonEnforcer = Symbol();

export default class Input {
    constructor(options){
        //console.log("Input | constructor");

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
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new Input(singletonEnforcer);
        }
        return this[singleton];
    }
}