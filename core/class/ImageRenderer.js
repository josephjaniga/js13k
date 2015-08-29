import Component from "./Component.js";
import Vector2 from "./Vector2.js";
import Game from "./Game.js";

export default class ImageRenderer extends Component{
    constructor(options){
        super(options);
        this.componentName = "ImageRenderer";

        this.image = new Image();
        this.image.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIUAAAA3BAMAAADQ9pRxAAAAD1BMVEUAAAAtNhlScyPA3YuTuWMW5n24AAAAAXRSTlMAQObYZgAABClJREFUSMfclIGRayEIRXc7WNAGMGmAYANG+q/p34tvkuxsB5+ZyFPhcFEnX/+dyct+vs74Yd/Cn1yRP58bsNf3H/tEvPE1uRZehX+pMA7vhCsX7gPMnSvg+40udosIk6BzCRgSuIgd0cPuh/vXiiGyN9N60LyAzCbSAyO/wSD3t9jmHC9GTIT3XcnaMhMojTKV3LdbaK821Lw7ycxmBDBshQJygpGwLdqX9H3kgKpGJBheDA2pUpPiaBdjxqkMs+aoOKyDMROsw+hgBPfhMGdV1wYSGVcrS2T6GMOEDB2jIyRliIQKDYxNPwqlWJDRFpRfjLan2GGIbVfBRwPDdFjbqkST4cVwzLmOT97Wxeh7KZQjxNR4mCwPxgIzqrralp5kGMXByFA3ZVodhy9VI4MH6dacRwWpiF1k+BCIyCAsEQPf3CFJ3oxYohILv7jVG4OqhTyWDQxEPyz3ESR3LLFID9HeD6NTPxvSgHmrEeGdDHZYC9Z3XAzWmYJGHWnFUDIGGX3PJGNmouRNEnMvMbnRT7IuJN93BnjDMNy3fDCeS00SwSgBM+EsJwTJYUAIGAEGogJ+dG7U38WbgbQOhvenEYOQmNSbS9IVUqMYsnKBIYMlL4ZcjHOpK+gBsY1yGQ49KhsMyYsBO2I3axTD98UQUTKUHjbzxi0DuTOENwMvyjc24dnLi8GHO+sZKnXQmraZhkoQAEjdCUjwgA1tnOdTmp9erLHp+RDMwWiEeV+3SS2HaGRACC+dRgZ6W9IuHaOHe5/1MB6xegS22jMm8NSqd7E6Q5zqPoxBRlt1T2QItpCd3oO2aja1M7seJwT5YUiS0dABlNth+GEgMhyMnJuMSeKDSouhOdskSxkIMIIylkiQwTdWDE0YGDkzVZIe6XIY41/tZYCjQAxC0XgDIXsB2Kvs/c+0fL6FEmsmmcSvjg6lDzqCHaMKwiS5mGD85s8dGlkW44Fy0BiQJfwmWraLRo2AAWgEdvbhD+JFRcLSDBdIPWSsDRXPI/IouLrFQdkKUSO4tn+5N3CyhQGKUaJgobvTkIsBg34KNmJw+2MmHEvPPEW587wZhkMqT3Tbo0xaJOKNnyi+Y4aYmZvRE+xPW7YyD7ikGI6MXWawQ3LUc7IZjKhp3xN5jJkY5Jx2bRQ3cI5TNL5cxt3GilHBeOzz5+GGplI+CsFL06mWUDoj5CCC5FpcwllM/a6sEhEIRee0sSwupTYYbDGLlwMgRWiWz87L4n9j4KVg1NhqCgaNh4fU0o8+Nq6HMxftcSj8zclYk9LDi9HfC5tHNZ/b9ciY1YbFcGnGbBeLMRWbeTA+KUaDTcZeOfrqdczaGdqXFQbka95xqrZJUObqOhlVCTmeuRI3q53rJQPLbYa4F8MXI0Xo4Z/BxxpTH7ZT08kNETF1G3CtmvFl/QOLpEU6gnTAeQAAAABJRU5ErkJggg==";

        this.alpha = 1;

        this.Draw = (ctx)=>{
            ctx.globalAlpha = this.alpha;
            var t = this.gameObject.transform;
            ctx.drawImage(
                this.image,
                t.position.x,
                t.position.y,
                t.size.x,
                t.size.y
            );
            ctx.globalAlpha = 1;
        };

    }
}