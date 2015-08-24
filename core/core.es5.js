(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _classColliderJs = require("./class/Collider.js");

var _classColliderJs2 = _interopRequireDefault(_classColliderJs);

var _classComponentJs = require("./class/Component.js");

var _classComponentJs2 = _interopRequireDefault(_classComponentJs);

var _classGameJs = require("./class/Game.js");

var _classGameJs2 = _interopRequireDefault(_classGameJs);

var _classGameObjectJs = require("./class/GameObject.js");

var _classGameObjectJs2 = _interopRequireDefault(_classGameObjectJs);

var _classInputJs = require("./class/Input.js");

var _classInputJs2 = _interopRequireDefault(_classInputJs);

var _classJumpJs = require("./class/Jump.js");

var _classJumpJs2 = _interopRequireDefault(_classJumpJs);

var _classPhysicsBodyJs = require("./class/PhysicsBody.js");

var _classPhysicsBodyJs2 = _interopRequireDefault(_classPhysicsBodyJs);

var _classRectJs = require("./class/Rect.js");

var _classRectJs2 = _interopRequireDefault(_classRectJs);

var _classRectRendererJs = require("./class/RectRenderer.js");

var _classRectRendererJs2 = _interopRequireDefault(_classRectRendererJs);

var _classScrollingTerrainJs = require("./class/ScrollingTerrain.js");

var _classScrollingTerrainJs2 = _interopRequireDefault(_classScrollingTerrainJs);

var _classSpriteRendererJs = require("./class/SpriteRenderer.js");

var _classSpriteRendererJs2 = _interopRequireDefault(_classSpriteRendererJs);

var _classTransformJs = require("./class/Transform.js");

var _classTransformJs2 = _interopRequireDefault(_classTransformJs);

var _classVector2Js = require("./class/Vector2.js");

var _classVector2Js2 = _interopRequireDefault(_classVector2Js);

// setup the game and input
var canvas = document.getElementById("view"),
    _input = _classInputJs2["default"].instance,
    options = { "canvas": canvas },
    _game = _classGameJs2["default"].instance;

_game.SetCanvas(options);
_game.init();
_input.Attach();
_game.Loop();

},{"./class/Collider.js":2,"./class/Component.js":3,"./class/Game.js":4,"./class/GameObject.js":5,"./class/Input.js":6,"./class/Jump.js":7,"./class/PhysicsBody.js":8,"./class/Rect.js":10,"./class/RectRenderer.js":11,"./class/ScrollingTerrain.js":12,"./class/SpriteRenderer.js":13,"./class/Transform.js":14,"./class/Vector2.js":15}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentJs = require('./Component.js');

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var Collider = (function (_Component) {
    _inherits(Collider, _Component);

    function Collider(options) {
        _classCallCheck(this, Collider);

        _get(Object.getPrototypeOf(Collider.prototype), 'constructor', this).call(this, options);
        //console.log("Collider | constructor");
    }

    return Collider;
})(_ComponentJs2['default']);

exports['default'] = Collider;
module.exports = exports['default'];

},{"./Component.js":3}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function Component(options) {
    _classCallCheck(this, Component);

    //console.log("Component | constructor");
    this.Update = function () {};
    this.Draw = function () {};
};

exports["default"] = Component;
module.exports = exports["default"];

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _ColliderJs = require("./Collider.js");

var _ColliderJs2 = _interopRequireDefault(_ColliderJs);

var _ComponentJs = require("./Component.js");

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var _GameObjectJs = require("./GameObject.js");

var _GameObjectJs2 = _interopRequireDefault(_GameObjectJs);

var _InputJs = require("./Input.js");

var _InputJs2 = _interopRequireDefault(_InputJs);

var _JumpJs = require("./Jump.js");

var _JumpJs2 = _interopRequireDefault(_JumpJs);

var _PhysicsBodyJs = require("./PhysicsBody.js");

var _PhysicsBodyJs2 = _interopRequireDefault(_PhysicsBodyJs);

var _PlayerJs = require("./Player.js");

var _PlayerJs2 = _interopRequireDefault(_PlayerJs);

var _RectJs = require("./Rect.js");

var _RectJs2 = _interopRequireDefault(_RectJs);

var _RectRendererJs = require("./RectRenderer.js");

var _RectRendererJs2 = _interopRequireDefault(_RectRendererJs);

var _ScrollingTerrainJs = require("./ScrollingTerrain.js");

