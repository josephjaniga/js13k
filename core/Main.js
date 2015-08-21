import Game from "./class/Game.js";
import GameObject from "./class/GameObject.js";
import Input from "./class/Input.js";
import Jump from "./class/Jump.js";

// setup the game and input
var canvas = document.getElementById("view"),
    _input = new Input(),
    options = {"canvas": canvas},
    _game = new Game(options);

_input.Attach();
_game.Loop();

// setup the player
var player = new GameObject()
player.AddComponent(new Jump({input:_input}));

// add the player to the game
_game.objs.push(player);