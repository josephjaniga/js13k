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

        this.game = Game.instance;

        this.Update = ()=>{
            if ( !this.isKinematic && this.gameObject.name === "Player" ){
                this.Step();
                console.log(this.gameObject.name + " " + this.game.objs.length);
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

            var col = false,
                t = this.gameObject.transform,
                myRect = new Rect();
                myRect.init(
                    t.position.x+this.velocity.x,
                    t.position.y+this.velocity.y,
                    t.size.x,
                    t.size.y
                );

            var rect = [myRect.position.x, myRect.position.y, myRect.size.x, myRect.size.y];
            Game.instance.CTX.fillStyle = "#00ff00";
            Game.instance.CTX.fillRect(...rect);

            // check if new position has collision?
            if ( !this.collider !== null ){

            }

            this.game.objs.forEach((object)=>{
                if ( object !== this.gameObject ) {
                    var t2 = object.transform,
                        objRect = new Rect();
                    objRect.init(t2.position.x, t2.position.y, t2.size.x, t2.size.y);
                    if (this.AABB(myRect, objRect)) {
                        col = true;
                    }
                }
            });

            console.log(col);

            if ( !col ){
                // apply motion
                this.gameObject.transform.position.x += this.velocity.x;
                this.gameObject.transform.position.y += this.velocity.y;
            }

        };
        this.AABB = (rect1, rect2)=>{
            var collision = false;
            if (rect1.position.x < rect2.position.x + rect2.size.x &&
                rect1.position.x + rect1.size.x > rect2.position.x &&
                rect1.position.y < rect2.position.y + rect2.size.y &&
                rect1.size.y + rect1.position.y > rect2.position.y) {
                // collision detected!
                collision = true;
            }
            return collision;
        };
    }
}