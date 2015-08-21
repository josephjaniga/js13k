import Component from "./Component.js";
import Vector2 from "./Vector2.js";

/*
     (0,0) ----> (+, 0)
        |
        V
     (0,+) ----> (+, +)
 */

export default class PhysicsBody extends Component {
    constructor(options){
        super(options);
        this.gravity = new Vector2(0,1);
        this.velocity = Vector2.zero();
        this.acceleration = Vector2.zero();
        this.collider = null;
        this.isKinematic = (options && options.kinematic) || false;
        this.Update = ()=>{
            if ( !this.isKinematic ){
                this.Step();
            }
        };
        this.Draw = ()=>{};
        this.Step = ()=>{
            // recompute velocity
            this.velocity.x += this.acceleration.x + this.gravity.x;
            this.velocity.y += this.acceleration.y + this.gravity.y;

            // drag?
            this.velocity.x *= 0.9;
            this.velocity.y *= 0.9;

            // assign the collider if there is one
            if ( this.collider === null ) {
                this.collider = this.gameObject.GetComponent("Collider");
            }

            // check if new position has collision?
            if ( !this.collider !== null ){

            }

            // apply motion
            this.gameObject.transform.position.x += this.velocity.x;
            this.gameObject.transform.position.y += this.velocity.y;
        };
    }
}