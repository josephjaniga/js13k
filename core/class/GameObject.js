import Transform from "./Transform.js";
import Vector2 from "./Vector2.js";

class GameObject {
    constructor(){
        console.log("GameObject | constructor");
        this.name = "GameObject";
        this.components = [
            new Transform({
                position: new Vector2({x:100, y:100}),
                size: new Vector2({x:100, y:100})
            })
        ];
        this.Update = ()=>{
            var t = this.GetComponent("Transform");
            t.position.x++;
        };
        this.Draw = (ctx)=>{
            var t = this.GetComponent("Transform"),
                rect = [t.position.x, t.position.y, t.size.x, t.size.y];
            //let r = this.GetComponent("Renderer");
            //if ( r ){ /* if we have a renderer */ }
            ctx.rect(...rect);
            ctx.stroke();
        };
        this.GetComponent = (name)=>{
            let needle = null;
            this.components.forEach(function(component){
                if ( component.constructor.name === name ){
                    //console.log(component.constructor.name);
                    needle = component;
                }
            });
            return needle;
        };
    }
}

module.exports = GameObject;