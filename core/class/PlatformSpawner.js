import Component from "./Component.js";
import Game from "./Game.js";

export default class PlatformSpawner extends Component{
    constructor(options){
        super(options);
        console.log("ScrollingTerrain | constructor");
        this.speed = 0.75;
        this.Update = ()=>{
            // Scroll Right
            this.gameObject.transform.position.x += this.speed;
            if ( !this.gameObject.isOnScreen() ){
                console.log("not on screen");
                this.gameObject.Destroy();
            }
        };
    }
}