import Component from "./Component.js";

export default class Jump extends Component{
    constructor(options){
        super(options);
        console.log("Jump | constructor");
        this.input = options.input;
        this.grounded = false;
        this.Update = ()=>{

            if ( this.gameObject ){
                this.pb = this.gameObject.GetComponent("PhysicsBody");
            }

            if ( this.input.isSpaceDown && this.pb && this.pb.grounded ){
                this.gameObject.color = "#FF0000";
                this.pb.velocity.y = -15;
                this.pb.grounded = false;
            } else {
                this.gameObject.color = "#000000";
            }
        };
    }
}
