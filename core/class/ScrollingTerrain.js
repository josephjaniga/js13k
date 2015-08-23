import Component from "./Component.js";
import Game from "./Game.js";
import Vector2 from "./Vector2.js";

export default class ScrollingTerrain extends Component{
    constructor(options){
        super(options);
        console.log("ScrollingTerrain | constructor");
        this.speed = 1.75;
        this.link = null;
        this.Update = ()=>{

            // no link yet and on screen
            if ( this.link === null && this.gameObject.transform.position.x > 0 ){

                var newSize = new Vector2(this.RandomRange(160,80),20),
                    newPositionX = this.gameObject.transform.position.x - newSize.x,
                    newPositionY = this.gameObject.transform.position.y + this.RandomRange(20,-20);
                this.link = Game.instance.SpawnPlatform(
                    new Vector2(
                        newPositionX,
                        newPositionY
                    ),
                    newSize
                );
            }

            // Scroll Right
            this.gameObject.transform.position.x += this.speed;
            if ( !this.gameObject.isOnScreen() ){
                console.log("not on screen");
                this.gameObject.Destroy();
            }
        };
        this.RandomRange = (max, min)=>{
            return (Math.floor(Math.random()* (max - min)) + min)
        };
    }
}