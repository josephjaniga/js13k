import Component from './Component.js';

export default class Particle extends Component{

    constructor(options){
        super(options);
        this.lifeTime = 1000;
        this.startTime = Date.now();

        //this.r = 255;
        //this.g = 255;
        //this.b = 255;

        this.Update = ()=>{
            if ( !this.spriteRender && this.gameObject ){
                this.spriteRenderer = this.gameObject.GetComponent("SpriteRenderer");
            }
            if ( Date.now() >= this.startTime + this.lifeTime ){
                this.gameObject.Destroy();
            } else {
                if ( this.spriteRenderer ){
                    this.spriteRenderer.alpha =  1 - ( Date.now() - this.startTime ) / this.lifeTime;
                }
            }
        };
    }

}