var _ScrollingTerrainJs2 = _interopRequireDefault(_ScrollingTerrainJs);

var _SpriteRendererJs = require("./SpriteRenderer.js");

var _SpriteRendererJs2 = _interopRequireDefault(_SpriteRendererJs);

var _TransformJs = require("./Transform.js");

var _TransformJs2 = _interopRequireDefault(_TransformJs);

var _Vector2Js = require("./Vector2.js");

var _Vector2Js2 = _interopRequireDefault(_Vector2Js);

var singleton = Symbol();
var singletonEnforcer = Symbol();

var Game = (function () {
    function Game(options) {
        var _this = this;

        _classCallCheck(this, Game);

        //console.log("Game | constructor");

        this.startTime = new Date();

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
        this.Update = function () {
            if (!_this.paused) {
                _this.objs.forEach(function (el) {
                    el.Update();
                });
            }
        };
        this.Draw = function () {
            _this.CTX.clearRect(0, 0, _this.canvas.width, _this.canvas.height);
            _this.objs.forEach(function (el) {
                el.Draw(_this.CTX);
            });
        };
        this.Loop = function () {
            _this.Update();
            _this.Draw();
            requestAnimationFrame(_this.Loop);
        };
        this.ResizeCanvas = function (x, y) {
            _this.canvas.width = x;
            _this.canvas.height = y;
        };
        this.reset = function (options) {
            if (options === "NonPlayer") {
                _this.objs.forEach(function (obj) {
                    if (obj.name !== "Player") {
                        obj.Destroy();
                    }
                });
            } else {
                _this.objs.forEach(function (obj) {
                    obj.Destroy();
                });
            }
        };
        this.init = function () {
            _this.reset();
            // PROPERTIES
            _this.scale = 3;
            _this.resolution = new _Vector2Js2["default"](320, 188);
            _this.CTX = _this.canvas.getContext('2d');
            _this.objs = [];
            _this.ResizeCanvas(_this.resolution.x * _this.scale, _this.resolution.y * _this.scale);
            _this.CTX.scale(_this.scale, _this.scale);
            // setup
            _this.SpawnPlayer(new _Vector2Js2["default"](280, 130), new _Vector2Js2["default"](15, 15));
            _this.SpawnPlatform(new _Vector2Js2["default"](160, 150), new _Vector2Js2["default"](320, 200));
            _this.SpawnCatch();
            //this.SpawnPlatform(new Vector2(-10,140), new Vector2(160,20));
        };
        this.SetCanvas = function (options) {
            _this.canvas = options.canvas;
        };
        this.SpawnPlatform = function (position, size) {
            // setup the platform

            var platform = new _GameObjectJs2["default"]();
            platform.transform = new _TransformJs2["default"]({
                position: position,
                size: size
            });
            platform.AddComponent(new _ColliderJs2["default"]());
            platform.AddComponent(new _ScrollingTerrainJs2["default"]({ speed: _this.speed }));
            platform.AddComponent(new _RectRendererJs2["default"]());
            platform.color = Game.instance.color.light;
            platform.name = "Platform";

            var deadArea = new _GameObjectJs2["default"]();
            deadArea.transform = new _TransformJs2["default"]({
                position: new _Vector2Js2["default"](position.x + size.x, position.y + 5),
                size: new _Vector2Js2["default"](2, size.y - 10)
            });
            deadArea.AddComponent(new _ColliderJs2["default"]());
            deadArea.AddComponent(new _ScrollingTerrainJs2["default"]({ speed: _this.speed }));
            deadArea.AddComponent(new _RectRendererJs2["default"]());
            deadArea.color = "rgba(255,0,0,1)";
            deadArea.name = "CollisionDeath";

            //this.RecalculatePlatforms();
            _this.objs.push(platform);
            _this.objs.push(deadArea);
            return platform;
        };
        this.SpawnPlayer = function (position, size) {
            // setup the player
            var player = new _GameObjectJs2["default"]();
            player.transform = new _TransformJs2["default"]({
                position: position,
                size: size
            });
            player.AddComponent(new _ColliderJs2["default"]());
            player.AddComponent(new _PlayerJs2["default"]());
            player.AddComponent(new _PhysicsBodyJs2["default"]({ kinematic: false }));
            player.AddComponent(new _JumpJs2["default"]({ input: _InputJs2["default"].instance }));
            player.AddComponent(new _SpriteRendererJs2["default"]({
                animations: [{ name: "Walk", frames: [0, 1, 2, 3] }, { name: "Jump", frames: [4] }]
            }));
            player.color = _this.color.transparent;
            player.name = "Player";

            // add the player to the game
            _this.objs.push(player);
        };
        this.SpawnCatch = function () {
            // setup the platform
            var catcher = new _GameObjectJs2["default"]();
            catcher.transform = new _TransformJs2["default"]({
                position: new _Vector2Js2["default"](0, 190),
                size: new _Vector2Js2["default"](320, 10)
            });
            catcher.AddComponent(new _ColliderJs2["default"]());
            catcher.AddComponent(new _RectRendererJs2["default"]());
            catcher.color = "rgba(255,0,0,1)";
            catcher.name = "CollisionDeath";

            //this.RecalculatePlatforms();
            _this.objs.push(catcher);
        };
        this.SetScrollingTerrainSpeed = function (speed) {
            _this.objs.forEach(function (obj) {
                _this.speed = speed;
                var st = obj.GetComponent("ScrollTerrain");
                if (st !== null) {
                    st.speed = _this.speed;
                }
            });
        };
    }

    /**
     *  using ARROW FUNCTIONS here in ES6 for lexical scope inheritance
     *  they assume the scope (this) from their parent scoping
     */

    _createClass(Game, null, [{
        key: "instance",
        get: function get() {
            if (!this[singleton]) {
                this[singleton] = new Game(singletonEnforcer);
            }
            return this[singleton];
        }
    }]);

    return Game;
})();

