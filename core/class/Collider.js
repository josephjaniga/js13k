import Component from "./Component.js";

class Collider extends Component{

    constructor(options){
        super(options);
        console.log("Collider | constructor");
        this.collisionCheck = ()=>{

        };
    }

}

module.exports = Collider;

