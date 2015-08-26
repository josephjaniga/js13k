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

        this.sprite.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAgCAMAAABUzVF2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQURCQTYzNTIyMEM3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpBRTJFOUQ1NDQzQkQxMUU1QjgzMzkyMERFQzhDOTlBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpBRTJFOUQ1MzQzQkQxMUU1QjgzMzkyMERFQzhDOTlBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDIwMzBBNDVFNDIwNjgxMTgyMkE4MEI1QTRGQzY5RDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4MNaQLAAAAGFBMVEXA3YstNhlSdCSTuWNScyMuNxn///////9VqbdPAAAACHRSTlP/////////AN6DvVkAAAT5SURBVHja5JqBcuMqDEUhgPj/P14kEEggSNxNeTNvPZ0mNrFrTq6QdF2X//dboC3S1vbpPR79+6u7f4BfYUW82ktj+SWCVwGG/J1v/Sk/Bka/fd/Bn3E38OEFoW53AabU8L3K1m6ajl0CWL4276v2PGH03jcRSjCf8esY7wFMzqXc8DHCeuwKQF/o1a0QKwDFbgwSDHwAbj7i7vBDWp1fIcjHLgAkuREt/OVRib5psIw5FcF7Ea782t4tgCkJfggwXQXYVr5KMrRl0KMa9RK4JWgO4+61EHYI0NHPq+B010I4CoIkQwrhejTUwqYCgkMUSwGKHPIU4I+zaA1YcK78aYR4LYARoG+h6ymD1Pf80hVI7IggHATYWTaEzwBOWfSxBhMk/AUN4B1+NQtX5cWKDRXI0awANmUZCEGiE4cmgG8EprPoQ4Gm1AEiy2v8cohi9WsA40jDTisQbBEOAY6xBeBbgaks+ligBaADCmEEmG7xy7EvgiRBAhgiL4nBCQEOQkay4ADu8bsCfCMwnUWfCxQJppp8L/LjRVBsVFe7UG5klDEsQBmskwAHNcg2wDOfrLLoc4HWKG4UL/LLrne+PXOU3FvkV9QZnQRIEK2eBGQAt1zNb92nAisARBZ9LlAGSPxuAixhGrkfFi0IBzEjAu5x15ZOCVAw1IW0LtOSCXBk0fRYoEOCd/kVglgzoRfjuIerBld5dd7rBsPMwlKAIBhOnYgUmDlJmUXN4ZNA/0OAGKocxLWKCUzQLwBh9WVGWhnBO0g7W2AYamstJ7NoOgo0nfBdBxjYwQox+8y+FloxDHB0F2B2vEKaiicDxDlpgVmVbmojNgV9/jocxnY1h2Tp/7nhDhLGHCdSomJZAaoWRAKstYUSmLMJOtf5pZNAl7MTVje/BRAOXp72/6oh3SJ4dMJ5Et8GoJJpFn5gna8UWLYlyJvZicnzF/7pJQh+HeDBRgnd/6O8W3ZzXf2osg5xuc6yDK6ltTwiFJiEwEyAyQ1+Jl0hUAvgCwd+ASBYjjyrpfBrvS+Z0RjD0lCNm3oFzMPSugZp6ScRmTjJVJdFyxEgjW3CeySJGWDlx2vh9wFCBusgdZjVPKA2LrRMLCS5+SbAthJGlQ36mYicPs3QrgQJrtsE8NAfnb/wawBfvwLQLN6gZuDAnXB1Es4AAZTjNz8HEU6gAljVlVPLlSm16S6YAhFM+QCQztcXaAHMb9MXQzdvTFCeLCmQ5EdOAj/krA6hmUZgE8SGwSrrwCqZ1PnZ00SAwa7jhIDLR6YL9Ky9vfLbxznvAPaPQQ+5rsDIj0QoibjoR2LO2SxkrExs3pIzijV+fmFHcdgRVLXe7gI/EKBavvW2Ciezs5xlCMfh/xVyLjZ/dQUIYqXTQQybr9Tp2VV8OP9tEG/ZtlovHS/wI4Bg13oTwKkh4yRS03ADWPrh0ow0KwGdwWCGMMDy58b3owfcWmugkF77hmtPsIcnKnhzgQNAQ1rilvvi3l07WNzh6XTgPpj8P1/9P6wDm6UQ5XNhIcFNWW7dmgZIS//LLmGMTx0G9hfYAxThs3SjCsyYIhglsMiZ6qlcfaxU0pxwFuZCWifaT1vFSVrvIiydVrfPTk/vBLjkDRaG8OymmapxPdb/J6YWMcIexBXx73vttVE7E9h95EOr5fCBTQSLZmDD93x2a31xLXRR2YPf+EenPwIMAAH/8kM0cqlcAAAAAElFTkSuQmCC";
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