exports["default"] = Game;
module.exports = exports["default"];

},{"./Collider.js":2,"./Component.js":3,"./GameObject.js":5,"./Input.js":6,"./Jump.js":7,"./PhysicsBody.js":8,"./Player.js":9,"./Rect.js":10,"./RectRenderer.js":11,"./ScrollingTerrain.js":12,"./SpriteRenderer.js":13,"./Transform.js":14,"./Vector2.js":15}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _TransformJs = require("./Transform.js");

var _TransformJs2 = _interopRequireDefault(_TransformJs);

var _Vector2Js = require("./Vector2.js");

var _Vector2Js2 = _interopRequireDefault(_Vector2Js);

var _GameJs = require("./Game.js");

var _GameJs2 = _interopRequireDefault(_GameJs);

var GameObject = function GameObject() {
    var _this = this;

    _classCallCheck(this, GameObject);

    //console.log("GameObject | constructor");
    this.name = "GO";
    this.transform = new _TransformJs2["default"]({
        position: new _Vector2Js2["default"](10, 10),
        size: new _Vector2Js2["default"](10, 10)
    });
    this.collider = true;
    this.components = [];

    this.Update = function () {
        _this.components.forEach(function (component) {
            component.Update();
        });
    };

    this.Draw = function (ctx) {
        _this.components.forEach(function (component) {
            component.Draw(ctx);
        });
    };

    this.GetComponent = function (name) {
        var needle = null;
        _this.components.forEach(function (component) {
            //console.log(component.constructor.name);
            if (component.constructor.name === name) {
                needle = component;
            }
        });
        return needle;
    };

    this.AddComponent = function (component) {
        _this.components.push(component);
        component.gameObject = _this;
    };

    this.Destroy = function () {
        // remove it from this gameobjs
        var i = _GameJs2["default"].instance.objs.indexOf(_this);
        if (i > -1) {
            _GameJs2["default"].instance.objs[i] = null;
            _GameJs2["default"].instance.objs.splice(i, 1);
        }
        //Game.instance.RecalculatePlatforms();
    };

    this.isOnScreen = function () {
        var t = _this.transform,
            status = false;
        if ( //t.position.x + t.size.x > 0 &&
        t.position.x < _GameJs2["default"].instance.resolution.x && t.position.y + t.size.y > 0 && t.position.y < _GameJs2["default"].instance.resolution.y) {
            status = true;
        }
        return status;
    };
};

exports["default"] = GameObject;
module.exports = exports["default"];

},{"./Game.js":4,"./Transform.js":14,"./Vector2.js":15}],6:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var SPACE = 32;

var singleton = Symbol();
var singletonEnforcer = Symbol();

