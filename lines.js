/*!
 * drawing lines.
 */
(function () {
    var lines = document.getElementById('lines'),
        context = lines.getContext('2d');

    // Tell the context we are starting a new path.
    context.beginPath();

    // Set a couple of styles
    ctx.lineWidth = '3';
    ctx.strokeStyle = 'blue';

    // Move our 'drawing point'
    context.moveTo(200, 100);

    // Draw a few lines
    context.lineTo(100, 100);
    context.lineTo(200, 150);
    context.lineTo(100, 50);
}());
