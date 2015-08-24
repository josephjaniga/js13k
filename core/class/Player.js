import Component from './Component.js';
import Game from "./Game.js";

export default class Player extends Component{
    constructor(options){
        super(options);
        this.Die = ()=>{
            console.log("you died");
            this.gameObject.Destroy();
            Game.instance.reset();
            Game.instance.init();
        };
    }
}