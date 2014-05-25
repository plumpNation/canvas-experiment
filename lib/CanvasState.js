/*global BaseObject, console, window, Shape, document */
// Thanks to http://simonsarris.com/blog/510-making-html5-canvas-useful
// Modified slightly to use Object.create inheritance instead of classicical
// with prototype.

/*!
 * @requires Shape
 */
var CanvasState = BaseObject.extend({
    name: 'CanvasState',
    valid    : false,
    shapes   : [],
    dragging : false,
    selection: null,
    dragOffX : 0,
    dragOffY : 0,

    _context: null,
    _tick: null,
    _intervalLength: 30,
    _selectionColour: null,
    _selectionWidth: null,

    addShape: function (shape) {
        this.shapes.push(shape);
    },

    _draw: function _draw() {
        // if our state is invalid, redraw and validate!
        if (!this.valid) {
            var shape,
                i;

            this._context.clear();

            // ** Add stuff you want drawn at the bottom all the time here **

            // draw all shapes
            for (i = 0; i < this.shapes.length; i += 1) {
                shape = this.shapes[i];

                // We can skip the drawing of elements that have moved off the screen:
                if (shape.x > this._canvas.width || shape.y > this._canvas.height ||
                    shape.x + shape.w < 0 || shape.y + shape.h < 0) continue;

                this.shapes[i].draw(this._context);
            }

            // Draw selection border around Shape. Right now this is just a
            // stroke along the edge of the selected Shape.
            // @todo needs to be made a stroke around whatever object you want,
            // like a circle or a star.
            if (this.selection !== null) {
                this.selection.drawBorder(
                    this._context,
                    this._selectionColour,
                    this._selectionWidth
                );
            }

            // ** Add stuff you want drawn on top all the time here **

            this.valid = true;
        }
    },

    /**
     * Get the computed style of a DOM element
     */
    _getStyle: function (element, style) {
        return parseInt(
            document.defaultView.getComputedStyle(
                this._canvas,
                null
            )[style], 10) || 0;
    },

    /**
     * Get the computed style of a particular style rule on this._canvas
     */
    _getCanvasStyle: function (style) {
        return this._getStyle(this._canvas, style);
    },

    _getMouse: function(e) {
        var element = this._canvas,
            offsetX = 0,
            offsetY = 0,
            html = document.body.parentNode,
            htmlTop = html.offsetTop,
            htmlLeft = html.offsetLeft,
            stylePaddingLeft,
            stylePaddingTop,
            styleBorderLeft,
            styleBorderTop,
            mx,
            my;

        // Compute the total offset
        if (element.offsetParent !== undefined) {
            do {
                offsetX += element.offsetLeft;
                offsetY += element.offsetTop;
            } while ((element = element.offsetParent));
        }

        // Add padding and border style widths to offset
        // Also add the <html> offsets in case there's a position:fixed bar
        // @note: Do we really need these paddings and borders? (border-box)
        if (document.defaultView && document.defaultView.getComputedStyle) {
            stylePaddingLeft = this._getCanvasStyle('paddingLeft');
            stylePaddingTop  = this._getCanvasStyle('paddingTop');
            styleBorderLeft  = this._getCanvasStyle('borderLeftWidth');
            styleBorderTop   = this._getCanvasStyle('borderTopWidth');

            offsetX += stylePaddingLeft + styleBorderLeft + htmlLeft;
            offsetY += stylePaddingTop + styleBorderTop + htmlTop;
        }


        mx = e.pageX - offsetX;
        my = e.pageY - offsetY;

        // We return a simple javascript object (a hash) with x and y defined
        return {
            x: mx,
            y: my
        };
    },

    _onTick: function () {
        this._draw();
    },

    _startTick: function _startTick() {
        this._tick = window.setInterval(
            this._onTick.bind(this),
            this._intervalLength
        );
    },

    /**
     * Used to stop the setInterval we are starting to animate the shapes.
     */
    _stopTick: function _stopTick() {
        console.log('stopping');
        this.dragging = false;
        window.clearInterval(this._tick);
    },

    _stopDrag: function _stopDrag(e) {
        if (this.dragging) {
            console.log('dragging');

            var mouse = this._getMouse(e);

            // We don't want to drag the object by its top-left corner,
            // we want to drag from where we clicked.
            // Thats why we saved the offset and use it here
            this.selection.x = mouse.x - this.dragOffsetX;
            this.selection.y = mouse.y - this.dragOffsetY;
            this.valid = false; // Something's dragging so we must redraw
        }
    },

    _startDrag: function _startDrag(e) {
        var mouse = this._getMouse(e),
            mx = mouse.x,
            my = mouse.y,
            i;

        this._startTick();

        for (i = 0; i < this.shapes.length; i += 1) {
            if (this.shapes[i].contains(mx, my)) {

                // Keep track of where in the object we clicked
                // so we can move it smoothly (see mousemove)
                this.dragOffsetX = mx - this.shapes[i].x;
                this.dragOffsetY = my - this.shapes[i].y;
                this.dragging = true;

                // cache the shape
                this.selection = this.shapes[i];
                this.valid = false;
                return;
            }
        }

        // havent returned means we have failed to select anything.
        // If there was an object selected, we deselect it
        if (this.selection) {
            this.selection = null;
            this.valid = false; // Need to clear the old selection border
        }
    },

    _setupBindings: function (canvas) {
        this._canvas = canvas;

        // Fixes a problem where double clicking causes text to get selected on the canvas
        canvas.addEventListener('selectstart', function (e) {
            e.preventDefault();
            return false;
        }, false);

        canvas.addEventListener('mouseup', this._stopTick.bind(this), true);
        canvas.addEventListener('mousedown', this._startDrag.bind(this), true);
        canvas.addEventListener('mousemove', this._stopDrag.bind(this), true);

    },

    _construct: function (canvas, options) {
        this._setupBindings(canvas);
        this._context = canvas.getContext(options.contextType || '2d');

        this._selectionColour = options.selectionColour || '#CC0000';
        this._selectionWidth = options.selectionWidth || 2;
    }
});
