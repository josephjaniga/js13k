import Transform from "./Transform.js";
import Vector2 from "./Vector2.js";
import Game from "./Game.js";

export default class GameObject {
    constructor(){

        console.log("GameObject | constructor");

        this.name = "GO";

        this.transform = new Transform({
            position: new Vector2(10,10),
            size: new Vector2(10,10)
        });

        this.collider = true;

        this.color = "rgba(0,0,0,1)";

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
                //console.log(component.constructor.name);
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

        this.Destroy = ()=>{
            var i = Game.instance.objs.indexOf(this);
            if ( i > -1 ){
                Game.instance.objs.splice(i,1);
            }
        };

        this.isOnScreen = ()=>{
            var t = this.transform,
                status = false;
            if ( t.position.x + t.size.x > 0 && t.position.x < Game.instance.resolution.x &&
                t.position.y + t.size.y > 0 && t.position.y < Game.instance.resolution.y ){
                status = true;
            }
            return status;
        };

    }
}