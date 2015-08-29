import Component from "./Component.js";

export default class Transform extends Component {
    constructor(options){
        super(options);
        this.position = options.position;
        this.size = options.size;
    }
}