var Input = (function () {
    function Input(options) {
        var _this = this;

        _classCallCheck(this, Input);

        //console.log("Input | constructor");

        this.isSpaceDown = false;
        this.KeyDown = function (e) {
            switch (e.keyCode) {
                case SPACE:
                    _this.isSpaceDown = true;
                    break;
            }
        };
        this.KeyUp = function (e) {
            switch (e.keyCode) {
                case SPACE:
                    _this.isSpaceDown = false;
                    break;
            }
        };
        this.Attach = function () {
            window.addEventListener('keydown', _this.KeyDown);
            window.addEventListener('keyup', _this.KeyUp);
        };
    }

    _createClass(Input, null, [{
        key: 'instance',
        get: function get() {
            if (!this[singleton]) {
                this[singleton] = new Input(singletonEnforcer);
            }
            return this[singleton];
        }
    }]);

    return Input;
})();

exports['default'] = Input;
module.exports = exports['default'];

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentJs = require("./Component.js");

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var Jump = (function (_Component) {
    _inherits(Jump, _Component);

    function Jump(options) {
        var _this = this;

        _classCallCheck(this, Jump);

        _get(Object.getPrototypeOf(Jump.prototype), "constructor", this).call(this, options);
        //console.log("Jump | constructor");
        this.input = options.input;
        this.SpriteRenderer = null;

        this.jumpOne = false;
        this.doubleJump = false;

        this.jumpForce = -9.5;

        this.lastJumpTime = -9999;
        this.jumpCD = 300;

        this.Update = function () {

            //gulpconsole.log("jump1: " + this.jumpOne + " doublejump: " + this.doubleJump);

            if (_this.gameObject) {
                _this.pb = _this.gameObject.GetComponent("PhysicsBody");
                _this.SpriteRenderer = _this.gameObject.GetComponent("SpriteRenderer");
            }

            if (_this.input.isSpaceDown && _this.pb) {

                // the double jump
                if (_this.jumpOne && !_this.doubleJump && _this.lastJumpTime + _this.jumpCD <= Date.now()) {
                    var f = _this.jumpForce;
                    if (_this.pb.velocity.y > 2) {
                        f = _this.jumpForce * 1.25;
                    }
                    _this.Jump(f);
                    _this.doubleJump = true;
                }

                // the first jump
                if (!_this.jumpOne && _this.pb.grounded && _this.lastJumpTime + _this.jumpCD <= Date.now()) {
                    _this.Jump(_this.jumpForce);
                    _this.pb.grounded = false;
                    _this.jumpOne = true;
                }
            }

            if (_this.pb.grounded) {
                _this.jumpOne = false;
                _this.doubleJump = false;
            }

            if (_this.pb.grounded && _this.SpriteRenderer) {
                _this.SpriteRenderer.currentAnimation = 0;
            } else {
                _this.SpriteRenderer.currentAnimation = 1;
            }
        };
        this.Jump = function (force) {
            if (_this.lastJumpTime + _this.jumpCD <= Date.now()) {
                _this.lastJumpTime = Date.now();
                if (_this.gameObject) {
                    _this.pb = _this.gameObject.GetComponent("PhysicsBody");
                }
                if (_this.pb) {
                    _this.pb.velocity.y = force;
                }
            }
        };
    }

    return Jump;
})(_ComponentJs2["default"]);

exports["default"] = Jump;
module.exports = exports["default"];

},{"./Component.js":3}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentJs = require("./Component.js");

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var _Vector2Js = require("./Vector2.js");

var _Vector2Js2 = _interopRequireDefault(_Vector2Js);

var _GameJs = require("./Game.js");

var _GameJs2 = _interopRequireDefault(_GameJs);

var _RectJs = require("./Rect.js");

var _RectJs2 = _interopRequireDefault(_RectJs);

/*
     (0,0) ----> (+, 0)
        |
        V
     (0,+) ----> (+, +)
 */

