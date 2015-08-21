import Component from './Component.js';

export default class Collider extends Component{

    constructor(options){
        super(options);
        console.log("Collider | constructor");
        this.AABB = (rect1, rect2)=>{
            let collision = false;
            if (rect1.x < rect2.x + rect2.width &&
                rect1.x + rect1.width > rect2.x &&
                rect1.y < rect2.y + rect2.height &&
                rect1.height + rect1.y > rect2.y) {
                // collision detected!
                collision = true;
            }
            return collision;
        };
    }

}