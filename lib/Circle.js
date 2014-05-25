/*global Shape */
var Circle = Shape.extend({
    _construct: function (x, y, w, fillStyle) {
        this._super(Circle, '_construct', [x, y, w, null, fillStyle]);
    },

    draw: function (context) {
        console.log(this.x);
        context.fillStyle = this.fillStyle;
        context.arc(this.x, this.y, this.w / 2, 0, 2 * Math.PI, false);
        context.fill();
    }
});
