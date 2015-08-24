import Component from "./Component.js";
import Game from "./Game.js";
import Vector2 from "./Vector2.js";

export default class ScrollingTerrain extends Component{
    constructor(options){
        super(options);
        //console.log("ScrollingTerrain | constructor");
        this.speed = 2.5;
        this.link = null;
        this.Update = ()=>{

            // no link yet and on screen
            if ( this.link === null && this.gameObject.name === "Platform" ){

                var newSize = new Vector2(this.RandomRange(80,320),30),
                    newPositionX = this.gameObject.transform.position.x - newSize.x - this.RandomRange(100,0),
                    newPositionY = this.gameObject.transform.position.y + this.RandomRange(30,-30);

                // if the new platform is lower than current
                if ( newPositionY > this.gameObject.transform.position.y ){
                    // we can add more distance

                    var additionalDistance = newPositionY - this.gameObject.transform.position.y;
                    //console.log("its lower so add more distance: " + additionalDistance + " " + newPositionX);
                    newPositionX -= additionalDistance;
                }

                if ( newPositionY < 50 ){
                    newPositionY = 50;
                }
                if ( newPositionY > 180 ){
                    newPositionY = 180;
                }
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
                //console.log("not on screen");
                this.gameObject.Destroy();
            }
        };
        this.RandomRange = (max, min)=>{
            return (Math.floor(Math.random()* (max - min)) + min)
        };
    }
}