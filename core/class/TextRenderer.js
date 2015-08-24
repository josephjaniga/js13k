import Component from './Component.js';

export default class TextRenderer extends Component{
    constructor(options){
        super(options);
        this.text = options.text || "TEST";
        this.font = options.font || '10px sans-serif';
        this.fontWeight = options.fontWeight || 'normal';
        this.textAlign = options.textAlign || 'start';
        this.fillStyle = options.fillStyle || 'black';
        this.Update = ()=>{

        };
        this.Draw = (ctx)=>{
            ctx.font = this.font;
            ctx.fontWeight = this.fontWeight;
            ctx.textAlign = this.textAlign;
            ctx.fillStyle = this.fillStyle;
            ctx.fillText(this.text, this.gameObject.transform.position.x, this.gameObject.transform.position.y);
        };
    }
}