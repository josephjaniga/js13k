import Component from './Component.js';

export default class RectRenderer extends Component{

    constructor(options){
        super(options);
        //console.log("RectRenderer | constructor");
        this.Draw = (ctx)=>{
            var t = this.gameObject.transform,
                rect = [t.position.x, t.position.y, t.size.x, t.size.y];
            ctx.fillStyle = this.gameObject.color;
            ctx.fillRect(...rect);
        };
    }

}

