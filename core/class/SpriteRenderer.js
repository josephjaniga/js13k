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
        this.sprite.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAMAAADKd1bWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQURCQTYzNTIyMEM3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxQTRFRjc0RTQzQUMxMUU1QjgzMzkyMERFQzhDOTlBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxQTRFRjc0RDQzQUMxMUU1QjgzMzkyMERFQzhDOTlBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzgwQTE4Q0JEMzIwNjgxMTgyMkE4MEI1QTRGQzY5RDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5xOwv5AAAAGFBMVEXA3YstNhlSdCSTuWNScyMuNxn///////9VqbdPAAAACHRSTlP/////////AN6DvVkAAAPoSURBVHja5JmLcqUgDIaDEHj/N97cgKCgx84pO7PrtOciasmXPwmhUP75I8qR5LDv8pnPlgL/gf1kq9hrb8bCCGwFEItS321/NVheQ/vCP3EPAEQz/6DDEMi5TQAIewjq+yAYQggmgi0AEACLmV8R6LktAAJZrwdZTADc17QFANnK1jb7iUA9twGAuFus5ZfASgimARqDXQAQnf0MALcCsMhXEtHSQGA1bAsBYAAgPwfhgG0hkBwBkYGEgJ5lCWzJ4ir4DJBzZgjbAoABBJN+kAyon+vbKwWcsvhrDWBGfskGYI/9WgXU80nNZgXUaBgBPDh4zOIvBYLYADCLbfaXmFz0G4DUy4BLgo8OHrL4a4EQAMgSAgwAd9lfUksCIgEBEFNNCdEDeHDwmMXfC4QJoCb/jfbXJOAOWRcBmQ5jGXxwcBmy+HuBaBQYhY32F2gr/5b5qCki95M6yH741MFkgMvi7wVSAYj9OwGQzFPtB9wSsAYBTB08naHP4vhaIF0Ce+0nAlxzuReEugbWBpneIQSYOng6SZ/Fp8N3AvmLAFjqNQi0CsZKIIwAnINZqtda7rM43goE78zfDiDWDjimEkrtiwlIqQB4TqODZysVtJG5FeP91+HYj605sPj+H/rugGAomgO0Ng0OhjkBgGY/3gnkcjdydfwtAPRn82ps7P91Q8giIPIWWQcwOLjMJVCP6UrW33/hh4cj8HUAzGC9FLbcJ3mfvhaNflkZRa8AdA6eAkDo9k/pOIHMABw88AsAcnuZqILst7W/bAZxDPgNESuD6JTNk0RNC7OORny8CI+e5M4A1P6aC74PIF8BGJNYtPmRZXC0SuAkAdfpywznKwGBA4sA6P6X+y/2G4DjVwDkCQD5VY8nYyC7QDMA6t2ClqsRbboXM6MQwHIDQO4fH2ABUD/iF6U/UX8LgVwVIO6XTqhukusOgd8QUZdhs38+TQYQ53XcCYguOT2gVY3lk+9y/EcA2mWmhpy7AlLdEpQkCCn0wgCTYl337+ZREFcEhlq/esAPBNAB5PPh5d6+5tI/dQC1/yfLIdn+yAUAx2cUE2mWqyBYsrFaj7cP+BGAPK/1JwAlnwZyLYM97VM/QItBa4WC9MXXWsWOPNYL1jWBJm9W0OIBNwAmrnUE9NdGK5JTxjvdnmsfIP1/0P6f1wHWEqXz/wUkdR3zEji56mZg/YA1gDbxnM95bTRMAJxqfz7d39/qhpBui1Kadp1RWwh51z4pFO+i+7Pb8UkAl7xnJ934WSjD+DjW/ieoRdBtD3BGgMlC996C1SUftno3FywioC/2Vnzu77alP+cCSMP2AO/d/RFgAI4xu7IsDOOlAAAAAElFTkSuQmCC";
        this.frameSize = new Vector2(32, 32);
        this.totalFrames = 4; // 5 with 0 based index
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 12;

        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = this.frameSize.x*2;
        this.patternCanvas.height = this.frameSize.y*2;
        this.patternContext = this.patternCanvas.getContext('2d');

        this.patternContext.webkitImageSmoothingEnabled = false;
        this.patternContext.mozImageSmoothingEnabled = false;
        this.patternContext.imageSmoothingEnabled = false;

        this.patternContext.drawImage(this.sprite, this.frameSize.x*this.tiledIndex, 0, this.frameSize.x, this.frameSize.y, 0, 0, this.frameSize.x*2, this.frameSize.y*2);

        this.alpha = 1;

        this.playOnce = options.playOnce;

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
                if ( this.playOnce && this.frameIndex === this.totalFrames - 1 && this.tickCount === this.ticksPerFrame  ){
                    this.gameObject.Destroy();
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
                ctx.save();
                ctx.translate(t.position.x, t.position.y);
                var finalPattern = ctx.createPattern(this.patternCanvas, "repeat");
                ctx.fillStyle = finalPattern;
                ctx.fillRect(0, 0, t.size.x, t.size.y);
                ctx.restore();
                //ctx.translate(-t.position.x, -t.position.y);
            }
            ctx.globalAlpha = 1;
        };

    }
}