import Component from "./Component.js";
import Vector2 from "./Vector2.js";
import Game from "./Game.js";
import Rect from "./Rect.js";

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
            this.velocity.x *= 0.7;
            this.velocity.y *= 0.7;

            // assign the collider if there is one
            if ( this.collider === null ) {
                this.collider = this.gameObject.GetComponent("Collider");
            }

            let col = false,
                t = this.gameObject.transform,
                myRect = new Rect(t.position.x+this.velocity.x, t.position.y+this.velocity.y, t.size.x, t.size.y);

            // check if new position has collision?
            if ( !this.collider !== null ){
                Game.objs.forEach((object)=>{
                    let t2 = object.transform,
                        objRect = new Rect(t2.position.x, t2.position.y, t2.size.x, t2.size.y);
                    if ( this.AABB(myRect, objRect) ){
                        col = true;
                    }
                });
            }

            if ( !col ){
                // apply motion
                this.gameObject.transform.position.x += this.velocity.x;
                this.gameObject.transform.position.y += this.velocity.y;
            }

        };
        this.AABB = (rect1, rect2)=>{
            let collision = false;
            if (rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.height + rect1.y > rect2.y) {
                // collision detected!
                collision = true;
            }
            return collision;
        };
    }
}