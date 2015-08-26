import Component from "./Component.js";
import Game from "./Game.js";
import GameObject from "./GameObject.js";
import Transform from "./Transform.js";
import Vector2 from "./Vector2.js";
import ScrollingTerrain from "./ScrollingTerrain.js";
import SpriteRenderer from "./SpriteRenderer.js";
import Particle from "./Particle.js";

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

        this.soundSource = "data:audio/mp3;base64,/+MYxAALeAMRuUEQArT4o7LLw/ggCb9YY3orfAAYy5//E6z8H+oMS4fUCAIf6pR3/E+T///5d8QO/D4XHPD+DfHROEnTxLGD/+MYxA0O6TcMAYcwAO48Nn/uxT26BMMnf7nAwN/7fdq//69Ntlk0+/PmlwuHzG0qR29n4jBwlB/+vsy9DNxS43f///////HU/+MYxAwQI0L4AY04AIEgGhF//46WyHzqjVRJF43P/mzW5s5H0Eb/+5hjfzRsfWTHCBM//qavr//8353+YaXM/+IlEgHIC4Su/+MYxAYOuxKoCZJoALIaaJ/dD/zG//qSMWV//76X//v6LI1f//7moOoYwHsEiHcUtv///90dKqp9X////0l9aki8TEFNRTMu/+MYxAYAAANIAcAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

        this.jumpSound = new Audio(this.soundSource);
        this.soundPitchMin = .9;
        this.soundPitchMax = 3;

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

            if ( this.pb && this.pb.grounded ){
                this.jumpOne = false;
                this.doubleJump = false;
            }

            if ( this.SpriteRenderer ){
                if ( this.pb && this.pb.grounded ){
                    this.SpriteRenderer.currentAnimation = 0;
                } else {
                    this.SpriteRenderer.currentAnimation = 1;
                }
            }

        };
        this.Jump = (force)=>{
            if ( this.lastJumpTime + this.jumpCD <= Date.now() ){

                this.lastJumpTime = Date.now();

                // jump sound
                this.jumpSound.pause();
                this.jumpSound.currentTime = 0;
                this.jumpSound.playbackRate = Math.random() * (this.soundPitchMax - this.soundPitchMin) + this.soundPitchMin;;
                this.jumpSound.play();

                // spawn a particle
                var JumpUpParticle = new GameObject();
                JumpUpParticle.name = "JumpUpParticle";
                JumpUpParticle.transform = new Transform({
                    position: new Vector2(this.gameObject.transform.position.x,this.gameObject.transform.position.y+this.gameObject.transform.size.y*0.25),
                    size: new Vector2(this.gameObject.transform.size.x*0.75, this.gameObject.transform.size.y*0.75)
                });
                JumpUpParticle.AddComponent(new SpriteRenderer({
                    animated: true,
                    animations: [{name:"Jump" , frames:[8, 8, 8]}],
                    playOnce: true
                }));
                JumpUpParticle.AddComponent(new Particle({}));
                JumpUpParticle.AddComponent(new ScrollingTerrain({speed:Game.instance.speed}));
                JumpUpParticle.GetComponent("SpriteRenderer").ticksPerFrame = 8;
                Game.instance.objs.push(JumpUpParticle);

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
