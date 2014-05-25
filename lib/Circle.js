/*global Shape */
var Circle = Shape.extend({
    rad: null,

    _construct: function (x, y, w, fillStyle) {
        this.rad = w / 2;
        this._super(Circle, '_construct', [x, y, w, null, fillStyle]);
    },

    draw: function (context) {
        context.fillStyle = this.fillStyle;
        context.arc(this.x, this.y, this.w / 2, 0, 2 * Math.PI, false);
        context.fill();
    },

    /**
     * A circle has a very different origin, at it's centre and not at the top
     * left, meaning we must override the Shape contains function.
     *
     * @see http://rectangleworld.com/blog/archives/15
     * @see Shape.js
     * @param {number} mx Mouse X position
     * @param {number} my Mouse Y position
     */
    contains: function contains(mx, my) {
        var dx = mx - this.x,
            dy = my - this.y;

        //a "hit" will be registered if the distance away from the center is less than the radius of the circular object
        return (dx * dx + dy * dy < this.rad * this.rad);
    }
});
