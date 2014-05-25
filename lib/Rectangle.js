/*global Shape */
/*!
* Rectangle
*/
var Rectangle = Shape.extend({
    draw: function (context) {
        this._super(Rectangle, 'draw', [context, 'fillRect']);
    }
});
