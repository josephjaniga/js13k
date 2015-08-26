import Component from './Component.js';
import Input from "./Input.js";

export default class DestroyOnSpace extends Component{
    constructor(options){
        super(options);
        this.Update = ()=>{
            if ( Input.instance.isSpaceDown ){
                this.gameObject.Destroy();
            }
        };
    }
}