var PhysicsBody = (function (_Component) {
    _inherits(PhysicsBody, _Component);

    function PhysicsBody(options) {
        var _this = this;

        _classCallCheck(this, PhysicsBody);

        _get(Object.getPrototypeOf(PhysicsBody.prototype), "constructor", this).call(this, options);
        this.gravity = new _Vector2Js2["default"](0, 0.3);
        this.velocity = _Vector2Js2["default"].zero();
        this.acceleration = _Vector2Js2["default"].zero();
        this.collider = null;
        this.isKinematic = options && options.kinematic || false;

        this.game = _GameJs2["default"].instance;
        this.grounded = false;

        this.Update = function () {
            if (!_this.isKinematic) {
                _this.Step();
            }
        };
        this.Draw = function () {};
        this.Step = function () {
            // recompute velocity
            _this.velocity.x += _this.acceleration.x + _this.gravity.x;
            _this.velocity.y += _this.acceleration.y + _this.gravity.y;

            // drag?
            _this.velocity.x *= 0.9;
            _this.velocity.y *= 0.9;

            // assign the Collider if there is one
            if (_this.collider === null) {
                _this.collider = _this.gameObject.GetComponent("Collider");
            }

            var xCol = false,
                yCol = false,
                t = _this.gameObject.transform,
                xRect = new _RectJs2["default"]();
            xRect.init(t.position.x + _this.velocity.x, t.position.y, t.size.x, t.size.y);
            var yRect = new _RectJs2["default"]();
            yRect.init(t.position.x, t.position.y + _this.velocity.y, t.size.x, t.size.y);
            var yFloorCeil = 0;

            // check if new position has Collision?
            if (!_this.collider !== null) {
                _this.game.objs.forEach(function (object) {
                    if (object !== _this.gameObject) {
                        var t2 = object.transform,
                            objRect = new _RectJs2["default"]();
                        objRect.init(t2.position.x, t2.position.y, t2.size.x, t2.size.y);
                        if (_this.AABB(xRect, objRect)) {
                            xCol = true;
                        }
                        if (_this.AABB(yRect, objRect)) {
                            yCol = true;
                            yFloorCeil = t2.position.y - _this.gameObject.transform.size.y;
                            if (object.name === "CollisionDeath" && _this.gameObject.name === "Player") {
                                _this.gameObject.GetComponent("Player").Die();
                            }
                        }
                    }
                });
            }

            // apply motion
            if (!xCol) {
                _this.gameObject.transform.position.x += _this.velocity.x;
            }

            if (!yCol) {
                _this.gameObject.transform.position.y += _this.velocity.y;
                _this.grounded = false;
            } else {
                // if would collide with floor, set the position to the floor
                _this.gameObject.transform.position.y = yFloorCeil;
                _this.grounded = true;
            }
        };
        this.AABB = function (rect1, rect2) {
            var collision = false;
            if (rect1.position.x < rect2.position.x + rect2.size.x && rect1.position.x + rect1.size.x > rect2.position.x && rect1.position.y < rect2.position.y + rect2.size.y && rect1.size.y + rect1.position.y > rect2.position.y) {
                // collision detected!
                collision = true;
            }
            return collision;
        };
    }

    return PhysicsBody;
})(_ComponentJs2["default"]);

exports["default"] = PhysicsBody;
module.exports = exports["default"];

},{"./Component.js":3,"./Game.js":4,"./Rect.js":10,"./Vector2.js":15}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentJs = require('./Component.js');

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var _GameJs = require("./Game.js");

var _GameJs2 = _interopRequireDefault(_GameJs);

var Player = (function (_Component) {
    _inherits(Player, _Component);

    function Player(options) {
        var _this = this;

        _classCallCheck(this, Player);

        _get(Object.getPrototypeOf(Player.prototype), "constructor", this).call(this, options);
        this.Die = function () {
            //console.log("you died");
            //Game.instance.paused = true;
            _this.gameObject.Destroy();
            _GameJs2["default"].instance.reset("All");
            _GameJs2["default"].instance.init();
        };
    }

    return Player;
})(_ComponentJs2["default"]);

exports["default"] = Player;
module.exports = exports["default"];

},{"./Component.js":3,"./Game.js":4}],10:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _Vector2Js = require('./Vector2.js');

var _Vector2Js2 = _interopRequireDefault(_Vector2Js);

var Rect = function Rect(options) {
    var _this = this;

    _classCallCheck(this, Rect);

    if (options) {
        if (options.hasOwnProperty('size') && options.hasOwnProperty('position')) {
            this.size = options.size;
            this.position = options.position;
        }
        if (options.hasOwnProperty('x') && options.hasOwnProperty('y')) {
            this.position = new _Vector2Js2['default'](x, y);
        }
        if (options.hasOwnProperty('width') && options.hasOwnProperty('height')) {
            this.size = new _Vector2Js2['default'](width, height);
        }
    }
    this.init = function (x, y, w, h) {
        _this.position = new _Vector2Js2['default'](x, y);
        _this.size = new _Vector2Js2['default'](w, h);
    };
};

