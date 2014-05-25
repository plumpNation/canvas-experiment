/*global Shape */
/*!
* Rectangle
*/
var Rectangle = Shape.extend({
    draw: function (context) {
        this._super(Rectangle, 'draw', [context, 'fillRect']);
    }
});

var Circle = Shape.extend({
    _construct: function (x, y, w, fillStyle) {
        this._super(Circle, '_construct', [x, y, w, null, fillStyle]);
    },

    draw: function (ctx) {
        ctx.fillStyle = this.fillStyle;
        ctx.arc(this.x, this.y, this.w / 2, 0, 2 * Math.PI, false);
        ctx.fill();
    }
});
