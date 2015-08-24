import Component from "./Component.js";

export default class Jump extends Component{
    constructor(options){
        super(options);
        //console.log("Jump | constructor");
        this.input = options.input;
        this.SpriteRenderer = null;
        this.Update = ()=>{

            if ( this.gameObject ){
                this.pb = this.gameObject.GetComponent("PhysicsBody");
                this.SpriteRenderer = this.gameObject.GetComponent("SpriteRenderer");
            }

            if ( this.input.isSpaceDown && this.pb && this.pb.grounded ){
                this.gameObject.color = "#FF0000";
                this.pb.velocity.y = -8;
                this.pb.grounded = false;
            } else {
                this.gameObject.color = "#000000";
            }

            if ( this.pb.grounded && this.SpriteRenderer ){
                this.SpriteRenderer.currentAnimation = 0;
            } else {
                this.SpriteRenderer.currentAnimation = 1;
            }
        };
    }
}
