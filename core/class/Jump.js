import Component from "./Component.js";

export default class Jump extends Component{
    constructor(options){
        super(options);
        //console.log("Jump | constructor");
        this.input = options.input;
        this.SpriteRenderer = null;

        this.jumpOne = false;
        this.doubleJump = false;

        this.jumpForce = -9.5;

        this.lastJumpTime = -9999;
        this.jumpCD = 300;

        this.Update = ()=>{

            //gulpconsole.log("jump1: " + this.jumpOne + " doublejump: " + this.doubleJump);

            if ( this.gameObject ){
                this.pb = this.gameObject.GetComponent("PhysicsBody");
                this.SpriteRenderer = this.gameObject.GetComponent("SpriteRenderer");
            }

            if ( this.input.isSpaceDown && this.pb ) {

                if ( this.jumpOne && !this.doubleJump && this.lastJumpTime + this.jumpCD <= Date.now() ){
                    this.Jump();
                    this.doubleJump = true;
                }

                if ( !this.jumpOne && this.pb.grounded && this.lastJumpTime + this.jumpCD <= Date.now()) {
                    this.Jump();
                    this.pb.grounded = false;
                    this.jumpOne = true;
                }

            }

            if ( this.pb.grounded ){
                this.jumpOne = false;
                this.doubleJump = false;
            }

            if ( this.pb.grounded && this.SpriteRenderer ){
                this.SpriteRenderer.currentAnimation = 0;
            } else {
                this.SpriteRenderer.currentAnimation = 1;
            }
        };
        this.Jump = ()=>{
            if ( this.lastJumpTime + this.jumpCD <= Date.now() ){
                this.lastJumpTime = Date.now();
                if ( this.gameObject ){
                    this.pb = this.gameObject.GetComponent("PhysicsBody");
                }
                if ( this.pb ){
                    this.pb.velocity.y = this.jumpForce;
                }
            }
        };
    }
}
