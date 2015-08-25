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

},{"./class/Collider.js":2,"./class/Component.js":3,"./class/Game.js":5,"./class/GameObject.js":6,"./class/Input.js":7,"./class/Jump.js":8,"./class/PhysicsBody.js":11,"./class/Rect.js":13,"./class/RectRenderer.js":14,"./class/ScrollingTerrain.js":15,"./class/SpriteRenderer.js":16,"./class/Transform.js":18,"./class/Vector2.js":19}],2:[function(require,module,exports){
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

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ComponentJs = require('./Component.js');

var _ComponentJs2 = _interopRequireDefault(_ComponentJs);

var _InputJs = require("./Input.js");

var _InputJs2 = _interopRequireDefault(_InputJs);

var DestroyOnSpace = (function (_Component) {
    _inherits(DestroyOnSpace, _Component);

    function DestroyOnSpace(options) {
        var _this = this;

        _classCallCheck(this, DestroyOnSpace);

        _get(Object.getPrototypeOf(DestroyOnSpace.prototype), "constructor", this).call(this, options);
        this.Update = function () {
            if (_InputJs2["default"].instance.isSpaceDown) {
                _this.gameObject.Destroy();
            }
        };
    }

    return DestroyOnSpace;
})(_ComponentJs2["default"]);

exports["default"] = DestroyOnSpace;
module.exports = exports["default"];

},{"./Component.js":3,"./Input.js":7}],5:[function(require,module,exports){
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

var _DestroyOnSpaceJs = require("./DestroyOnSpace.js");

var _DestroyOnSpaceJs2 = _interopRequireDefault(_DestroyOnSpaceJs);

var _GameObjectJs = require("./GameObject.js");

var _GameObjectJs2 = _interopRequireDefault(_GameObjectJs);

var _InputJs = require("./Input.js");

var _InputJs2 = _interopRequireDefault(_InputJs);

var _JumpJs = require("./Jump.js");

var _JumpJs2 = _interopRequireDefault(_JumpJs);

var _ParallaxJs = require("./Parallax.js");

var _ParallaxJs2 = _interopRequireDefault(_ParallaxJs);

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

var _TextRendererJs = require("./TextRenderer.js");

var _TextRendererJs2 = _interopRequireDefault(_TextRendererJs);

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
        this.Update = function () {
            if (!_this.hasStarted && _InputJs2["default"].instance.isSpaceDown) {
                _this.StartGame();
                _this.hasStarted = true;
            }
            if (!_this.paused) {
                _this.objs.forEach(function (el) {
                    el.Update();
                });
            }
        };
        this.Draw = function () {

            _this.CTX.webkitImageSmoothingEnabled = false;
            _this.CTX.mozImageSmoothingEnabled = false;
            _this.CTX.imageSmoothingEnabled = false;

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
            _this.hasStarted = false;
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
            _this.SpawnParallax();
            _this.SpawnStartMenu();
        };
        this.StartGame = function () {
            _this.SpawnPlayer(new _Vector2Js2["default"](250, 130), new _Vector2Js2["default"](15, 15));
            _this.SpawnPlatform(new _Vector2Js2["default"](160, 150), new _Vector2Js2["default"](320, 200));
            _this.SpawnCatch();
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
            //            platform.AddComponent(new RectRenderer());
            //            platform.color = Game.instance.color.light;
            platform.AddComponent(new _SpriteRendererJs2["default"]({
                animated: false,
                tiled: true,
                tiledIndex: 0
            }));
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
                animated: true,
                animations: [{ name: "Walk", frames: [0, 1, 2, 1] }, { name: "Jump", frames: [3] }]
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
        this.SpawnStartMenu = function () {
            // setup the title text
            var title = new _GameObjectJs2["default"]();
            title.transform = new _TransformJs2["default"]({
                position: new _Vector2Js2["default"](_this.resolution.x / 2, _this.resolution.y / 2 - 50),
                size: _Vector2Js2["default"].zero()
            });
            title.AddComponent(new _TextRendererJs2["default"]({
                text: 'Reversed'.split("").reverse().join(""),
                font: '30px sans-serif',
                fontWeight: 'bolder',
                textAlign: 'center',
                fillStyle: 'white'
            }));
            title.AddComponent(new _DestroyOnSpaceJs2["default"]());
            _this.objs.push(title);

            // setup the title text
            var subtitle = new _GameObjectJs2["default"]();
            subtitle.transform = new _TransformJs2["default"]({
                position: new _Vector2Js2["default"](_this.resolution.x / 2, _this.resolution.y / 2 - 35),
                size: _Vector2Js2["default"].zero()
            });
            subtitle.AddComponent(new _TextRendererJs2["default"]({
                text: 'Press Space to Start'.split("").reverse().join(""),
                font: '8px sans-serif',
                fontWeight: 'bolder',
                textAlign: 'center',
                fillStyle: 'white'
            }));
            subtitle.AddComponent(new _DestroyOnSpaceJs2["default"]());
            _this.objs.push(subtitle);
        };
        this.SpawnParallax = function () {

            var stars = new _GameObjectJs2["default"]();
            stars.transform = new _TransformJs2["default"]({
                position: _Vector2Js2["default"].zero(),
                size: _this.resolution
            });
            stars.AddComponent(new _ParallaxJs2["default"]({
                sprite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAAAiAgMAAABEnu15AAAADFBMVEUAAABSdCSTuWPA3YsKQP1cAAAAAXRSTlMAQObYZgAAAEtJREFUKM9jGCDAiMRWgFBMqCpEMPQ0QJXjkhAg2zUOFCt2oDxIeHBJHMAl8YBEGxoocJ0CphCRoc5CesJA2Ep5LFIOmB0IxwgCAABPXAXsrhitAAAAAABJRU5ErkJggg==",
                size: new _Vector2Js2["default"](95, 34),
                tickFrames: 120,
                repeat: true
            }));
            stars.name = "Stars";
            _this.objs.push(stars);

            var moon = new _GameObjectJs2["default"]();
            moon.transform = new _TransformJs2["default"]({
                position: new _Vector2Js2["default"](20, 15),
                size: new _Vector2Js2["default"](42, 40)
            });
            moon.AddComponent(new _ParallaxJs2["default"]({
                sprite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUBAMAAACQZWsAAAAAD1BMVEUAAACTuWPA3YtSdCQtNhlaMa0FAAAAAXRSTlMAQObYZgAAAH9JREFUCNddztENAkEIBFA9KxjmGmBuC5DFAkzW/msSTv1xEsILfMDlPw78CBfzOw0AfJ4umXw0r4y0Kax2BozTWQYzmKZoo72c9zYC82HlDSCMx4yysA/HK9hWHOYj+7I8KRk/9pQOZ1uaVdHe1HGcz82mr1ItTI690LlFovsbJFMTBF1I6sMAAAAASUVORK5CYII=",
                size: new _Vector2Js2["default"](21, 20),
                tickFrames: 45,
                repeat: false,
                scale: 2
            }));
            moon.name = "Moon";
            _this.objs.push(moon);

            var rectBG = new _GameObjectJs2["default"]();
            rectBG.transform = new _TransformJs2["default"]({
                position: new _Vector2Js2["default"](0, 94),
                size: _this.resolution
            });
            rectBG.color = "#2e3719";
            rectBG.AddComponent(new _RectRendererJs2["default"]());
            _this.objs.push(rectBG);

            var backMountain = new _GameObjectJs2["default"]();
            backMountain.transform = new _TransformJs2["default"]({
                position: new _Vector2Js2["default"](0, 44),
                size: new _Vector2Js2["default"](_this.resolution.x, 81)
            });
            backMountain.AddComponent(new _ParallaxJs2["default"]({
                sprite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAbAgMAAACfC0DrAAAACVBMVEUAAAAuNxlScyNJmFCcAAAAAXRSTlMAQObYZgAAAQBJREFUKM99zkFOxDAMBVAGCRbsB4krcIo5wiz4lpy9KyWnQNzBEcmKBY5wTsmUtrTqIL53T9a3b/7Nw9cf+Nb7x/Umd+9X+hR7ra97FYvUPnd48AGQuFu+t3jRQU9bfM4elZT6+1Zrs2qZ4X7eaCKHd2MtuuKtNleKLOhlc0vJlALE4esbjwo3qt4C4vrz0SAKZGYAy72DKUsWEjIFXpaCJIWbhEZRAJmVI9GQdBwAw2kqkKLSIblaFHCYKu6QNHQJqSMAyJg1FE5BagEphKYvjojIyXxsjRgzNgOCqKExY87YjEu4ojBs4UmDGSeHLHr+USIVUhCWnC46XxH85vwNOQCNbZlGlfEAAAAASUVORK5CYII=",
                size: new _Vector2Js2["default"](84, 27),
                tickFrames: 22,
                scale: 3,
                repeat: true
            }));

            backMountain.name = "BackMountain";
            _this.objs.push(backMountain);

            var frontMountain = new _GameObjectJs2["default"]();
            frontMountain.transform = new _TransformJs2["default"]({
                position: new _Vector2Js2["default"](0, 100),
                size: new _Vector2Js2["default"](_this.resolution.x, 57)
            });
            frontMountain.AddComponent(new _ParallaxJs2["default"]({
                sprite: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAATAgMAAAB6s2L8AAAADFBMVEUAAAAuNxmTuWNSdCS1ShlGAAAAAXRSTlMAQObYZgAAALhJREFUGNNjIAcwBmARXLZsKYbYwmUrZ6Gr1YoMmxY1AUWIY9m6WbOWRi1bgSzIuWzlq1krV61MQxZctTvtd/2qV8uyHBCOWVn+7+Xcv+GvS5H0S6Z+rUy/ez00/easpQIwhavSr4ZNzQ1dGhqfOS0EKshaGXt31dTQ0LCroWFrp0EF7e9WXg0FgqzQ0PitYQsggn+BQktDoSBsCViMPxQJTA2dCXZVeCgqCABZgyaWGgp0TygGCAAAjbBYWvu9u1wAAAAASUVORK5CYII=",
                size: new _Vector2Js2["default"](80, 19),
                tickFrames: 5,
                scale: 3,
                translation: 55,
                repeat: true
            }));

            frontMountain.name = "FrontMountain";
            _this.objs.push(frontMountain);
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

},{"./Collider.js":2,"./Component.js":3,"./DestroyOnSpace.js":4,"./GameObject.js":6,"./Input.js":7,"./Jump.js":8,"./Parallax.js":9,"./PhysicsBody.js":11,"./Player.js":12,"./Rect.js":13,"./RectRenderer.js":14,"./ScrollingTerrain.js":15,"./SpriteRenderer.js":16,"./TextRenderer.js":17,"./Transform.js":18,"./Vector2.js":19}],6:[function(require,module,exports){
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

},{"./Game.js":5,"./Transform.js":18,"./Vector2.js":19}],7:[function(require,module,exports){
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

},{}],8:[function(require,module,exports){
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

        this.soundSource = "data:audio/mp3;base64,/+MYxAALeAMRuUEQArT4o7LLw/ggCb9YY3orfAAYy5//E6z8H+oMS4fUCAIf6pR3/E+T///5d8QO/D4XHPD+DfHROEnTxLGD/+MYxA0O6TcMAYcwAO48Nn/uxT26BMMnf7nAwN/7fdq//69Ntlk0+/PmlwuHzG0qR29n4jBwlB/+vsy9DNxS43f///////HU/+MYxAwQI0L4AY04AIEgGhF//46WyHzqjVRJF43P/mzW5s5H0Eb/+5hjfzRsfWTHCBM//qavr//8353+YaXM/+IlEgHIC4Su/+MYxAYOuxKoCZJoALIaaJ/dD/zG//qSMWV//76X//v6LI1f//7moOoYwHsEiHcUtv///90dKqp9X////0l9aki8TEFNRTMu/+MYxAYAAANIAcAAADk5LjWqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq";

        this.jumpSound = new Audio(this.soundSource);

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
                    if (_this.pb.velocity.y > 1.9) {
                        f = _this.jumpForce * 1.1;
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
                _this.jumpSound.play();
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

},{"./Component.js":3}],9:[function(require,module,exports){
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

var _GameJs = require("./Game.js");

var _GameJs2 = _interopRequireDefault(_GameJs);

var Parallax = (function (_Component) {
    _inherits(Parallax, _Component);

    function Parallax(options) {
        var _this = this;

        _classCallCheck(this, Parallax);

        _get(Object.getPrototypeOf(Parallax.prototype), 'constructor', this).call(this, options);

        this.size = options.size;

        this.DrawPatternContext = function () {
            _this.patternContext.drawImage(_this.sprite, 0, 0, _this.size.x * _this.scale, _this.size.y * _this.scale);
        };

        this.scale = options.scale || 1;

        this.sprite = new Image();
        //this.sprite.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAAgCAMAAACioYPHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQURCQTYzNTIyMEM3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QkU2MjJGMDQxN0YxMUU1OEJCRkIxQzk0RUE2MzZGRiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QkU2MjJFRjQxN0YxMUU1OEJCRkIxQzk0RUE2MzZGRiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6cMsTrAAAAElBMVEX4+Pj/5KwA7NwAeP8AAAD///9eGScjAAAABnRSTlP//////wCzv6S/AAACF0lEQVR42uyXyZLDIAxEATX//8tjJJkllsA4Ofgw1Eylyk7bT60FEvLLV/gH3FjIONYbAZlK8CqifrwCEETIFU8Q5do7AA+WQjMA6rX3AGJcB+2LADmdjBj5r/zToxRbXfYTvSQ0xBhCYMgzwVuAH132EM/WH0QJoVgXggLiOmYWBo1dtm/wVI9UAWNEqnwd4NKgBeCXeiTEwCmOVGivg3plEFaA3+qTNEgxsPFtAtYuewg40xdC+U7P1wCxLrGuy/YNWumlDIXPBWxjyLSo6zLsG7TQC6EsmIeFPsASi/uCjyK5a9BKfwOwBXh8hy6PqF32mQXDIPP9Cz0mgLz7DQG2Sdm/gfMYcXnKxaBkTpKZvlwkXRdA2a37AEE2YdTbFmCvt9RTfdlKKqEN2AeIbFvIy/G36QWQkDf05ZISGikWB1MN0AEEcXLg2ItmEOz4Jnq5pnVo1KDwa4BJz7fWqYjDh/l2PdQlPwG+vjHD7mIhlOrV462zGRCc9En5lOiSHI839GilB7LHDJ93MrRMAbPIeTsi+94JSHwU8R7g6DXBrR/snaQ2u1Nl8gJ7hLS9jjG9B3j69luOPMA2y0u/kEvoDbl+lp0DA5t6w8ARENIp4qKXZJddZxnmD5jo7wBKg7CLrk2+u+cNLUNs6peAdXxNf3Y4Q264sTj5PwSEsdFsGHBP/k2KcetH2/rIn5/ph2nS1p8AAwCbD1ijbePFdwAAAABJRU5ErkJggg==';
        this.sprite.src = options.sprite;
        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = options.size.x * this.scale;
        this.patternCanvas.height = options.size.y * this.scale;
        this.patternContext = this.patternCanvas.getContext('2d');

        this.patternContext.webkitImageSmoothingEnabled = false;
        this.patternContext.mozImageSmoothingEnabled = false;
        this.patternContext.imageSmoothingEnabled = false;

        this.repeat = options.repeat;

        this.DrawPatternContext();

        this.tickFrames = options.tickFrames || 60;
        this.tickPixels = 1;
        this.currentFrame = 0;
        this.translation = options.translation || 0;

        this.Update = function () {

            _this.currentFrame++;

            //if ( this.currentFrame === this.tickFrames ){
            //    this.translation += this.tickPixels;
            //    this.currentFrame = 0;
            //}

            _this.translation += _this.tickPixels / _this.tickFrames;

            _this.DrawPatternContext();
        };

        this.Draw = function (ctx) {

            var t = _this.gameObject.transform;
            var finalPattern = ctx.createPattern(_this.patternCanvas, "repeat");
            ctx.fillStyle = finalPattern;

            if (_this.repeat) {
                ctx.save();
                ctx.translate(t.position.x + _this.translation, t.position.y);
                ctx.fillRect(t.position.x - _this.translation, 0, t.size.x + _this.translation, t.size.y);
                ctx.restore();
            } else {
                ctx.save();
                var temp = _this.translation % _GameJs2['default'].instance.resolution.x,
                    tempTwo = Math.sin(temp);
                ctx.translate(temp, tempTwo);
                ctx.fillRect(t.position.x + 22, t.position.y - 13, t.size.x, t.size.y);
                ctx.restore();
            }

            //ctx.translate(-t.position.x-this.translation, -t.position.y);
        };
    }

    return Parallax;
})(_ComponentJs2['default']);

exports['default'] = Parallax;
module.exports = exports['default'];

},{"./Component.js":3,"./Game.js":5}],10:[function(require,module,exports){
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

var Particle = (function (_Component) {
    _inherits(Particle, _Component);

    function Particle(options) {
        var _this = this;

        _classCallCheck(this, Particle);

        _get(Object.getPrototypeOf(Particle.prototype), "constructor", this).call(this, options);
        this.lifeTime = 500;
        this.startTime = Date.now();

        //this.r = 255;
        //this.g = 255;
        //this.b = 255;

        this.Update = function () {
            if (!_this.spriteRender && _this.gameObject) {
                _this.spriteRenderer = _this.gameObject.GetComponent("SpriteRenderer");
            }
            if (Date.now() >= _this.startTime + _this.lifeTime) {
                _this.gameObject.Destroy();
            } else {
                if (_this.spriteRenderer) {
                    _this.spriteRenderer.alpha = 1 - (Date.now() - _this.startTime) / _this.lifeTime;
                }
            }
        };
    }

    return Particle;
})(_ComponentJs2["default"]);

exports["default"] = Particle;
module.exports = exports["default"];

},{"./Component.js":3}],11:[function(require,module,exports){
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

var _GameObjectJs = require("./GameObject.js");

var _GameObjectJs2 = _interopRequireDefault(_GameObjectJs);

var _RectJs = require("./Rect.js");

var _RectJs2 = _interopRequireDefault(_RectJs);

var _SpriteRendererJs = require("./SpriteRenderer.js");

var _SpriteRendererJs2 = _interopRequireDefault(_SpriteRendererJs);

var _ParticleJs = require("./Particle.js");

var _ParticleJs2 = _interopRequireDefault(_ParticleJs);

var _TransformJs = require("./Transform.js");

var _TransformJs2 = _interopRequireDefault(_TransformJs);

var _ScrollingTerrainJs = require("./ScrollingTerrain.js");

var _ScrollingTerrainJs2 = _interopRequireDefault(_ScrollingTerrainJs);

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
        this.lastGrounded = false;

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
                    var targetCollider = object.GetComponent("Collider");
                    if (targetCollider !== null) {
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
                    }
                });
            }

            // apply motion
            if (!xCol) {
                _this.gameObject.transform.position.x += _this.velocity.x;
            }

            if (!yCol) {
                _this.gameObject.transform.position.y += _this.velocity.y;
                _this.lastGrounded = _this.grounded;
                _this.grounded = false;
            } else {
                // if would collide with floor, set the position to the floor
                _this.gameObject.transform.position.y = yFloorCeil;

                if (_this.gameObject.name === "Player" && _this.lastGrounded !== _this.grounded) {
                    // spawn a particle
                    var jumpParticle = new _GameObjectJs2["default"]();
                    jumpParticle.name = "JumpParticle";
                    jumpParticle.transform = new _TransformJs2["default"]({
                        position: new _Vector2Js2["default"](_this.gameObject.transform.position.x, _this.gameObject.transform.position.y),
                        size: new _Vector2Js2["default"](_this.gameObject.transform.size.x, _this.gameObject.transform.size.y)
                    });
                    jumpParticle.AddComponent(new _SpriteRendererJs2["default"]({
                        animated: true,
                        animations: [{ name: "puff", frames: [4, 5, 6] }],
                        playOnce: true
                    }));
                    jumpParticle.AddComponent(new _ParticleJs2["default"]());
                    jumpParticle.AddComponent(new _ScrollingTerrainJs2["default"]({ speed: _GameJs2["default"].instance.speed }));
                    jumpParticle.GetComponent("SpriteRenderer").ticksPerFrame = 7;
                    _GameJs2["default"].instance.objs.push(jumpParticle);
                }

                _this.lastGrounded = _this.grounded;
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

},{"./Component.js":3,"./Game.js":5,"./GameObject.js":6,"./Particle.js":10,"./Rect.js":13,"./ScrollingTerrain.js":15,"./SpriteRenderer.js":16,"./Transform.js":18,"./Vector2.js":19}],12:[function(require,module,exports){
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

},{"./Component.js":3,"./Game.js":5}],13:[function(require,module,exports){
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

},{"./Vector2.js":19}],14:[function(require,module,exports){
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

},{"./Component.js":3}],15:[function(require,module,exports){
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

},{"./Component.js":3,"./Game.js":5,"./Vector2.js":19}],16:[function(require,module,exports){
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
        this.sprite.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAAgCAMAAADKd1bWAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowNDgwMTE3NDA3MjA2ODExODIyQURCQTYzNTIyMEM3QiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1QTlDNDg4ODQyREYxMUU1QjgzMzkyMERFQzhDOTlBMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1QTlDNDg4NzQyREYxMUU1QjgzMzkyMERFQzhDOTlBMSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkE4MEI1QTRGQzY5RDQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ4MDExNzQwNzIwNjgxMTgyMkFEQkE2MzUyMjBDN0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4aaEb1AAAAFVBMVEX/5Kz4+PgA7NwAeP////8AAAD////k94KTAAAAB3RSTlP///////8AGksDRgAAApFJREFUeNrsmAmOwyAMRdk+9z/yBEzYDSFdRJVB7WgaQhQ/fy8g7MOH+AfwxQGLYzwRgLeazI8INiHxFQDQGjaaTwjo2jMAHLY6awsA4dpzAKAcB40HAfBy9wiE/7iv/skQuJ3FSfBSCCmlh7BLACwBqLL4KgEF6VwvZQCwSTkU1x1cZvFFgUBFAEJAbWN/BmDq4AmAyXooCOlDwAFQ27RD4rKDMQMwW68oAe5l/yKAmMVvRYgCPWMn+xMAzA3Isvi6QCgNkP3bAkhluuviLItjWSBEgMZO+yHRdbDzFQuACeKxQH4CQHLw8Y5tnSqyeGtEIZB+jOwLwHfnhYN7nYq3DGR/a0WxvlWQu6jD2A4A7VaKMq37BESY7gHI1zerXSsYCbwbgDnG6wByB8P2JeAHo4+0ngCUd7glgcD7Q8A4Bq8rQEUHMwCOvOC1z8gDSSDtZpfWhDyAt9sf/txQhcj9ExyswvlNb1fr3d/bysZNf5dfYoaPADAtgJbJqAoQAcpu4fiGafY0s5UFhbejp+j4p5kkAPojAEwHwCUCIt+vWoQ0Be64Aoo7yjgBaL/Vqx4QAiDlm/dJn7PTXIyBvBOMxQrsgQVUv0nKemGPoX5AOgterwKsHSWAeFsw3JglBWS9msuHbLVCt8hXtf4seIxQFgWQAJh65HKPP41N/y0CAGVCUgEXBHwlx5lJBw+4BcD0s3oFwJpqYiUJFrkaXgWsm3l1nBMhDXD3gG9nKtdmBOgbZk8kVcarli8DiOV7eOwH7kQ7mxgcK7EA4oubpoKVhnkAVe031Xp7uTUSTR6fKBSj6L62HDMBNC8fLmbztVCKebPQG4vOkcbYgumRmJ2tH7X0zMubfL7v3GXTafwJMACroLIQuZ9hvQAAAABJRU5ErkJggg==';
        this.frameSize = new _Vector2Js2["default"](32, 32);
        this.totalFrames = 4; // 5 with 0 based index
        this.frameIndex = 0;
        this.tickCount = 0;
        this.ticksPerFrame = 12;

        this.patternCanvas = document.createElement('canvas');
        this.patternCanvas.width = 8;
        this.patternCanvas.height = 8;
        this.patternContext = this.patternCanvas.getContext('2d');
        this.patternContext.drawImage(this.sprite, this.frameSize.x * .5, this.frameSize.y * .5, 8, 8, 0, 0, 8, 8);

        this.alpha = 1;

        this.playOnce = options.playOnce;

        this.Update = function () {
            if (_this.animated) {
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
                if (_this.playOnce && _this.frameIndex === _this.totalFrames - 1 && _this.tickCount === _this.ticksPerFrame) {
                    _this.gameObject.Destroy();
                }
            }
        };

        this.Draw = function (ctx) {
            ctx.globalAlpha = _this.alpha;
            var t = _this.gameObject.transform;
            if (_this.animated) {
                ctx.drawImage(_this.sprite, _this.animations[_this.currentAnimation].frames[_this.frameIndex] * _this.frameSize.x, 0, _this.frameSize.x, _this.frameSize.y, t.position.x, t.position.y, t.size.x, t.size.y);
            }
            if (_this.tiled) {
                //ctx.save();
                ctx.translate(t.position.x, t.position.y);
                var finalPattern = ctx.createPattern(_this.patternCanvas, "repeat");
                ctx.fillStyle = finalPattern;
                ctx.fillRect(0, 0, t.size.x, t.size.y);
                //ctx.restore();
                ctx.translate(-t.position.x, -t.position.y);
            }
            ctx.globalAlpha = 1;
        };
    }

    return SpriteRenderer;
})(_ComponentJs2["default"]);

