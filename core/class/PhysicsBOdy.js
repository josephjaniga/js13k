import Component from "./Component.js";
import Vector2 from "./Vector2.js";
import Game from "./Game.js";
import GameObject from "./GameObject.js";
import Rect from "./Rect.js";
import SpriteRenderer from "./SpriteRenderer.js";
import Particle from "./Particle.js";
import Transform from "./Transform.js";
import ScrollingTerrain from "./ScrollingTerrain.js";

/*
     (0,0) ----> (+, 0)
        |
        V
     (0,+) ----> (+, +)
 */

export default class PhysicsBody extends Component {
    constructor(options){
        super(options);

        this.componentName = "PhysicsBody";

        //console.log("player spawned - added PB");
        this.gravity = new Vector2(0,0.3);
        this.velocity = Vector2.zero();
        this.acceleration = Vector2.zero();
        this.collider = null;
        this.isKinematic = (options && options.kinematic) || false;

        this.game = Game.instance;
        this.grounded = false;
        this.lastGrounded = false;

        this.hitSoundSource = jsfxr([3,,0.0507,,0.2369,0.7984,,-0.6757,,,,,,,,,,,1,,,0.1483,,0.5]);
        this.hitSound = new Audio(this.hitSoundSource);

        this.Update = ()=>{

            //console.log(this.gameObject.GetComponent("Collider"));

            // assign the Collider if there is one
            if ( this.gameObject && !this.collider ) {
                this.collider = this.gameObject.GetComponent("Collider");
            }

            if ( !this.isKinematic ){
                this.Step();
            }
        };
        this.Step = ()=>{
            // recompute velocity
            this.velocity.x += this.acceleration.x + this.gravity.x;
            this.velocity.y += this.acceleration.y + this.gravity.y;

            // drag?
            this.velocity.x *= 0.9;
            this.velocity.y *= 0.9;

            var xCol = false,
                yCol = false,
                t = this.gameObject.transform,
                xRect = new Rect();
                xRect.init(
                    t.position.x+this.velocity.x,
                    t.position.y,
                    t.size.x,
                    t.size.y
                );
            var yRect = new Rect();
                yRect.init(
                    t.position.x,
                    t.position.y+this.velocity.y,
                    t.size.x,
                    t.size.y
                );
            var yFloorCeil = 0;

            // check if new position has Collision?
            if ( !this.collider !== null ){
                this.game.objs.forEach((object)=>{
                    var targetCollider = object.GetComponent("Collider");
                    if ( targetCollider !== null ){
                        if ( object !== this.gameObject ) {
                            var t2 = object.transform,
                                objRect = new Rect();
                            objRect.init(t2.position.x, t2.position.y, t2.size.x, t2.size.y);
                            if (this.AABB(xRect, objRect)) {
                                xCol = true;
                            }
                            if (this.AABB(yRect, objRect)) {
                                yCol = true;
                                yFloorCeil = t2.position.y - this.gameObject.transform.size.y;
                                if ( object.name === "CollisionDeath" && this.gameObject.name === "Player" ){
                                    this.gameObject.GetComponent("Player").Die();
                                }
                            }
                        }
                    }
                });
            }

            // apply motion
            if ( !xCol ){
                this.gameObject.transform.position.x += this.velocity.x;
            }

            if ( !yCol ) {
                this.gameObject.transform.position.y += this.velocity.y;
                this.lastGrounded = this.grounded;
                this.grounded = false;
            } else {

                // if would collide with floor, set the position to the floor
                this.gameObject.transform.position.y = yFloorCeil;

                if ( this.gameObject.name === "Player" && this.lastGrounded !== this.grounded ){

                    // play a landing sound
                    this.hitSound.pause();
                    this.hitSound.currentTime = 0;
                    this.hitSound.playbackRate = Math.random() * (2.5 - 0.75) + 0.75;
                    this.hitSound.play();

                    // spawn a particle
                    var jumpParticle = new GameObject();
                    jumpParticle.name = "JumpParticle";
                    jumpParticle.transform = new Transform({
                        position: new Vector2(this.gameObject.transform.position.x,this.gameObject.transform.position.y),
                        size: new Vector2(this.gameObject.transform.size.x, this.gameObject.transform.size.y)
                    });
                    jumpParticle.AddComponent(new SpriteRenderer({
                        animated: true,
                        animations: [{name:"puff" , frames:[4, 5, 6]}],
                        playOnce: true
                    }));
                    jumpParticle.AddComponent(new Particle({}));
                    jumpParticle.AddComponent(new ScrollingTerrain({speed:Game.instance.speed}));
                    jumpParticle.GetComponent("SpriteRenderer").ticksPerFrame = 7;
                    Game.instance.objs.push(jumpParticle);
                }

                this.lastGrounded = this.grounded;
                this.grounded = true;
            }

        };
        this.AABB = (rect1, rect2)=>{
            //console.log("collisions??? " + this.gameObject.name);
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