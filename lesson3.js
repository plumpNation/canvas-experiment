/*!
 * LESSON 3
 *
 * A more complex example showing how to use ECMAscript 5 Object.create
 * function to create shape prototypes, and a canvas state to allow us to
 * drag and drop.
 *
 * In the new Polyfill.js file, you can see how we extend the 2d context
 * prototype in order to add a simple clear function.
 *
 * @see Shape.js, Circle.js, Rectangle.js, Polyfill.js, CanvasState.js
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

    canvasState = CanvasState.create(canvas, {
        selectionColor: 'black'
    });

    // Create our rectangle again.
    context = canvas.getContext('2d');

    var rect = Rectangle.create(125, 125, 150, 150, '#2aa36f');
    rect.draw(context);
    canvasState.addShape(rect);

    var circle = Circle.create(125, 125, 150, '#4b269a');
    circle.draw(context);
    canvasState.addShape(circle);
}());
