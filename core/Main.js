import Collider from "./class/Collider.js";
import Component from "./class/Component.js";
import Game from "./class/Game.js";
import GameObject from "./class/GameObject.js";
import Input from "./class/Input.js";
import Jump from "./class/Jump.js";
import PhysicsBody from "./class/PhysicsBody.js";
import Rect from "./class/Rect.js";
import RectRenderer from "./class/RectRenderer.js";
import ScrollingTerrain from "./class/ScrollingTerrain.js";
import SpriteRenderer from "./class/SpriteRenderer.js";
import Transform from "./class/Transform.js";
import Vector2 from "./class/Vector2.js";

// setup the game and input
var canvas = document.getElementById("view"),
    _input = Input.instance,
    options = {"canvas": canvas},
    _game = Game.instance;

_game.init(options);
_input.Attach();
_game.Loop();