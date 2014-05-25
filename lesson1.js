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
    context.moveTo(200, 100);

    // Draw a few lines
    context.lineTo(100, 100);
    context.lineTo(200, 150);
    context.lineTo(100, 50);

    context.stroke();

    // To demonstrate the closePath, I'm adding another path using it.
    // IMPORTANT NOTE: We are beginning a new path...
    context.beginPath();

    // Move our 'drawing point'
    context.moveTo(400, 100);

    // Draw a few lines
    context.lineTo(300, 100);
    context.lineTo(400, 150);
    context.lineTo(300, 50);

    // Now look what happens when we closePath. It does exactly that,
    // i.e. it draws a line back to the point we started from.
    context.closePath();

    context.stroke();

}());
