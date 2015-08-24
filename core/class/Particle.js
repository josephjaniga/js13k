import Component from './Component.js';

export default class Particle extends Component{

    constructor(options){
        super(options);
        this.lifetime = 1000;
        this.startTime = Date.now();
        this.fades = true;

        this.renderer  = this.gameObject.GetComponent("SpriteRenderer");

        if ( !this.renderer ){

        }

        this.Update = ()=>{
            if ( Date.now() >= this.startTime + this.lifetime ){
                this.gameObject.Destroy();
            } else {

            }
        };
    }

}