class Vector2 {
    constructor(options){
        this.x = null;
        this.y = null;
        if ( options.x != null ){
            this.x = options.x;
        }
        if ( options.y != null ){
            this.y = options.y;
        }
    }
    static zero(){
        return new Vector2(
            {x:0,y:0}
        );
    }
}