import Vector2 from './Vector2.js';

export default class Rect {
    constructor(options){
        if (    options.hasOwnProperty('size') &&
                options.hasOwnProperty('position') ){
            this.size = options.size;
            this.position = options.position;
        }
        if (    options.hasOwnProperty('x') &&
                options.hasOwnProperty('y') ) {
            this.position = new Vector2(x, y);
        }
        if (    options.hasOwnProperty('width') &&
                options.hasOwnProperty('height') ) {
            this.size = new Vector2(width, height);
        }
        this.init = (x,y,w,h)=>{
            this.position = new Vector2(x, y);
            this.size = new Vector2(w, h);
        };
    }
}