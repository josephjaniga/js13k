import Component from './Component.js';
import Game from "./Game.js";

export default class Player extends Component{
    constructor(options){
        super(options);
        this.Die = ()=>{
            //console.log("you died");
            //Game.instance.paused = true;
            this.gameObject.Destroy();
            Game.instance.reset("All");
            Game.instance.init();
        };
    }
}