import Component from "./Component.js";
import Vector2 from "./Vector2.js";
import Game from "./Game.js";

export default class ScoreDisplay extends Component{
    constructor(options){
        super(options);

        this.tensMinutes = 0;
        this.minutes = 0;
        this.tensSeconds = 0;
        this.seconds = 0;

        this.numberSprite = new Image();
        this.numberSprite.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIQAAAAQAgMAAACq3T9hAAAACVBMVEUAAAAAAADA3YtcMJ56AAAAAXRSTlMAQObYZgAAASdJREFUKM89kUuKwzAQREsL5wYWaE5j30AL10Dv1QPOabxwAtnPZnTKqZZJTNOoy4+iP0hcMEdWbKmSVQ+SlwJ9U6+wyIqWjns/9Lj3v0sBgcwz7ZEVIpw18yBN5fi1wFafXpHL2gax2FqBKCWm5wKfLRscNmMQvQpCagVNYhDNSjE0lMQgfngKQjoLW4i7CC9zwSa8n87HvjZBSEdWCQMRHijA5PLQCIQLwnTIw7ADInwQ3yfg5AOwHY5btWh2EJfHtFfAZA6UMM+LcuYLfHvkh+AiQg01SFmUp27RqW8mxSrm4dHg4THmT9S0Y2MiXA50EZ5aKD42OTYW+55tczI/Y0gby0YL/Ta2Hjf76r+aU82ONVQpIj6Xi7vP3EiOok7X0Td8rv8PJl+BaBKlx8oAAAAASUVORK5CYII=";

        this.frameSize = new Vector2(12,16);
        this.outputSize = new Vector2(6,8);

        this.Update = ()=>{
            var g = Game.instance,
                s = 1000,
                m = s * 60,
                minutes = (g.currentScore / m)|0,
                seconds = g.currentScore % m;

            this.tensMinutes = (minutes/10)|0;
            this.minutes = (minutes%10)|0;
            this.tensSeconds = (seconds/10)|0;
            this.seconds = (seconds%10)|0;
        };

        this.Draw = (ctx)=>{

            // tens of minutes
            ctx.drawImage(
                this.numberSprite,
                this.tensMinutes * this.frameSize.x,
                0,
                this.frameSize.x,
                this.frameSize.y,
                3,
                3,
                this.outputSize.x,
                this.outputSize.y
            );

            // minutes
            ctx.drawImage(
                this.numberSprite,
                this.minutes * this.frameSize.x,
                0,
                this.frameSize.x,
                this.frameSize.y,
                3+this.outputSize.x * 1,
                3,
                this.outputSize.x,
                this.outputSize.y
            );

            // colon
            ctx.drawImage(
                this.numberSprite,
                10 * this.frameSize.x,
                0,
                this.frameSize.x,
                this.frameSize.y,
                3+this.outputSize.x * 2,
                3,
                this.outputSize.x,
                this.outputSize.y
            );

            // tends of seconds
            ctx.drawImage(
                this.numberSprite,
                this.tensSeconds * this.frameSize.x,
                0,
                this.frameSize.x,
                this.frameSize.y,
                3+this.outputSize.x * 3,
                3,
                this.outputSize.x,
                this.outputSize.y
            );

            // seconds
            ctx.drawImage(
                this.numberSprite,
                this.seconds * this.frameSize.x,
                0,
                this.frameSize.x,
                this.frameSize.y,
                3+this.outputSize.x * 4,
                3,
                this.outputSize.x,
                this.outputSize.y
            );
        };
    }

}