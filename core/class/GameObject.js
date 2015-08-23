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
        this.components = [];

        this.Update = ()=>{
            this.components.forEach(function(component){
                component.Update();
            });
        };

        this.Draw = (ctx)=>{
            this.components.forEach(function(component){
                component.Draw(ctx);
            });
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
            // remove it from this gameobjs
            var i = Game.instance.objs.indexOf(this);
            if ( i > -1 ){
                Game.instance.objs.splice(i,1);
            }
            //Game.instance.RecalculatePlatforms();
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