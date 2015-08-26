import Collider from "./Collider.js";
import Component from "./Component.js";
import DestroyOnSpace from "./DestroyOnSpace.js";
import GameObject from "./GameObject.js";
import Input from "./Input.js";
import Jump from "./Jump.js";
import Particle from "./Particle.js";
import Parallax from "./Parallax.js";
import PhysicsBody from "./PhysicsBody.js";
import Player from "./Player.js";
import Rect from "./Rect.js";
import RectRenderer from "./RectRenderer.js";
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

        this.startTime = new Date();

        this.hasStarted = false;
        this.paused = false;

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

            this.CTX.webkitImageSmoothingEnabled = false;
            this.CTX.mozImageSmoothingEnabled = false;
            this.CTX.imageSmoothingEnabled = false;

            this.CTX.clearRect(0, 0, this.canvas.width, this.canvas.height);
            this.objs.forEach((el)=> {
                el.Draw(this.CTX);
            });
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
                    if ( obj.name !== "Player" ){
                        obj.Destroy();
                    }
                });
            } else {
                this.objs.forEach((obj)=>{
                    obj.Destroy();
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
        };
        this.StartGame = ()=>{
            Game.instance.SetScrollingTerrainSpeed(2.5);
            this.SpawnPlayer(new Vector2(250, 130), new Vector2(18, 18));
            this.SpawnPlatform(new Vector2(0,150), new Vector2(500,200));
            this.SpawnCatch();
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
            var title = new GameObject();
                title.transform = new Transform({
                    position: new Vector2(
                            this.resolution.x/2,
                            this.resolution.y/2-50
                        ),
                    size: Vector2.zero()
                });
                title.AddComponent(new TextRenderer(
                    {
                        text: 'Reversed'.split("").reverse().join(""),
                        font: '30px sans-serif',
                        fontWeight: 'bolder',
                        textAlign: 'center',
                        fillStyle: 'white'
                    }
                ));
                title.AddComponent(new DestroyOnSpace());
                this.objs.push(title);

            // setup the title text
            var subtitle = new GameObject();
                subtitle.transform = new Transform({
                    position: new Vector2(
                            this.resolution.x/2,
                            this.resolution.y/2-35
                    ),
                    size: Vector2.zero()
                });
                subtitle.AddComponent(new TextRenderer(
                    {
                        text: 'Press Space to Start'.split("").reverse().join(""),
                        font: '8px sans-serif',
                        fontWeight: 'bolder',
                        textAlign: 'center',
                        fillStyle: 'white'
                    }
                ));
                subtitle.AddComponent(new DestroyOnSpace());
                this.objs.push(subtitle);
        };
        this.SpawnParallax = ()=> {

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