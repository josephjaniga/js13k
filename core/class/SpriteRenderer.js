import Component from "./Component.js";
import Vector2 from "./Vector2.js";
import Game from "./Game.js";

export default class SpriteRenderer extends Component{
    constructor(options){
        super(options);
        //console.log("SpriteRenderer | constructor");
        /**
         *  [
         *      { name:"Anim-1", frames:[0 ... N] },
         *      { more animations... },
         *      { name:"Anim-N", frames:[0 ... N] }
         *  ]
         * @type {animations|*|Array}
         */
        this.animations = options.animations || [];
        this.animated = options.animated || false;
        this.tiled = options.tiled || false;
        this.tiledIndex = options.tiledIndex || null;
        this.lastAnimation = 0;
        this.currentAnimation = 0;

        this.sprite = new Image();
        //this.sprite.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAgCAMAAACioYPHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQURCQTYzNTIyMEM3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QkU2MjJGMDQxN0YxMUU1OEJCRkIxQzk0RUE2MzZGRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QkU2MjJFRjQxN0YxMUU1OEJCRkIxQzk0RUE2MzZGRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6cMsTrAAAAElBMVEX4+Pj/5KwA7NwAeP8AAAD///9eGScjAAAABnRSTlP//////wCzv6S/AAACF0lEQVR42uyXyZLDIAxEATX//8tjJJkllsA4Ofgw1Eylyk7bT60FEvLLV/gH3FjIONYbAZlK8CqifrwCEETIFU8Q5do7AA+WQjMA6rX3AGJcB+2LADmdjBj5r/zToxRbXfYTvSQ0xBhCYMgzwVuAH132EM/WH0QJoVgXggLiOmYWBo1dtm/wVI9UAWNEqnwd4NKgBeCXeiTEwCmOVGivg3plEFaA3+qTNEgxsPFtAtYuewg40xdC+U7P1wCxLrGuy/YNWumlDIXPBWxjyLSo6zLsG7TQC6EsmIeFPsASi/uCjyK5a9BKfwOwBXh8hy6PqF32mQXDIPP9Cz0mgLz7DQG2Sdm/gfMYcXnKxaBkTpKZvlwkXRdA2a37AEE2YdTbFmCvt9RTfdlKKqEN2AeIbFvIy/G36QWQkDf05ZISGikWB1MN0AEEcXLg2ItmEOz4Jnq5pnVo1KDwa4BJz7fWqYjDh/l2PdQlPwG+vjHD7mIhlOrV462zGRCc9En5lOiSHI839GilB7LHDJ93MrRMAbPIeTsi+94JSHwU8R7g6DXBrR/snaQ2u1Nl8gJ7hLS9jjG9B3j69luOPMA2y0u/kEvoDbl+lp0DA5t6w8ARENIp4qKXZJddZxnmD5jo7wBKg7CLrk2+u+cNLUNs6peAdXxNf3Y4Q264sTj5PwSEsdFsGHBP/k2KcetH2/rIn5/ph2nS1p8AAwCbD1ijbePFdwAAAABJRU5ErkJggg==';
        this.sprite.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAMAAADKd1bWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQURCQTYzNTIyMEM3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QTlDNDg4ODQyREYxMUU1QjgzMzkyMERFQzhDOTlBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QTlDNDg4NzQyREYxMUU1QjgzMzkyMERFQzhDOTlBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkE4MEI1QTRGQzY5RDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4aaEb1AAAAFVBMVEX/5Kz4+PgA7NwAeP////8AAAD////k94KTAAAAB3RSTlP///////8AGksDRgAAApFJREFUeNrsmAmOwyAMRdk+9z/yBEzYDSFdRJVB7WgaQhQ/fy8g7MOH+AfwxQGLYzwRgLeazI8INiHxFQDQGjaaTwjo2jMAHLY6awsA4dpzAKAcB40HAfBy9wiE/7iv/skQuJ3FSfBSCCmlh7BLACwBqLL4KgEF6VwvZQCwSTkU1x1cZvFFgUBFAEJAbWN/BmDq4AmAyXooCOlDwAFQ27RD4rKDMQMwW68oAe5l/yKAmMVvRYgCPWMn+xMAzA3Isvi6QCgNkP3bAkhluuviLItjWSBEgMZO+yHRdbDzFQuACeKxQH4CQHLw8Y5tnSqyeGtEIZB+jOwLwHfnhYN7nYq3DGR/a0WxvlWQu6jD2A4A7VaKMq37BESY7gHI1zerXSsYCbwbgDnG6wByB8P2JeAHo4+0ngCUd7glgcD7Q8A4Bq8rQEUHMwCOvOC1z8gDSSDtZpfWhDyAt9sf/txQhcj9ExyswvlNb1fr3d/bysZNf5dfYoaPADAtgJbJqAoQAcpu4fiGafY0s5UFhbejp+j4p5kkAPojAEwHwCUCIt+vWoQ0Be64Aoo7yjgBaL/Vqx4QAiDlm/dJn7PTXIyBvBOMxQrsgQVUv0nKemGPoX5AOgterwKsHSWAeFsw3JglBWS9msuHbLVCt8hXtf4seIxQFgWQAJh65HKPP41N/y0CAGVCUgEXBHwlx5lJBw+4BcD0s3oFwJpqYiUJFrkaXgWsm3l1nBMhDXD3gG9nKtdmBOgbZk8kVcarli8DiOV7eOwH7kQ7mxgcK7EA4oubpoKVhnkAVe031Xp7uTUSTR6fKBSj6L62HDMBNC8fLmbztVCKebPQG4vOkcbYgumRmJ2tH7X0zMubfL7v3GXTafwJMACroLIQuZ9hvQAAAABJRU5ErkJggg==';
        this.frameSize = new Vector2(32, 32);
        this.totalFrames = 4; // 5 with 0 based index
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 12;

        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = 8;
        this.patternCanvas.height = 8;
        this.patternContext = this.patternCanvas.getContext('2d');
        this.patternContext.drawImage(this.sprite, this.frameSize.x*.5, this.frameSize.y*.5, 8, 8, 0, 0, 8, 8);

        this.alpha = 1;

        this.Update = ()=>{
            if ( this.animated ){
                this.animations.forEach((anim, index)=>{
                    if ( index === this.currentAnimation ){
                        this.totalFrames = anim.frames.length;
                        if ( this.lastAnimation != this.currentAnimation ){
                            this.frameIndex = 0;
                            this.tickCount = 0;
                            this.lastAnimation = this.currentAnimation;
                        }
                    }
                });
                this.tickCount++;
                if ( this.tickCount > this.ticksPerFrame ) {
                    this.tickCount = 0;
                    if (this.frameIndex < this.totalFrames - 1) {
                        this.frameIndex++;
                    } else {
                        this.frameIndex = 0;
                    }
                }
            }
        };

        this.Draw = (ctx)=>{
            ctx.globalAlpha = this.alpha;
            var t = this.gameObject.transform;
            if ( this.animated ){
                ctx.drawImage(
                    this.sprite,
                    this.animations[this.currentAnimation].frames[this.frameIndex] * this.frameSize.x,
                    0,
                    this.frameSize.x,
                    this.frameSize.y,
                    t.position.x,
                    t.position.y,
                    t.size.x,
                    t.size.y
                );
            }
            if ( this.tiled ){
                //ctx.save();
                ctx.translate(t.position.x, t.position.y);
                var finalPattern = ctx.createPattern(this.patternCanvas, "repeat");
                ctx.fillStyle = finalPattern;
                ctx.fillRect(0, 0, t.size.x, t.size.y);
                //ctx.restore();
                ctx.translate(-t.position.x, -t.position.y);
            }
            ctx.globalAlpha = 1;
        };

    }
}