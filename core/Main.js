import Collider from "./class/Collider.js";
import Component from "./class/Component.js";
import Game from "./class/Game.js";
import GameObject from "./class/GameObject.js";
import Input from "./class/Input.js";
import Jump from "./class/Jump.js";
import PhysicsBody from "./class/PhysicsBody.js";
import PlatformSpawner from "./class/PlatformSpawner.js";
import Rect from "./class/Rect.js";
import ScrollingTerrain from "./class/ScrollingTerrain.js";
import Transform from "./class/Transform.js";
import Vector2 from "./class/Vector2.js";

var Color = {
    black : "rgba(0,0,0,0)",
    dark : "rgba(0,0,0,0.5)",
    light : "rgba(255,255,255,0.5)",
    white : "rgba(255,255,255,1)"
}

// setup the game and input
var canvas = document.getElementById("view"),
    _input = new Input(),
    options = {"canvas": canvas},
    _game = Game.instance;

_game.init(options);
_input.Attach();
_game.Loop();

// setup the player
var player = new GameObject();
player.transform = new Transform({
    position: new Vector2(280,90),
    size: new Vector2(10,10)
});
player.AddComponent(new Collider());
player.AddComponent(new PhysicsBody({kinematic:false}));
player.AddComponent(new Jump({input:_input}));
player.color = Color.black;
player.name = "Player";

// setup the floor
var floor = new GameObject();
floor.color = Color.light;
floor.transform = new Transform({
    position: new Vector2(0,180),
    size: new Vector2(320,20)
});
floor.AddComponent(new Collider());
floor.AddComponent(new ScrollingTerrain());
floor.name = "Floor";

// add a platform spawner
var platformSpawner = new GameObject();
platformSpawner.transform = new Transform({
    position: new Vector2(0,0),
    size: new Vector2(0,0)
});

// add the player to the game
_game.objs.push(player);
_game.objs.push(floor);