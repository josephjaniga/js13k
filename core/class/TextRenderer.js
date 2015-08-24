import Component from './Component.js';

export default class TextRenderer extends Component{
    constructor(options){
        super(options);
        this.text = "Testing...";
        this.Update = ()=>{

        };
        this.Draw = (ctx)=>{
            ctx.font = '30pt Calibri';
            ctx.textAlign = 'center';
            ctx.fillStyle = 'white';
            ctx.fillText(this.text, this.gameObject.transform.position.x, this.gameObject.transform.position.y);
        };
    }
}