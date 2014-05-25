/*global Shape */
/*!
* Rectangle
*/
var Rectangle = Shape.extend({
    name: 'Rectangle',

    /**
     * Overriding the Shape draw to feed the fillRect function to it.
     */
    draw: function (context) {
        this._super(Rectangle, 'draw', [context, 'fillRect']);
    }
});
