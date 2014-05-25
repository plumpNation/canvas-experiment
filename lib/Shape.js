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

    _construct: function _construct(x, y, w, h, fillStyle) {
        this.x = x || 0;
        this.y = y || 0;
        this.w = w || 1;
        this.h = h || 1;
        this.fillStyle = fillStyle || '#AAAAAA';
    },

    drawMethod: 'fillRect',

    draw: function (context, drawMethod) {
        context.fillStyle = this.fillStyle;
        context[drawMethod || this.drawMethod](
            this.x,
            this.y,
            this.w,
            this.h
        );
    }
});
