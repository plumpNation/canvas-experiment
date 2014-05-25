/*!
 * LESSON 2
 *
 * Built in functions, in this case, the rectangle.
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
    // There is a simple function on the context to create the rectangle and
    // fill it immediately.
    // As the name suggests 'fillRect' will fill a rectangle, and in this case
    // we want that to be with a colour.
    // This means we must choose the colour first, much like we would in
    // photoshop or paint. i.e. Choose the colour, THEN fill the selection.
    // http://www.w3schools.com/tags/canvas_fillstyle.asp
    // context.fillStyle = color|gradient|pattern;
    context.fillStyle = 'rgb(0, 0, 200)';
    // http://www.w3schools.com/tags/canvas_fillrect.asp
    // context.fillRect(x, y, width, height);
    context.fillRect(50, 50, 150, 150);

    // To fill with an image, we use the context.createPattern function
    // https://developer.mozilla.org/samples/canvas-tutorial/4_11_canvas_createpattern.html
    // context.createPattern(imgSrc, repeatType);
    image = new Image();
    image.src = 'images/clock.jpg';
    image.onload = function () {
        pattern = context.createPattern(image, 'no-repeat');
        context.fillStyle = pattern;
        context.fillRect(100, 100, 150, 150);
    };


    // A more verbose and more flexible approach is to use the 'rect' function,
    // which will simply draw the rect path for us, and nothing else.
    // If we want a fill we need to specify that afterwards.
    context.rect(10, 10, 100, 50);

    // Again, define a fillStyle. We already have one in this scope, it's just
    // that we want to see the different rectangles on the canvas.
    context.fillStyle = 'rgba(200, 0, 0, 0.5)';
    context.fill();

    // We are still going to target the same path if we apply another style
    // here in the same scope.
    // This means we can use the same path to add a stroke too,
    context.strokeStyle = 'yellow';
    context.lineWidth = 5;
    context.stroke();
}());
