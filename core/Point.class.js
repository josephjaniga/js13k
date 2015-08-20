class Point {
    constructor(options){
        this.x = null;
        this.y = null;
        if ( options.x != null ){
            this.x = options.x;
            this.y = options.y;
        }
    }
}