(function () {
    var canvas = document.getElementById('test'),
        context;

    if (!canvas || !canvas.getContext) {
        // Browser doesn't support the canvas tag.
        return;
    }

    context = canvas.getContext('2d');
}());
