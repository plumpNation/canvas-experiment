/*global document */
/*!
 * LESSON 1
 *
 * The basics of all drawing software. Straight lines AKA the 'path'.
 */
(function () {
    var lines = document.getElementById('lines'),
        context = lines.getContext('2d');

    // Stroke is just the name of a line in graphics.
    context.strokeStyle = 'black';

    // As you can see, this is called lineWidth and not strokeWidth.
    // I have no idea why.
    context.lineWidth = 10;

    // Tell the context we are starting a new path.
    context.beginPath();

    // Move our 'drawing point'
    context.moveTo(150, 100);

    // Draw a few lines
    context.lineTo(50, 100);
    context.lineTo(150, 150);
    context.lineTo(50, 50);

    context.stroke();

    // To demonstrate the closePath, I'm adding another path using it.
    // IMPORTANT NOTE: We are beginning a new path...
    context.beginPath();

    // Move our 'drawing point'
    context.moveTo(350, 100);

    // Draw a few lines
    context.lineTo(250, 100);
    context.lineTo(350, 150);
    context.lineTo(250, 50);

    // Now look what happens when we closePath. It does exactly that,
    // i.e. it draws a line back to the point we started from.
    context.closePath();
    context.stroke();

    // One last example to show you the line joins and ends.
    // These must be set before stroke is called.
    // The end of the line is called a 'cap'.
    // Line joins can be miter, round, or bevel.
    // http://www.html5canvastutorials.com/tutorials/html5-canvas-line-joins/
    context.lineJoin = 'round'; // defaults to miter

    // Line joins can be butt, round, or square. Butt looks like square however
    // square ADDS a square ending whereas butt doesn't add anything.
    // http://www.html5canvastutorials.com/tutorials/html5-canvas-line-caps/
    context.lineCap = 'round'; // defaults to butt

    context.beginPath();
    // Move our 'drawing point'
    context.moveTo(550, 100);

    // Draw a few lines
    context.lineTo(450, 100);
    context.lineTo(550, 150);
    context.lineTo(450, 50);

    context.stroke();
}());
