import Transform from "./Transform.js";
import Vector2 from "./Vector2.js";

class GameObject {
    constructor(){
        console.log("GameObject | constructor");
        this.name = "GameObject";
        this.transform = new Transform(
            {
                position: Vector2.zero(),
                size: Vector2.zero()
            }
        );
    }
    Update(){
        console.log("")
    }
}

module.exports = GameObject;