import Collider from "./class/Collider.js";
import Component from "./class/Component.js";
import Game from "./class/Game.js";
import GameObject from "./class/GameObject.js";
import Input from "./class/Input.js";
import Jump from "./class/Jump.js";
import PhysicsBody from "./class/PhysicsBody.js";
import Rect from "./class/Rect.js";
import Transform from "./class/Transform.js";
import Vector2 from "./class/Vector2.js";

// setup the game and input
var canvas = document.getElementById("view"),
    _input = new Input(),
    options = {"canvas": canvas},
    _game = new Game(options);

_input.Attach();
_game.Loop();

// setup the player
var player = new GameObject()

// assign components to the player
player.AddComponent(new Jump({input:_input}));
player.AddComponent(new PhysicsBody());
player.AddComponent(new Collider());

// setup the floor
var floor = new GameObject()
floor.color = "#444444";
floor.transform = new Transform({
    position: new Vector2(0,150),
    size: new Vector2(320,20)
});
floor.AddComponent(
    new PhysicsBody({"kinematic":true})
);
floor.AddComponent(new Collider());

// add the player to the game
_game.objs.push(player);
_game.objs.push(floor);