exports['default'] = Rect;
module.exports = exports['default'];

},{"./Vector2.js":15}],11:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentJs = require('./Component.js');

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var RectRenderer = (function (_Component) {
    _inherits(RectRenderer, _Component);

    function RectRenderer(options) {
        var _this = this;

        _classCallCheck(this, RectRenderer);

        _get(Object.getPrototypeOf(RectRenderer.prototype), 'constructor', this).call(this, options);
        //console.log("RectRenderer | constructor");
        this.Draw = function (ctx) {
            var t = _this.gameObject.transform,
                rect = [t.position.x, t.position.y, t.size.x, t.size.y];
            ctx.fillStyle = _this.gameObject.color;
            ctx.fillRect.apply(ctx, rect);
        };
    }

    return RectRenderer;
})(_ComponentJs2['default']);

exports['default'] = RectRenderer;
module.exports = exports['default'];

},{"./Component.js":3}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentJs = require("./Component.js");

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var _GameJs = require("./Game.js");

var _GameJs2 = _interopRequireDefault(_GameJs);

var _Vector2Js = require("./Vector2.js");

var _Vector2Js2 = _interopRequireDefault(_Vector2Js);

var ScrollingTerrain = (function (_Component) {
    _inherits(ScrollingTerrain, _Component);

    function ScrollingTerrain(options) {
        var _this = this;

        _classCallCheck(this, ScrollingTerrain);

        _get(Object.getPrototypeOf(ScrollingTerrain.prototype), "constructor", this).call(this, options);
        //console.log("ScrollingTerrain | constructor");
        this.speed = options.speed || 2.5;
        this.link = null;
        this.Update = function () {

            // no link yet and on screen
            if (_this.link === null && _this.gameObject.name === "Platform" && _this.gameObject.transform.position.x > -50) {

                var newSize = new _Vector2Js2["default"](_this.RandomRange(80, 320), 200),
                    newPositionX = _this.gameObject.transform.position.x - newSize.x - _this.RandomRange(150, 50),
                    newPositionY = _this.gameObject.transform.position.y + _this.RandomRange(30, -30);

                // if the new platform is lower than current
                if (newPositionY > _this.gameObject.transform.position.y) {
                    // we can add more distance
                    var additionalDistance = (newPositionY - _this.gameObject.transform.position.y) * 0.5;
                    //console.log("its lower so add more distance: " + additionalDistance + " " + newPositionX);
                    newPositionX -= additionalDistance;
                }

                if (newPositionY < 50) {
                    newPositionY = 50;
                }
                if (newPositionY > 180) {
                    newPositionY = 180;
                }
                _this.link = _GameJs2["default"].instance.SpawnPlatform(new _Vector2Js2["default"](newPositionX, newPositionY), newSize);
            }

            // Scroll Right
            _this.gameObject.transform.position.x += _this.speed;
            if (!_this.gameObject.isOnScreen()) {
                //console.log("not on screen");
                _this.gameObject.Destroy();
            }
        };
        this.RandomRange = function (max, min) {
            return Math.floor(Math.random() * (max - min)) + min;
        };
    }

    return ScrollingTerrain;
})(_ComponentJs2["default"]);

exports["default"] = ScrollingTerrain;
module.exports = exports["default"];

},{"./Component.js":3,"./Game.js":4,"./Vector2.js":15}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentJs = require("./Component.js");

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var _Vector2Js = require("./Vector2.js");

var _Vector2Js2 = _interopRequireDefault(_Vector2Js);

var _GameJs = require("./Game.js");

var _GameJs2 = _interopRequireDefault(_GameJs);

