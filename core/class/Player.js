import Component from "./Component.js";
import Game from "./Game.js";
import GameObject from "./GameObject.js";
import Transform from "./Transform.js";
import Vector2 from "./Vector2.js";
import ScrollingTerrain from "./ScrollingTerrain.js";
import SpriteRenderer from "./SpriteRenderer.js";
import Particle from "./Particle.js";

export default class Player extends Component{
    constructor(options){
        super(options);

        this.componentName = "Player";

        this.lastBump = Date.now();
        this.timeStep = 10000; // ten seconds
        this.speedStep = 0.25;

        //this.deathSoundSource = "data:audio/mp3;base64,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";
        this.deathSoundSource = jsfxr([0,,0.05,0.18,0.85,0.42,0.08,0.1259,-0.3,0.05,0.25,0.5133,0.5094,,-0.193,0.29,0.04,-0.06,0.9786,0.0143,0.9207,,-0.1832,0.5]);
        this.deathSound = new Audio(this.deathSoundSource);

        //this.soundSource = "data:audio/mp3;base64,/+MYxAAMcHpgAUkYAQQDCCyMLgmGyfPUFECBAgRo257/NGgQMAAAAB4eHh6QAAAAQf4eHv/4Ah//1IAf/h49MpOPYqTx1iUN/+MYxAkOYSa4AYsQAFql7/USLhvWJpD7GdoUqaEfht+bdGFnA5Tn/cz9rCyC1vp+UBcmBHf/WlZGj/kf4ZW2/tsOpHnbFpxQ/+MYxAoOwM7UyYwYAB8RTC6aWlTjkLDEF3P3pWQTRra12l8WW6WiEdumgJFAFQxnpAkglVn+m7IfUz+xTuglM7LjdE800LEG/+MYxAoNONLgAYkYACTnVPFahCp5tuzdgZTJiVMpHiCBdAjQcxaUJvEQuMPI+zuYaYIaP////9IaRMKEBBXgGkDkG/WJWicT/+MYxBAOiSbkAYkYAKYrUJ2taURmH2Tto5oiLBbx9CRC//L9el3otyz8vxgUCq8COpu6iUr5dNVYNw0Mo0WMUZQsrySXs9Mq/+MYxBAOkL7oAYkYAEKajcmWrpyN8rRMy0SYhKM5VwwGrpcP9K0nmuel3fU87DS95JPR/V//WtUPIyNUONLpCpaZMwktntux/+MYxBAPaNbsAYkwALFSzEz7jeKswpGl9vJ23Y584cw+wsPOJqQtlYYc5j0tQ+zh+i27/lq7r/7/8PK2UfcTZoBT+qvVtM9L/+MYxA0NyRLwAYwwAAPTy+817olq6bOV58nXkPCE13QQ3/+t//w9ksWTA7f6SSN3/t7U9X/9FdUNDUB4NWk2qkZI6ZgkyJwY/+MYxBARGNb0AYkYAO84gny6Br5kiyayoQ90MQ/kbhgphkEAZA4YDAGpDy2ERWzFLpY6epFLOj3qe1uxe//2o/0qnwAo+gMx/+MYxAYM4HcAKcMYAA4PUiCDuRBBqUggYd2jxKPn0D4AOBgJmSJ0UC6xGd79cLtVWD7lMod1f/9+qQpNEgPeu+0dbnIkUjzm/+MYxA0K0OsEADDGgCkbLVOXECHRVqWqS2F01tl+MLadOm6EM/YkLbO26ipPwsAgaBYM1FNBTWgxVHKlIvHJOiMRTAghBYOD/+MYxBwMeIr4ADGMAAMNJCklLBUEhC5AiJqIFb4+KN2//9mDmDRmDUclCQhkARRjwLNydWgYC4XM+Kk44h1vSLLWw6SFBQCk/+MYxCUMYMr0ABjGKCeXsYdRoRq/R0f//qVJZbf7hTCQwUmEvHNi1msZ7y8r/qdlnak2trz6vPjRKziD0DRY00klpHSzbMcc/+MYxC4M2ObkAUYQADfWNL/9CjgLBAGjewYcCNOupRRWEjBCmJxBwuLN9uzmbCHJ14Gax9dRc+ivK//IP53/ZTUDyRySWj/i/+MYxDULWQbcAYIYACPREHPUDQNPgqd+JQWxKCp6oGjygaf0cSgqCvBoOcSwVBX4lBoO8RA0DQNf4KpMQU1FMy45OS41qqqq/+MYxEINKALBucEQAqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq/+MYxEgAAANIAAAAAKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";
        this.soundSource = jsfxr([2,0.0659,0.2122,0.4074,0.5489,0.5002,,-0.29,0.1331,,0.9816,-0.0915,0.2788,-0.2408,0.0016,0.583,-0.0046,-0.9982,0.1595,0.0008,0.2498,0.0502,,0.5]);
        this.speedSound = new Audio(this.soundSource);

        this.speedSound.pause();
        this.speedSound.currentTime = 0;
        this.speedSound.play();

        Game.instance.startTime = Date.now();
        Game.instance.currentScore = 0;

        this.Update = ()=>{
            if ( this.lastBump + this.timeStep <= Date.now() ){
                this.lastBump = Date.now();
                Game.instance.speed += this.speedStep;
                Game.instance.SetScrollingTerrainSpeed(Game.instance.speed);
                // play a speed increase noise
                this.speedSound.pause();
                this.speedSound.currentTime = 0;
                this.speedSound.play();

                // camerashake
                Game.instance.shakeFrames = 5;
            }

            Game.instance.currentScore = (Date.now() - Game.instance.startTime) / 1000;
        };

        this.Die = ()=>{
            for( var i=0; i<50; i++ ){
                var size = this.gameObject.transform.size.x,
                    rX = ((Math.random()*2) -1) * size,
                    rY = ((Math.random()*2) -1) * size,
                    scaleVariant  = ((Math.random()*.75)+.1);

                // spawn a particle
                var DeathParticle = new GameObject();
                DeathParticle.name = "DeathParticle";
                DeathParticle.transform = new Transform({
                    position: new Vector2(this.gameObject.transform.position.x + rX,this.gameObject.transform.position.y + rY),
                    size: new Vector2(this.gameObject.transform.size.x * scaleVariant, this.gameObject.transform.size.y * scaleVariant)
                });
                DeathParticle.AddComponent(new SpriteRenderer({
                    animated: true,
                    animations: [{name:"Death" , frames:[9]}],
                    playOnce: false
                }));
                DeathParticle.AddComponent(new Particle({lifeTime: 2000}));
                DeathParticle.AddComponent(new ScrollingTerrain({speed:Game.instance.speed}));
                DeathParticle.GetComponent("SpriteRenderer").ticksPerFrame = 8;
                Game.instance.objs.push(DeathParticle);
            }

            Game.instance.SetScrollingTerrainSpeed(0.25);
            this.gameObject.Destroy();

            // play a death sound
            this.deathSound.pause();
            this.deathSound.currentTime = 0;
            this.deathSound.play();

            // camera shake
            Game.instance.shakeFrames = 120;

            //Game.instance.paused = true;

            setTimeout(()=>{
                //Game.instance.paused = false;
                Game.instance.reset("All");
                Game.instance.init();
            }, 3000);


        };
    }
}