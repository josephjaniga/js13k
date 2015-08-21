import Transform from "./Transform.js";
import Vector2 from "./Vector2.js";

export default class GameObject {
    constructor(){

        console.log("GameObject | constructor");

        this.transform = new Transform({
            position: new Vector2(10,10),
            size: new Vector2(10,10)
        });

        this.collider = true;

        this.color = "#000000";

        this.components = [];

        this.Update = ()=>{
            this.components.forEach(function(component){
                component.Update();
            });
        };

        this.Draw = (ctx)=>{
            var t = this.transform,
                rect = [t.position.x, t.position.y, t.size.x, t.size.y];
            ctx.fillStyle = this.color;
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

        this.AddComponent = (component)=>{
            this.components.push(component);
            component.gameObject = this;
        };

    }
}