var SpriteRenderer = (function (_Component) {
    _inherits(SpriteRenderer, _Component);

    function SpriteRenderer(options) {
        var _this = this;

        _classCallCheck(this, SpriteRenderer);

        _get(Object.getPrototypeOf(SpriteRenderer.prototype), "constructor", this).call(this, options);
        //console.log("SpriteRenderer | constructor");

        //this.animations = options.animations;

        /**
         *  [
         *      { name:"Anim-1", frames:[0 ... N] },
         *      { more animations... },
         *      { name:"Anim-N", frames:[0 ... N] }
         *  ]
         * @type {animations|*|Array}
         */
        this.animations = options.animations;
        this.lastAnimation = 0;
        this.currentAnimation = 0;

        this.sprite = new Image();
        this.sprite.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAgCAMAAACioYPHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQURCQTYzNTIyMEM3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QkU2MjJGMDQxN0YxMUU1OEJCRkIxQzk0RUE2MzZGRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QkU2MjJFRjQxN0YxMUU1OEJCRkIxQzk0RUE2MzZGRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6cMsTrAAAAElBMVEX4+Pj/5KwA7NwAeP8AAAD///9eGScjAAAABnRSTlP//////wCzv6S/AAACF0lEQVR42uyXyZLDIAxEATX//8tjJJkllsA4Ofgw1Eylyk7bT60FEvLLV/gH3FjIONYbAZlK8CqifrwCEETIFU8Q5do7AA+WQjMA6rX3AGJcB+2LADmdjBj5r/zToxRbXfYTvSQ0xBhCYMgzwVuAH132EM/WH0QJoVgXggLiOmYWBo1dtm/wVI9UAWNEqnwd4NKgBeCXeiTEwCmOVGivg3plEFaA3+qTNEgxsPFtAtYuewg40xdC+U7P1wCxLrGuy/YNWumlDIXPBWxjyLSo6zLsG7TQC6EsmIeFPsASi/uCjyK5a9BKfwOwBXh8hy6PqF32mQXDIPP9Cz0mgLz7DQG2Sdm/gfMYcXnKxaBkTpKZvlwkXRdA2a37AEE2YdTbFmCvt9RTfdlKKqEN2AeIbFvIy/G36QWQkDf05ZISGikWB1MN0AEEcXLg2ItmEOz4Jnq5pnVo1KDwa4BJz7fWqYjDh/l2PdQlPwG+vjHD7mIhlOrV462zGRCc9En5lOiSHI839GilB7LHDJ93MrRMAbPIeTsi+94JSHwU8R7g6DXBrR/snaQ2u1Nl8gJ7hLS9jjG9B3j69luOPMA2y0u/kEvoDbl+lp0DA5t6w8ARENIp4qKXZJddZxnmD5jo7wBKg7CLrk2+u+cNLUNs6peAdXxNf3Y4Q264sTj5PwSEsdFsGHBP/k2KcetH2/rIn5/ph2nS1p8AAwCbD1ijbePFdwAAAABJRU5ErkJggg==';
        this.frameSize = new _Vector2Js2["default"](32, 32);
        this.totalFrames = 4; // 5 with 0 based index
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 12;

        this.Update = function () {

            _this.animations.forEach(function (anim, index) {
                if (index === _this.currentAnimation) {
                    _this.totalFrames = anim.frames.length;
                    if (_this.lastAnimation != _this.currentAnimation) {
                        _this.frameIndex = 0;
                        _this.tickCount = 0;
                        _this.lastAnimation = _this.currentAnimation;
                    }
                }
            });

            _this.tickCount++;
            if (_this.tickCount > _this.ticksPerFrame) {
                _this.tickCount = 0;
                if (_this.frameIndex < _this.totalFrames - 1) {
                    _this.frameIndex++;
                } else {
                    _this.frameIndex = 0;
                }
            }
        };

        this.Draw = function (ctx) {
            var t = _this.gameObject.transform;
            ctx.drawImage(_this.sprite, _this.animations[_this.currentAnimation].frames[_this.frameIndex] * _this.frameSize.x, 0, _this.frameSize.x, _this.frameSize.y, t.position.x, t.position.y, t.size.x, t.size.y);
        };
    }

    return SpriteRenderer;
})(_ComponentJs2["default"]);

exports["default"] = SpriteRenderer;
module.exports = exports["default"];

},{"./Component.js":3,"./Game.js":4,"./Vector2.js":15}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentJs = require("./Component.js");

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var Transform = (function (_Component) {
    _inherits(Transform, _Component);

    function Transform(options) {
        _classCallCheck(this, Transform);

        _get(Object.getPrototypeOf(Transform.prototype), "constructor", this).call(this, options);
        //console.log("Transform | constructor");
        this.position = options.position;
        this.size = options.size;
    }

    return Transform;
})(_ComponentJs2["default"]);

exports["default"] = Transform;
module.exports = exports["default"];

},{"./Component.js":3}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vector2 = (function () {
    function Vector2(x, y) {
        _classCallCheck(this, Vector2);

        this.x = x;
        this.y = y;
    }

    _createClass(Vector2, null, [{
        key: "zero",
        value: function zero() {
            return new Vector2(0, 0);
        }
    }]);

    return Vector2;
})();

exports["default"] = Vector2;
module.exports = exports["default"];

},{}]},{},[1]);
