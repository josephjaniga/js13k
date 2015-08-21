import Component from "./Component.js";

class Jump extends Component{

    constructor(options){
        super(options);
        console.log("Jump | constructor");
        this.input = options.input;
        this.Update = ()=>{
            if ( this.input.isSpaceDown ){
                this.gameObject.color = "#FF0000";
            } else {
                this.gameObject.color = "#000000";
            }
        };

    }
}

module.exports = Jump;

