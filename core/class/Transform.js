import Component from "./Component.js";

export default class Transform extends Component {
    constructor(options){
        super(options);
        console.log("Transform | constructor");
        this.position = options.position;
        this.size = options.size;
    }
}