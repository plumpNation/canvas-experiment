/*!
 * A simple example of 2 rectangle draw and fill techniques
 */
(function () {
    'use strict';

    var canvas = document.getElementById('drag-and-drop'),
        rectangle,
        context;

    if (!canvas || !canvas.getContext) {
        // Browser doesn't support the canvas tag.$
        return;
    }

    // Create our rectangle again.
    context = canvas.getContext('2d');

    var circle = Circle.create(125, 125, 150, '#FF0000');
    circle.draw(context);

    // Now to add drag and drop
    canvas.onclick = function (e) {
        console.log('clicked', e);
    };
}());
