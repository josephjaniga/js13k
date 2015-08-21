import Transform from "./Transform.js";
import Vector2 from "./Vector2.js";

class GameObject {
    constructor(){
        console.log("GameObject | constructor");
        this.name = "GameObject";
        this.transform = new Transform({
            position: new Vector2(10,10),
            size: new Vector2(10,10)
        });
        this.components = [];
        this.Update = ()=>{
            var t = this.transform;
            t.position.x++;
        };
        this.Draw = (ctx)=>{
            var t = this.transform,
                rect = [t.position.x, t.position.y, t.size.x, t.size.y];
            ctx.fillRect(...rect);
        };
        this.GetComponent = (name)=>{
            let needle = null;
            this.components.forEach(function(component){
                if ( component.constructor.name === name ){
                    needle = component;
                }
            });
            return needle;
        };
    }
}

module.exports = GameObject;

