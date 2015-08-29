import Collider from "./Collider.js";
import Component from "./Component.js";
import DestroyOnSpace from "./DestroyOnSpace.js";
import GameObject from "./GameObject.js";
import ImageRenderer from "./ImageRenderer.js";
import Input from "./Input.js";
import Jump from "./Jump.js";
import Particle from "./Particle.js";
import Parallax from "./Parallax.js";
import PhysicsBody from "./PhysicsBody.js";
import Player from "./Player.js";
import Rect from "./Rect.js";
import RectRenderer from "./RectRenderer.js";
import ScoreDisplay from "./ScoreDisplay.js";
import ScrollingTerrain from "./ScrollingTerrain.js";
import SpriteRenderer from "./SpriteRenderer.js";
import TextRenderer from "./TextRenderer.js";
import Transform from "./Transform.js";
import Vector2 from "./Vector2.js";

let singleton = Symbol();
let singletonEnforcer = Symbol();

export default class Game {
    constructor(options) {
        //console.log("Game | constructor");

        // camerashake?
        this.shakeFrames = 0;

        this.hasStarted = false;
        this.paused = false;

        this.startTime = new Date();
        this.currentScore = 0;

        this.color = {
            black: "rgba(0,0,0,0)",
            dark: "rgba(0,0,0,0.5)",
            light: "rgba(255,255,255,0.5)",
            white: "rgba(255,255,255,1)",
            transparent: "rgba(255,255,255,0)"
        };

        var desiredPlatforms = 2;
        this.platformCount = 0;

        this.objs = [];

        this.speed = 2;

        this.logo = new Image();
        this.logo.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAA3BAMAAADQ9pRxAAAAD1BMVEUAAAAtNhlScyPA3YuTuWMW5n24AAAAAXRSTlMAQObYZgAABClJREFUSMfclIGRayEIRXc7WNAGMGmAYANG+q/p34tvkuxsB5+ZyFPhcFEnX/+dyct+vs74Yd/Cn1yRP58bsNf3H/tEvPE1uRZehX+pMA7vhCsX7gPMnSvg+40udosIk6BzCRgSuIgd0cPuh/vXiiGyN9N60LyAzCbSAyO/wSD3t9jmHC9GTIT3XcnaMhMojTKV3LdbaK821Lw7ycxmBDBshQJygpGwLdqX9H3kgKpGJBheDA2pUpPiaBdjxqkMs+aoOKyDMROsw+hgBPfhMGdV1wYSGVcrS2T6GMOEDB2jIyRliIQKDYxNPwqlWJDRFpRfjLan2GGIbVfBRwPDdFjbqkST4cVwzLmOT97Wxeh7KZQjxNR4mCwPxgIzqrralp5kGMXByFA3ZVodhy9VI4MH6dacRwWpiF1k+BCIyCAsEQPf3CFJ3oxYohILv7jVG4OqhTyWDQxEPyz3ESR3LLFID9HeD6NTPxvSgHmrEeGdDHZYC9Z3XAzWmYJGHWnFUDIGGX3PJGNmouRNEnMvMbnRT7IuJN93BnjDMNy3fDCeS00SwSgBM+EsJwTJYUAIGAEGogJ+dG7U38WbgbQOhvenEYOQmNSbS9IVUqMYsnKBIYMlL4ZcjHOpK+gBsY1yGQ49KhsMyYsBO2I3axTD98UQUTKUHjbzxi0DuTOENwMvyjc24dnLi8GHO+sZKnXQmraZhkoQAEjdCUjwgA1tnOdTmp9erLHp+RDMwWiEeV+3SS2HaGRACC+dRgZ6W9IuHaOHe5/1MB6xegS22jMm8NSqd7E6Q5zqPoxBRlt1T2QItpCd3oO2aja1M7seJwT5YUiS0dABlNth+GEgMhyMnJuMSeKDSouhOdskSxkIMIIylkiQwTdWDE0YGDkzVZIe6XIY41/tZYCjQAxC0XgDIXsB2Kvs/c+0fL6FEmsmmcSvjg6lDzqCHaMKwiS5mGD85s8dGlkW44Fy0BiQJfwmWraLRo2AAWgEdvbhD+JFRcLSDBdIPWSsDRXPI/IouLrFQdkKUSO4tn+5N3CyhQGKUaJgobvTkIsBg34KNmJw+2MmHEvPPEW587wZhkMqT3Tbo0xaJOKNnyi+Y4aYmZvRE+xPW7YyD7ikGI6MXWawQ3LUc7IZjKhp3xN5jJkY5Jx2bRQ3cI5TNL5cxt3GilHBeOzz5+GGplI+CsFL06mWUDoj5CCC5FpcwllM/a6sEhEIRee0sSwupTYYbDGLlwMgRWiWz87L4n9j4KVg1NhqCgaNh4fU0o8+Nq6HMxftcSj8zclYk9LDi9HfC5tHNZ/b9ciY1YbFcGnGbBeLMRWbeTA+KUaDTcZeOfrqdczaGdqXFQbka95xqrZJUObqOhlVCTmeuRI3q53rJQPLbYa4F8MXI0Xo4Z/BxxpTH7ZT08kNETF1G3CtmvFl/QOLpEU6gnTAeQAAAABJRU5ErkJggg==";

        // METHODS
        this.Update = ()=> {

            if ( !this.hasStarted && Input.instance.isSpaceDown ){
                this.StartGame();
                this.hasStarted = true;
            }
            if ( !this.paused ){
                this.objs.forEach((el)=> {
                    el.Update();
                });
            }

        };
        this.Draw = ()=> {

            if ( this.shakeFrames > 0){
                this.CTX.save();
                this.CTX.translate(Math.random()*3-1.5, Math.random()*3-1.5);
            }

            this.CTX.mozImageSmoothingEnabled = false;
            this.CTX.webkitImageSmoothingEnabled = false;
            this.CTX.msImageSmoothingEnabled = false;
            this.CTX.imageSmoothingEnabled = false;

            this.CTX.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.objs.forEach((el)=> {
                el.Draw(this.CTX);
            });

            if ( this.shakeFrames > 0){
                this.CTX.restore();
                this.shakeFrames--;
            }

        };
        this.Loop = ()=> {
            this.Update();
            this.Draw();
            requestAnimationFrame(this.Loop);
        };
        this.ResizeCanvas = (x, y)=> {
            this.canvas.width = x;
            this.canvas.height = y;
        };
        this.reset = (options)=>{
            this.hasStarted = false;
            if ( options === "NonPlayer" ){
                this.objs.forEach((obj)=>{
                    if ( obj.name !== "Player" && obj.name !== "Clock"  ){
                        obj.Destroy();
                    }
                });
            } else {
                this.objs.forEach((obj)=>{
                    if ( obj.name !== "Clock" ){
                        obj.Destroy();
                    }
                });
            }
        };
        this.init = () => {
            this.reset();
            // PROPERTIES
            this.scale = 3;
            this.resolution = new Vector2(320, 188);
            this.CTX = this.canvas.getContext('2d');
            this.objs = [];
            this.ResizeCanvas(this.resolution.x * this.scale, this.resolution.y * this.scale);
            this.CTX.scale(this.scale, this.scale);

            // setup
            this.SpawnParallax();
            this.SpawnStartMenu();

            var clock = new GameObject();
            clock.AddComponent(new ScoreDisplay());
            clock.name = "Clock";
            this.objs.push(clock);

        };
        this.StartGame = ()=>{
            Game.instance.SetScrollingTerrainSpeed(2.5);
            this.SpawnPlayer(new Vector2(250, 130), new Vector2(18, 18));
            this.SpawnPlatform(new Vector2(0,150), new Vector2(500,200));
            this.SpawnCatch();
            this.startTime = new Date();
            this.currentScore = 0;
        };
        this.SetCanvas = (options)=>{
            this.canvas = options.canvas;
        };
        this.SpawnPlatform = (position, size)=> {
            // setup the platform

            var platform = new GameObject();
            platform.transform = new Transform({
                position: position,
                size: size
            });
            platform.AddComponent(new Collider());
            platform.AddComponent(new ScrollingTerrain({speed:this.speed}));
//            platform.AddComponent(new RectRenderer());
//            platform.color = Game.instance.color.light;
            platform.AddComponent(new SpriteRenderer({
                animated: false,
                tiled: true,
                tiledIndex: 7
            }));
            platform.name = "Platform";

            var deadArea = new GameObject();
            deadArea.transform = new Transform({
                position: new Vector2(position.x + size.x, position.y + 5),
                size: new Vector2(2, size.y - 10)
            });
            deadArea.AddComponent(new Collider());
            deadArea.AddComponent(new ScrollingTerrain({speed:this.speed}));
            deadArea.AddComponent(new RectRenderer());
            deadArea.color = "rgba(255,0,0,0)";
            deadArea.name = "CollisionDeath";

            //this.RecalculatePlatforms();
            this.objs.push(platform);
            this.objs.push(deadArea);
            return platform;
        };
        this.SpawnPlayer = (position, size)=> {
            // setup the player
            var player = new GameObject();
            player.transform = new Transform({
                position: position,
                size: size
            });
            player.AddComponent(new Collider());
            player.AddComponent(new Player());
            player.AddComponent(new PhysicsBody({kinematic: false}));
            player.AddComponent(new Jump({input: Input.instance}));
            player.AddComponent(new SpriteRenderer({
                animated: true,
                animations: [
                    {name: "Walk", frames: [0, 1, 2, 1]},
                    {name: "Jump", frames: [3]}
                ]
            }));
            player.color = this.color.transparent;
            player.name = "Player";

            // add the player to the game
            this.objs.push(player);
        };
        this.SpawnCatch = ()=>{
            // setup the platform
            var catcher = new GameObject();
            catcher.transform = new Transform({
                position: new Vector2(0, 220),
                size: new Vector2(320, 10)
            });
            catcher.AddComponent(new Collider());
            catcher.AddComponent(new RectRenderer());
            catcher.color = "rgba(255,0,0,1)";
            catcher.name = "CollisionDeath";

            //this.RecalculatePlatforms();
            this.objs.push(catcher);
        };
        this.SetScrollingTerrainSpeed = (speed)=>{
            this.speed = speed;
            this.objs.forEach((obj)=> {
                var st = obj.GetComponent("ScrollingTerrain");
                if ( st && st.speed ){
                    st.speed = speed;
                }
            });
        };
        this.SpawnStartMenu = ()=>{
            // setup the title text
            var title = new GameObject(),
                size = new Vector2(166,59);
            title.transform = new Transform({
                size: size,
                position: new Vector2(
                        this.resolution.x/2 - size.x/2,
                        this.resolution.y/2 - size.y/2 - 50
                    )
            });
            title.AddComponent(new ImageRenderer({}));
            title.name = "Logo";
            title.AddComponent(new DestroyOnSpace());
            this.objs.push(title);
        };
        this.SpawnParallax = ()=>{
            var stars = new GameObject();
            stars.transform = new Transform({
                position: Vector2.zero(),
                size: this.resolution
            });
            stars.AddComponent(new Parallax({
                sprite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAiAgMAAABEnu15AAAADFBMVEUAAABSdCSTuWPA3YsKQP1cAAAAAXRSTlMAQObYZgAAAEtJREFUKM9jGCDAiMRWgFBMqCpEMPQ0QJXjkhAg2zUOFCt2oDxIeHBJHMAl8YBEGxoocJ0CphCRoc5CesJA2Ep5LFIOmB0IxwgCAABPXAXsrhitAAAAAABJRU5ErkJggg==",
                size: new Vector2(95, 34),
                tickFrames:120,
                repeat: true
            }));
            stars.name = "Stars";
            this.objs.push(stars);

            var moon = new GameObject();
            moon.transform = new Transform({
                position: new Vector2(20, 15),
                size:  new Vector2(42, 40),
            });
            moon.AddComponent(new Parallax({
                sprite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUBAMAAACQZWsAAAAAD1BMVEUAAACTuWPA3YtSdCQtNhlaMa0FAAAAAXRSTlMAQObYZgAAAH9JREFUCNddztENAkEIBFA9KxjmGmBuC5DFAkzW/msSTv1xEsILfMDlPw78CBfzOw0AfJ4umXw0r4y0Kax2BozTWQYzmKZoo72c9zYC82HlDSCMx4yysA/HK9hWHOYj+7I8KRk/9pQOZ1uaVdHe1HGcz82mr1ItTI690LlFovsbJFMTBF1I6sMAAAAASUVORK5CYII=",
                size: new Vector2(21, 20),
                tickFrames:45,
                repeat: false,
                scale: 2
            }));
            moon.name = "Moon";
            this.objs.push(moon);

            var rectBG = new GameObject();
            rectBG.transform = new Transform({
                position: new Vector2(0, 94),
                size: this.resolution
            });
            rectBG.color = "#2e3719";
            rectBG.AddComponent(new RectRenderer());
            this.objs.push(rectBG);


            var backMountain = new GameObject();
                backMountain.transform = new Transform({
                    position: new Vector2(0, 44),
                    size: new Vector2(this.resolution.x, 81)
                });
                backMountain.AddComponent(new Parallax({
                    sprite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAbAgMAAACfC0DrAAAACVBMVEUAAAAuNxlScyNJmFCcAAAAAXRSTlMAQObYZgAAAQBJREFUKM99zkFOxDAMBVAGCRbsB4krcIo5wiz4lpy9KyWnQNzBEcmKBY5wTsmUtrTqIL53T9a3b/7Nw9cf+Nb7x/Umd+9X+hR7ra97FYvUPnd48AGQuFu+t3jRQU9bfM4elZT6+1Zrs2qZ4X7eaCKHd2MtuuKtNleKLOhlc0vJlALE4esbjwo3qt4C4vrz0SAKZGYAy72DKUsWEjIFXpaCJIWbhEZRAJmVI9GQdBwAw2kqkKLSIblaFHCYKu6QNHQJqSMAyJg1FE5BagEphKYvjojIyXxsjRgzNgOCqKExY87YjEu4ojBs4UmDGSeHLHr+USIVUhCWnC46XxH85vwNOQCNbZlGlfEAAAAASUVORK5CYII=",
                    size: new Vector2(84, 27),
                    tickFrames: 22,
                    scale: 3,
                    repeat: true
                }));

                backMountain.name = "BackMountain";
                this.objs.push(backMountain);

            var frontMountain = new GameObject();
                frontMountain.transform = new Transform({
                    position: new Vector2(0, 100),
                    size: new Vector2(this.resolution.x, 57)
                });
                frontMountain.AddComponent(new Parallax({
                    sprite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAATAgMAAAB6s2L8AAAADFBMVEUAAAAuNxmTuWNSdCS1ShlGAAAAAXRSTlMAQObYZgAAALhJREFUGNNjIAcwBmARXLZsKYbYwmUrZ6Gr1YoMmxY1AUWIY9m6WbOWRi1bgSzIuWzlq1krV61MQxZctTvtd/2qV8uyHBCOWVn+7+Xcv+GvS5H0S6Z+rUy/ez00/easpQIwhavSr4ZNzQ1dGhqfOS0EKshaGXt31dTQ0LCroWFrp0EF7e9WXg0FgqzQ0PitYQsggn+BQktDoSBsCViMPxQJTA2dCXZVeCgqCABZgyaWGgp0TygGCAAAjbBYWvu9u1wAAAAASUVORK5CYII=",
                    size: new Vector2(80, 19),
                    tickFrames: 5,
                    scale: 3,
                    translation: 55,
                    repeat:true
                }));

                frontMountain.name = "FrontMountain";
                this.objs.push(frontMountain);

            var shadeBG = new GameObject();
            shadeBG.transform = new Transform({
                    position: new Vector2(0, 0),
                    size: this.resolution
                });
            shadeBG.color = "rgba(0,0,0,0.45)";
            shadeBG.AddComponent(new RectRenderer());
            this.objs.push(shadeBG);
        };
    }
    static get instance() {
        if (!this[singleton]) {
            this[singleton] = new Game(singletonEnforcer);
        }
        return this[singleton];
    }
}

/**
 *  using ARROW FUNCTIONS here in ES6 for lexical scope inheritance
 *  they assume the scope (this) from their parent scoping
 */