/*!
 * A simple example of 2 rectangle draw and fill techniques
 */
(function () {
    'use strict';

    var canvas = document.getElementById('drag-and-drop'),
        canvasState,
        rectangle,
        context;

    if (!canvas || !canvas.getContext) {
        // Browser doesn't support the canvas tag.$
        return;
    }

    canvasState = CanvasState.create(canvas);

    // Create our rectangle again.
    context = canvas.getContext('2d');

    var rect = Rectangle.create(125, 125, 150, 150, '#FF0000');
    rect.draw(context);

    canvasState.addShape(rect);
}());
