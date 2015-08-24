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

                // the double jump
                if ( this.jumpOne && !this.doubleJump && this.lastJumpTime + this.jumpCD <= Date.now() ){
                    var f = this.jumpForce;
                    if ( this.pb.velocity.y > 1.9 ){
                        f = this.jumpForce*1.1;
                    }
                    this.Jump(f);
                    this.doubleJump = true;
                }

                // the first jump
                if ( !this.jumpOne && this.pb.grounded && this.lastJumpTime + this.jumpCD <= Date.now()) {
                    this.Jump(this.jumpForce);
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
        this.Jump = (force)=>{
            if ( this.lastJumpTime + this.jumpCD <= Date.now() ){
                this.lastJumpTime = Date.now();
                if ( this.gameObject ){
                    this.pb = this.gameObject.GetComponent("PhysicsBody");
                }
                if ( this.pb ){
                    this.pb.velocity.y = force;
                }
            }
        };
    }
}