exports["default"] = SpriteRenderer;
module.exports = exports["default"];

},{"./Component.js":3,"./Game.js":5,"./Vector2.js":19}],17:[function(require,module,exports){
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

var TextRenderer = (function (_Component) {
    _inherits(TextRenderer, _Component);

    function TextRenderer(options) {
        var _this = this;

        _classCallCheck(this, TextRenderer);

        _get(Object.getPrototypeOf(TextRenderer.prototype), 'constructor', this).call(this, options);
        this.text = options.text || "TEST";
        this.font = options.font || '10px sans-serif';
        this.fontWeight = options.fontWeight || 'normal';
        this.textAlign = options.textAlign || 'start';
        this.fillStyle = options.fillStyle || 'black';
        this.Update = function () {};
        this.Draw = function (ctx) {
            ctx.font = _this.font;
            ctx.fontWeight = _this.fontWeight;
            ctx.textAlign = _this.textAlign;
            ctx.fillStyle = _this.fillStyle;
            ctx.fillText(_this.text, _this.gameObject.transform.position.x, _this.gameObject.transform.position.y);
        };
    }

    return TextRenderer;
})(_ComponentJs2['default']);

exports['default'] = TextRenderer;
module.exports = exports['default'];

},{"./Component.js":3}],18:[function(require,module,exports){
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

},{"./Component.js":3}],19:[function(require,module,exports){
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
