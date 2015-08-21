export default class Component {
    constructor(options){
        console.log("Component | constructor");
        this.gameObject = null;
        this.Update = ()=>{};
        this.Draw = ()=>{};
    }
}