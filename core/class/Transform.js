import Component from "./Component.js";

class Transform extends Component {
    constructor(options){
        super(options);
        console.log("Transform | constructor");
        this.position = options.position;
        this.size = options.size;
    }
}

module.exports = Transform;