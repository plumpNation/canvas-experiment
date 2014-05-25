/*global BaseObject */
/*!
 * Shape
 */
var Shape = BaseObject.extend({
    x: null,
    y: null,
    w: null,
    h: null,

    fillStyle: null,

    /**
     * The constructor function for the Shape object.
     *
     * @param {number} x X position of the Shape
     * @param {number} y Y position of the Shape
     * @param {number} w Width of the Shape
     * @param {number} h Height of the Shape
     */
    _construct: function _construct(x, y, w, h, fillStyle) {
        this.x = x || 0;
        this.y = y || 0;
        this.w = w || 1;
        this.h = h || 1;
        this.fillStyle = fillStyle || '#AAAAAA';
    },

    drawMethod: 'fillRect',

    /**
     * Draw our shape based on the parameters provided when constructing the
     * shape in the first place. This draw function is on the most part
     * redundant and is only really any good for rectangles at this point.
     */
    draw: function draw(context, drawMethod) {
        context.fillStyle = this.fillStyle;
        context[drawMethod || this.drawMethod](
            this.x,
            this.y,
            this.w,
            this.h
        );
    },

    /**
     * Determine if a point is inside the shape's bounds.
     * All we have to do is make sure the Mouse X,Y fall in the area between
     * the shape's X and (X + Height) and its Y and (Y + Height)
     *
     * @param {number} mx Mouse X position
     * @param {number} my Mouse Y position
     */
    contains: function contains(mx, my) {
        return  (this.x <= mx) &&
            (this.x + this.w >= mx) &&
            (this.y <= my) &&
            (this.y + this.h >= my);
    }
});
