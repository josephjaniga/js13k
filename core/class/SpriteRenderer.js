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

        this.sprite.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAAgBAMAAACRPbx3AAAAFVBMVEUAAABScyP///8uNxmTuWMtNhnA3YtYE71vAAAAAXRSTlMAQObYZgAABHxJREFUWMPNl0+P0zAQxUOycGa0Ts/BSHsueJUzVt2eiVRzpgTl+38E3njqjGkLFAsQs3+Siavk1/c89qT55xFCICIcPVEIzX8XD96Q8Z6Yj0z40Pyd+FD93QMxGFGPA1jTbdrmOlprbVMX3RZ8sIfPagBNiJDvSBQnOgPeQLF8eagCHGeRIeCsArDfxxgnczQRQUZghis4OakScFm2PvmEs9+X0PfA62MfwwQJ/QaXgNeWhEgy8VAFOD+TAI51gD0RKM2Ew9GcMWwJ2KzAts7ir7ShE81jjcUeuk3UUzQREh4pAdmhvXLY2gHHmiqFs+8X+0QzHK4AjLGHxz5CyQlzMQEOttRqENOB/SNAqdKfSPh+dBaAc9UyA/UIbCZSzIBQSwlboWMpV8CHh+9XTPAp4dV45xhwcTUCNj5NQAbEIU6bs4IweSimICOmQ36+J1MSSpXm7GrcjU/2aXGuqQhD7C0B0PdE0wGXwAbFysIYmM0WgABSAuSkgOW4Sji7ZXbbqq2ujxIUDofFbxJga1tdatIZiFsBVKACUKr0AriU0LmxTsDmFX9XLhGiF31DCxMBJCm2AgIRP81aOv4SQKpUHb8BOFcCvjgYIkrzj9hjJrKIla9lkwUOQmaA04Y2hWVSpcjLcaTqMQJ5TWyWr/7A210IIR4iiEQ2BeQkSbgCdk9f7GmDR5aAUgQ6/qcAm+RxP+0BCE4B1BVFqoX9Zacz4Nv5/RsArqZKlQqCjm9LvnpAD0Dz+iPx8QMDpj0DUOUUxO8K3TkGeJqdbq0dktmtEsq4Ij0HjjrAz9IHfiUOTy/42hlJAaVk8qVxcV++2IUBVcJlcQWgjOfhjn4L0NoyO/eBJvBN0lacV+QS0NqUD2eY7egcgDoFZLqiV5HxvPd2ZH4HkCe7RuA+sCfjH/ZxiuTzZ2z2GMZenIzp2XMCVIuVB6mMjysgOXcvoAihWvoQKfZ+46VhpWJxtrrMILRVAJfj2DVaFcw8FoanosiA7+gR8/B+wGFYtUQfYkA1HY1PS+GUAdXj854ihVM+P+w6fSRwl8LhJOCuc1nAR1DeD2hXQPx4w1txP10CWm5p9G1EmkHVq0Nh7t496m2fn0VABQw7R9vsMACR3AHHfzkYAQpOPeLoDfV9LKrEFh5fttOwFoCOaFsA7jjRdQ8fgLVneZnyNuBl864NvGXrWMEpoo6Nf9VTH0kBVbJBX00UAQI+E6mEkDQZWq58voDq9LO3AO05BrHP8oH/CSD3gfSJYPUKaNO0EyS1WuMd+AKVHr9jGsWBwcE/3gUoQCoC8lZfNYLZM+DBvyRIaIJajBjyLa7eleFeFx5zFWspaIJZQPD2GlAFy2IAhVPQ2dwXcy4eEoXDHn2gfwCnJ7PeoSRaWXWS4Xkrnl7K4bgkOsVTwMKgZlBazmW3QgwyLoJ64tfiaTkRUIm8It30Q/1U99RipVE5bwOKYiuu5FmHNuU5M4Tynbw5eSLaUHNXaHNSXirU1Kyo/JKwNGXgHJS3h3mbNIfXL5YlmK/hl2jfAI6jDMvS6W0wAAAAAElFTkSuQmCC";
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