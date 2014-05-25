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

    var rect = Rectangle.create(125, 125, 150, 150, '#2aa36f');
    rect.draw(context);
    canvasState.addShape(rect);

    var circle = Circle.create(125, 125, 150, '#4b269a');
    circle.draw(context);
    canvasState.addShape(circle);
}());
