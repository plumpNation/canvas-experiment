/*!
 * A simple example of 2 rectangle draw and fill techniques
 */
(function () {
    'use strict';

    var canvas = document.getElementById('rect'),
        pattern,
        image,
        context;

    if (!canvas || !canvas.getContext) {
        // Browser doesn't support the canvas tag.
        return;
    }

    // A 'context' is like a 'renderer'.
    // We could use WebGL here, but we're keeping it simple with the standard
    // 2d renderer.
    context = canvas.getContext('2d');

    // The context is what is used to actually draw.
    // One of the simplest shapes to draw is a rectangle.
    // We can use the context.rect function for this.
    context.rect(10, 10, 100, 50);
    // The problem here is that the rectangle has no 'fill', or flat colour.
    // We must create a fill and add it to the just drawn rectangle.
    context.fillStyle = 'rgb(0, 0, 200)';
    context.fill();

    // There is also a simpler function on the context to create the rectangle and fill it immediately.
    // As the name suggests the function will 'fill' a rectangle, and in this case we want that
    // to be with a colour.
    // This means we must choose the colour first, much like we would in photoshop or paint.
    // i.e. Choose the colour, THEN fill the selection.

    // http://www.w3schools.com/tags/canvas_fillstyle.asp
    // context.fillStyle = color|gradient|pattern;
    context.fillStyle = 'rgba(200, 0, 0, 0.5)';
    // http://www.w3schools.com/tags/canvas_fillrect.asp
    // context.fillRect(x, y, width, height);
    context.fillRect(50, 50, 150, 150);

    // To fill with an image, we use the context.createPattern function
    // https://developer.mozilla.org/samples/canvas-tutorial/4_11_canvas_createpattern.html
    // context.createPattern(imgSrc, repeatType);
    image = new Image();
    image.src = 'clock.jpg';
    image.onload = function () {
        pattern = context.createPattern(image, 'no-repeat');
        context.fillStyle = pattern;
        context.fillRect(100, 100, 150, 150);
    };
}());
