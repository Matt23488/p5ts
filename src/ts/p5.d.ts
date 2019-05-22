interface Window {

    /**
     * Called directly before setup(), the preload() function is used to handle
     * asynchronous loading of external files in a blocking way. If a preload
     * function is defined, setup() will wait until any load calls within have
     * finished. Nothing besides load calls (loadImage, loadJSON, loadFont,
     * loadStrings, etc.) should be inside the preload function. If asynchronous
     * loading is preferred, the load methods can instead be called in setup() or
     * anywhere else with the use of a callback parameter.
     * 
     * By default the text "loading..." will be displayed. To make your own
     * loading page, include an HTML element with id "p5_loading" in your
     * page. More information at http://bit.ly/2kQ6Nio.
     */
    preload(): void;

    /**
     * The setup() function is called once when the program starts. It's used to
     * define initial environment properties such as screen size and background
     * color and to load media such as images and fonts as the program starts.
     * There can only be one setup() function for each program and it shouldn't
     * be called again after its initial execution.
     * 
     * Note: Variables declared within setup() are not accessible within other
     * functions, including draw().
     */
    setup(): void;

    /**
     * Called directly after setup(), the draw() function continuously executes
     * the lines of code contained inside its block until the program is stopped or
     * noLoop() is called. Note if noLoop() is called in setup(), draw() will
     * still be executed once before stopping. draw() is called automatically and
     * should never be called explicitly.
     * 
     * It should always be controlled with noLoop(), redraw() and loop().
     * After noLoop() stops the code in draw() from executing, redraw()
     * causes the code inside draw() to execute once, and loop() will cause the
     * code inside draw() to resume executing continuously.
     * 
     * The number of times draw() executes in each second may be controlled
     * with the frameRate() function.
     * 
     * There can only be one draw() function for each sketch, and draw() must
     * exist if you want the code to run continuously, or to process events such as
     * mousePressed(). Sometimes, you might have an empty call to draw() in
     * your program.
     * 
     * It is important to note that the drawing coordinate system will be reset at
     * the beginning of each draw() call. If any transformations are performed
     * within draw() (ex: scale, rotate, translate), their effects will be undone at
     * the beginning of draw(), so transformations will not accumulate over
     * time. On the other hand, styling applied (ex: fill, stroke, etc) will remain in
     * effect.
     */
    draw(): void;
    mousePressed(): void;
    mouseReleased(): void;
    mouseClicked(): void;

    /**
     * The windowResized() function is called once every time the browser
     * window is resized. This is a good place to resize the canvas or do any
     * other adjustments to accommodate the new window size.
     */
    windowResized(): void;
}

// TYPE ALIASES

// CONSTANT TYPES
interface P5ColorMode {}
interface P5ArcMode {}
interface P5EllipseMode {}
interface P5RectMode {}
interface P5StrokeCap {}
interface P5StrokeJoin {}
interface P5ShapeKind {}
interface P5EndShapeMode {}
interface P5AngleMode {}
interface P5CursorType {}
interface P5Renderer {}
interface P5BlendMode {}

// CONSTANTS
declare var RGB: P5ColorMode;
declare var HSB: P5ColorMode;
declare var HSL: P5ColorMode;
declare var CHORD: P5ArcMode;
declare var PIE: P5ArcMode;
declare var OPEN: P5ArcMode;
declare var CENTER: P5EllipseMode & P5RectMode;
declare var RADIUS: P5EllipseMode & P5RectMode;
declare var CORNER: P5EllipseMode & P5RectMode;
declare var CORNERS: P5EllipseMode & P5RectMode;
declare var SQUARE: P5StrokeCap;
declare var PROJECT: P5StrokeCap;
declare var ROUND: P5StrokeCap & P5StrokeJoin;
declare var MITER: P5StrokeJoin;
declare var BEVEL: P5StrokeJoin;
declare var POINTS: P5ShapeKind;
declare var LINES: P5ShapeKind;
declare var TRIANGLES: P5ShapeKind;
declare var TRIANGLE_FAN: P5ShapeKind;
declare var TRIANGLE_STRIP: P5ShapeKind;
declare var QUADS: P5ShapeKind;
declare var QUAD_STRIP: P5ShapeKind;
declare var CLOSE: P5EndShapeMode;
declare var DEGREES: P5AngleMode;
declare var RADIANS: P5AngleMode;
declare var ARROW: P5CursorType;
declare var CROSS: P5CursorType;
declare var HAND: P5CursorType;
declare var MOVE: P5CursorType;
declare var TEXT: P5CursorType;
declare var WAIT: P5CursorType;
declare var P2D: P5Renderer;
declare var WEBGL: P5Renderer;
declare var BLEND: P5BlendMode;
declare var DARKEST: P5BlendMode;
declare var LIGHTEST: P5BlendMode;
declare var DIFFERENCE: P5BlendMode;
declare var MULTIPLY: P5BlendMode;
declare var EXCLUSION: P5BlendMode;
declare var SCREEN: P5BlendMode;
declare var REPLACE: P5BlendMode;
declare var OVERLAY: P5BlendMode;
declare var HARD_LIGHT: P5BlendMode;
declare var SOFT_LIGHT: P5BlendMode;
declare var DODGE: P5BlendMode;
declare var BURN: P5BlendMode;
declare var ADD: P5BlendMode;
declare var SUBTRACT: P5BlendMode;

// interface P5Static {
//     Color: {
//         toString(format?: "#rgb" | "$rgba" | "#rrggbb" | "#rrggbbaa" | "rgb" | "hsb" | "hsl" | "rgba" | "hsba" | "hsla" | "rgb%" | "hsb%" | "hsl%" | "rgba%" | "hsba%" | "hsla%"): string;
//         setRed(red: number): void;
//         setGreen(green: number): void;
//         setBlue(blue: number): void;
//         setAlpha(alpha: number): void;
//         _getRed(): number;
//         _getGreen(): number;
//         _getBlue(): number;
//         _getAlpha(): number;
//     };
// }
// declare var p5: P5Static;
declare namespace p5 {
    interface Color {
        toString(format?: "#rgb" | "$rgba" | "#rrggbb" | "#rrggbbaa" | "rgb" | "hsb" | "hsl" | "rgba" | "hsba" | "hsla" | "rgb%" | "hsb%" | "hsl%" | "rgba%" | "hsba%" | "hsla%"): string;
        setRed(red: number): void;
        setGreen(green: number): void;
        setBlue(blue: number): void;
        setAlpha(alpha: number): void;
        _getRed(): number;
        _getGreen(): number;
        _getBlue(): number;
        _getAlpha(): number;
    }

    // TODO:
    interface Image {}

    // TODO:
    interface Geometry {}

    // TODO:
    interface TypedDict<T extends number | string> {
        size(): number;
        hasKey(key: T): boolean;
        get(the: T): T;
        set(key: T, value: T): void;
        create(key: T, value: T): void;
        create(obj: Object): void;
        clear(): void;
        remove(key: T): void;
        print(): void;
        saveTable(name?: string): void;
        saveJSON(name?: string): void;
    }

    interface StringDict extends TypedDict<string> {
    }

    interface NumberDict extends TypedDict<number> {
        add(key: number, value: number): void;
        sub(key: number, value: number): void;
        mult(key: number, value: number): void;
        div(key: number, value: number): void;
        minValue(): number;
        maxValue(): number;
        minKey(): number;
        maxKey(): number;
    }

    interface Renderer {}

    interface Element {
        // TODO:
        background(todo: number): void;
        ellipse(todo1: number, todo2: number, todo3: number, todo4: number): void;
    }

    /**
     * Thin wrapper around a renderer, to be used for creating a graphics buffer
     * object. Use this class if you need to draw into an off-screen graphics
     * buffer. The two parameters define the width and height in pixels. The
     * fields and methods for this class are extensive, but mirror the normal
     * drawing API for p5.
     */
    interface Graphics extends Element {

        /**
         * Resets certain values such as those modified by functions in the Transform
         * category and in the Lights category that are not automatically reset with
         * graphics buffer objects. Calling this in draw() will copy the behavior of
         * the standard canvas.
         */
        reset(): void;

        /**
         * Removes a Graphics object from the page and frees any resources
         * associated with it.
         */
        remove(): void;

        
    }

    interface Vector {
        x: number;
        y: number;
        add(todo1: number, todo2: number): p5.Vector;
    }
    namespace Vector {
        var fromAngle: {
            (todo1: number, todo2: number): p5.Vector;
        };
        var fromAngles: {
            (a: number, b: number, c: number): p5.Vector;
        };
    }

    /**
     * Allows for the friendly error system (FES) to be turned off when creating
     * a sketch, which can give a significant boost to performance when needed.
     * See [disabling the friendly error system](https://github.com/processing/p5.js/wiki/Optimizing-p5.js-Code-for-Performance#disable-the-friendly-error-system-fes).
     */
    var disableFriendlyErrors: boolean;
}

// COLOR
// interface P5Color {
//     toString(format?: "#rgb" | "$rgba" | "#rrggbb" | "#rrggbbaa" | "rgb" | "hsb" | "hsl" | "rgba" | "hsba" | "hsla" | "rgb%" | "hsb%" | "hsl%" | "rgba%" | "hsba%" | "hsla%"): string;
//     setRed(red: number): void;
//     setGreen(green: number): void;
//     setBlue(blue: number): void;
//     setAlpha(alpha: number): void;
//     _getRed(): number;
//     _getGreen(): number;
//     _getBlue(): number;
//     _getAlpha(): number;
// }

// COLOR: Creating & Reading
/**
 * Extracts the alpha value from a color or pixel array.
 * @param color p5.Color object, color components, or CSS color
 * @returns the alpha value
 */
declare function alpha(color: p5.Color | number[] | string): number;

/**
 * Extracts the blue value from a color or pixel array.
 * @param color p5.Color object, color components, or CSS color
 * @returns the blue value
 */
declare function blue(color: p5.Color | number[] | string): number;

/**
 * Extracts the HSB brightness value from a color or pixel array.
 * @param color p5.Color object, color components, or CSS color
 * @returns the brightness value
 */
declare function brightness(color: p5.Color | number[] | string): number;

declare var color: {
    /**
     * Creates colors for storing in variables of the color datatype. The
     * parameters are interpreted as RGB or HSB values depending on the
     * current colorMode(). The default mode is RGB values from 0 to 255 and,
     * therefore, the function call color(255, 204, 0) will return a bright yellow
     * color.
     * 
     * Note that if only one value is provided to color(), it will be interpreted as
     * a grayscale value. Add a second value, and it will be used for alpha
     * transparency. When three values are specified, they are interpreted as
     * either RGB or HSB values. Adding a fourth value applies alpha
     * transparency.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * @param gray number specifying value between white and black
     * @param alpha alpha value relative to current color range (default is 0-255)
     * @returns resulting color
     */
    (gray: number, alpha?: number): p5.Color;
    
    /**
     * Creates colors for storing in variables of the color datatype. The
     * parameters are interpreted as RGB or HSB values depending on the
     * current colorMode(). The default mode is RGB values from 0 to 255 and,
     * therefore, the function call color(255, 204, 0) will return a bright yellow
     * color.
     * 
     * Note that if only one value is provided to color(), it will be interpreted as
     * a grayscale value. Add a second value, and it will be used for alpha
     * transparency. When three values are specified, they are interpreted as
     * either RGB or HSB values. Adding a fourth value applies alpha
     * transparency.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * @param v1 red or hue value relative to the current color range
     * @param v2 green or saturation value relative to the current color range
     * @param v3 blue or brightness value relative to the current color range
     * @param alpha alpha value relative to current color range (default is 0-255)
     * @returns resulting color
     */
    (v1: number, v2: number, v3: number, alpha?: number): p5.Color;
    
    /**
     * Creates colors for storing in variables of the color datatype. The
     * parameters are interpreted as RGB or HSB values depending on the
     * current colorMode(). The default mode is RGB values from 0 to 255 and,
     * therefore, the function call color(255, 204, 0) will return a bright yellow
     * color.
     * 
     * Note that if only one value is provided to color(), it will be interpreted as
     * a grayscale value. Add a second value, and it will be used for alpha
     * transparency. When three values are specified, they are interpreted as
     * either RGB or HSB values. Adding a fourth value applies alpha
     * transparency.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * @param value a color string
     * @returns resulting color
     */
    (value: string): p5.Color;
    
    /**
     * Creates colors for storing in variables of the color datatype. The
     * parameters are interpreted as RGB or HSB values depending on the
     * current colorMode(). The default mode is RGB values from 0 to 255 and,
     * therefore, the function call color(255, 204, 0) will return a bright yellow
     * color.
     * 
     * Note that if only one value is provided to color(), it will be interpreted as
     * a grayscale value. Add a second value, and it will be used for alpha
     * transparency. When three values are specified, they are interpreted as
     * either RGB or HSB values. Adding a fourth value applies alpha
     * transparency.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * @param values an array containing the red, green, blue, and alpha components of the color
     * @returns resulting color
     */
    (values: number[]): p5.Color;
    
    /**
     * Creates colors for storing in variables of the color datatype. The
     * parameters are interpreted as RGB or HSB values depending on the
     * current colorMode(). The default mode is RGB values from 0 to 255 and,
     * therefore, the function call color(255, 204, 0) will return a bright yellow
     * color.
     * 
     * Note that if only one value is provided to color(), it will be interpreted as
     * a grayscale value. Add a second value, and it will be used for alpha
     * transparency. When three values are specified, they are interpreted as
     * either RGB or HSB values. Adding a fourth value applies alpha
     * transparency.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * @param color a color object
     * @returns resulting color
     */
    (color: p5.Color): p5.Color;
};

declare var green: {
    /**
     * Extracts the green value from a color or pixel array.
     * @param color p5.Color object, color components, or CSS color
     * @returns the green value
     */
    (color: p5.Color | number[] | string): number;
};

declare var hue: {
    /**
     * Extracts the hue value from a color or pixel array.
     * @param color p5.Color object, color components, or CSS color
     * @returns the hue value
     */
    (color: p5.Color | number[] | string): number;
};

declare var lerpColor: {
    /**
     * Blends two colors to find a third color somewhere between them. The amt
     * parameter is the amount to interpolate between the two values where 0.0
     * equal to the first color, 0.1 is very near the first color, 0.5 is halfway in
     * between, etc. An amount below 0 will be treated as 0. Likewise, amounts
     * above 1 will be capped at 1. This is different from the behavior of lerp(),
     * but necessary because otherwise numbers outside the range will produce
     * strange and unexpected colors.
     * 
     * The way that colours are interpolated depends on the current color mode.
     * @param c1 interpolate from this color
     * @param c2 interpolate to this color
     * @param amt number between 0 and 1
     * @returns interpolated color
     */
    (c1: p5.Color, c2: p5.Color, amt: number): p5.Color;
};

declare var lightness: {
    /**
     * Extracts the lightness value from a color or pixel array.
     * @param color p5.Color object, color components, or CSS color
     * @returns the lightness value
     */
    (color: p5.Color | number[] | string): number;
};

declare var red: {
    /**
     * Extracts the red value from a color or pixel array.
     * @param color p5.Color object, color components, or CSS color
     * @returns the red value
     */
    (color: p5.Color | number[] | string): number;
};

declare var saturation: {
    /**
     * Extracts the saturation value from a color or pixel array.
     * @param color p5.Color object, color components, or CSS color
     * @returns the saturation value
     */
    (color: p5.Color | number[] | string): number;
};

// COLOR: Setting
declare var background: {
    
    /**
     * The background() function sets the color used for the background of the
     * p5.js canvas. The default background is transparent. This function is
     * typically used within draw() to clear the display window at the beginning
     * of each frame, but it can be used inside setup() to set the background on
     * the first frame of animation or if the background need only be set once.
     * 
     * The color is either specified in terms of the RGB, HSB, or HSL color
     * depending on the current colorMode. (The default color space is RGB,
     * with each value in the range from 0 to 255). The alpha range by default is
     * also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5.Color object can also be provided to set the background color.
     * 
     * A p5.Image can also be provided to set the background image.
     * @param color any value created by the color() function
     */
    (color: p5.Color): void;
    
    /**
     * The background() function sets the color used for the background of the
     * p5.js canvas. The default background is transparent. This function is
     * typically used within draw() to clear the display window at the beginning
     * of each frame, but it can be used inside setup() to set the background on
     * the first frame of animation or if the background need only be set once.
     * 
     * The color is either specified in terms of the RGB, HSB, or HSL color
     * depending on the current colorMode. (The default color space is RGB,
     * with each value in the range from 0 to 255). The alpha range by default is
     * also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5.Color object can also be provided to set the background color.
     * 
     * A p5.Image can also be provided to set the background image.
     * @param colorString color string, possible formats include: integer rgb() or rgba(), percentage rgb() or rgba(), 3-digit hex, 6-digit hex
     * @param alpha opacity of the background relative to current color range
     */
    (colorString: string, alpha?: number): void;
    
    /**
     * The background() function sets the color used for the background of the
     * p5.js canvas. The default background is transparent. This function is
     * typically used within draw() to clear the display window at the beginning
     * of each frame, but it can be used inside setup() to set the background on
     * the first frame of animation or if the background need only be set once.
     * 
     * The color is either specified in terms of the RGB, HSB, or HSL color
     * depending on the current colorMode. (The default color space is RGB,
     * with each value in the range from 0 to 255). The alpha range by default is
     * also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5.Color object can also be provided to set the background color.
     * 
     * A p5.Image can also be provided to set the background image.
     * @param gray specifies a value between white and black
     * @param alpha opacity of the background relative to current color range
     */
    (gray: number, alpha?: number): void;
    
    /**
     * The background() function sets the color used for the background of the
     * p5.js canvas. The default background is transparent. This function is
     * typically used within draw() to clear the display window at the beginning
     * of each frame, but it can be used inside setup() to set the background on
     * the first frame of animation or if the background need only be set once.
     * 
     * The color is either specified in terms of the RGB, HSB, or HSL color
     * depending on the current colorMode. (The default color space is RGB,
     * with each value in the range from 0 to 255). The alpha range by default is
     * also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5.Color object can also be provided to set the background color.
     * 
     * A p5.Image can also be provided to set the background image.
     * @param v1 red or hue value (depending on the current color mode)
     * @param v2 green or saturation value (depending on the current color mode)
     * @param v3 blue or brightness value (depending on the current color mode)
     * @param a opacity of the background relative to current color range (default is 0-255)
     */
    (v1: number, v2: number, v3: number, a?: number): void;
    
    /**
     * The background() function sets the color used for the background of the
     * p5.js canvas. The default background is transparent. This function is
     * typically used within draw() to clear the display window at the beginning
     * of each frame, but it can be used inside setup() to set the background on
     * the first frame of animation or if the background need only be set once.
     * 
     * The color is either specified in terms of the RGB, HSB, or HSL color
     * depending on the current colorMode. (The default color space is RGB,
     * with each value in the range from 0 to 255). The alpha range by default is
     * also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5.Color object can also be provided to set the background color.
     * 
     * A p5.Image can also be provided to set the background image.
     * @param values an array containing the red, green, blue and alpha components of the color
     */
    (values: number[]): void;

    /**
     * The background() function sets the color used for the background of the
     * p5.js canvas. The default background is transparent. This function is
     * typically used within draw() to clear the display window at the beginning
     * of each frame, but it can be used inside setup() to set the background on
     * the first frame of animation or if the background need only be set once.
     * 
     * The color is either specified in terms of the RGB, HSB, or HSL color
     * depending on the current colorMode. (The default color space is RGB,
     * with each value in the range from 0 to 255). The alpha range by default is
     * also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5.Color object can also be provided to set the background color.
     * 
     * A p5.Image can also be provided to set the background image.
     * @param image image created with loadImage() or createImage(), to set as background (must be same size as the sketch window)
     * @param alpha opacity of the background relative to current color range (default is 0-255)
     */
    (image: p5.Image, alpha?: number): void;
};

declare var clear: {

    /**
     * Clears the pixels within a buffer. This function only clears the canvas. It
     * will not clear objects created by createX() methods such as
     * createVideo() or createDiv(). Unlike the main graphics context, pixels
     * in additional graphics areas created with createGraphics() can be
     * entirely or partially transparent. This function clears everything to make
     * all of the pixels 100% transparent.
     */
    (): void;
};

declare var colorMode: {

    /**
     * colorMode() changes the way p5.js interprets color data. By default, the
     * parameters for fill(), stroke(), background(), and color() are
     * defined by values between 0 and 255 using the RGB color model. This is
     * equivalent to setting colorMode(RGB, 255). Setting colorMode(HSB) lets
     * you use the HSB system instead. By default, this is colorMode(HSB, 360,
     * 100, 100, 1). You can also use HSL.
     * 
     * Note: existing color objects remember the mode that they were created in,
     * so you can change modes as you like without affecting their appearance
     * @param mode either RGB, HSB or HSL, corresponding to Red/Green/Blue and Hue/Saturation/Brightness (or Lightness)
     * @param max range for all values
     */
    (mode: P5ColorMode, max?: number): void;

    /**
     * colorMode() changes the way p5.js interprets color data. By default, the
     * parameters for fill(), stroke(), background(), and color() are
     * defined by values between 0 and 255 using the RGB color model. This is
     * equivalent to setting colorMode(RGB, 255). Setting colorMode(HSB) lets
     * you use the HSB system instead. By default, this is colorMode(HSB, 360,
     * 100, 100, 1). You can also use HSL.
     * 
     * Note: existing color objects remember the mode that they were created in,
     * so you can change modes as you like without affecting their appearance
     * @param mode either RGB, HSB or HSL, corresponding to Red/Green/Blue and Hue/Saturation/Brightness (or Lightness)
     * @param max1 range for the red or hue depending on the current color mode
     * @param max2 range for the green or saturation depending on the current color mode
     * @param max3 range for the blue or brightness/lightness depending on the current color mode
     * @param maxA range for the alpha
     */
    (mode: P5ColorMode, max1: number, max2: number, max3: number, maxA?: number): void;
};

declare var fill: {

    /**
     * Sets the color used to fill shapes. For example, if you run fill(204, 102, 0),
     * all subsequent shapes will be filled with orange. This color is either
     * specified in terms of the RGB or HSB color depending on the current
     * colorMode(). (The default color space is RGB, with each value in the
     * range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the fill color
     * @param v1 red or hue value relative to the current color range
     * @param v2 green or saturation value relative to the current color range
     * @param v3 blue or brightness value relative to the current color range
     * @param alpha opacity of the background relative to current color range (default is 0-255)
     */
    (v1: number, v2: number, v3: number, alpha?: number): void;

    /**
     * Sets the color used to fill shapes. For example, if you run fill(204, 102, 0),
     * all subsequent shapes will be filled with orange. This color is either
     * specified in terms of the RGB or HSB color depending on the current
     * colorMode(). (The default color space is RGB, with each value in the
     * range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the fill color
     * @param value a color string
     */
    (value: string): void;

    /**
     * Sets the color used to fill shapes. For example, if you run fill(204, 102, 0),
     * all subsequent shapes will be filled with orange. This color is either
     * specified in terms of the RGB or HSB color depending on the current
     * colorMode(). (The default color space is RGB, with each value in the
     * range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the fill color
     * @param gray a gray value
     * @param alpha opacity of the background relative to current color range (default is 0-255)
     */
    (gray: number, alpha?: number): void;

    /**
     * Sets the color used to fill shapes. For example, if you run fill(204, 102, 0),
     * all subsequent shapes will be filled with orange. This color is either
     * specified in terms of the RGB or HSB color depending on the current
     * colorMode(). (The default color space is RGB, with each value in the
     * range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the fill color
     * @param values an array containing the red,green,blue & and alpha components of the color
     */
    (values: number[]): void;

    /**
     * Sets the color used to fill shapes. For example, if you run fill(204, 102, 0),
     * all subsequent shapes will be filled with orange. This color is either
     * specified in terms of the RGB or HSB color depending on the current
     * colorMode(). (The default color space is RGB, with each value in the
     * range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the fill color
     * @param color the fill color
     */
    (color: p5.Color): void;
};

declare var noFill: {

    /**
     * Disables filling geometry. If both noStroke() and noFill() are called,
     * nothing will be drawn to the screen
     */
    (): void;
};

declare var noStroke: {

    /**
     * Disables drawing the stroke (outline). If both noStroke() and noFill()
     * are called, nothing will be drawn to the screen
     */
    (): void;
};

declare var stroke: {

    /**
     * Sets the color used to draw lines and borders around shapes. This color is
     * either specified in terms of the RGB or HSB color depending on the
     * current colorMode() (the default color space is RGB, with each value in
     * the range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the stroke color.
     * @param v1 red or hue value relative to the current color range
     * @param v2 green or saturation value relative to the current color range
     * @param v3 blue or brightness value relative to the current color range
     * @param alpha opacity of the background relative to current color range (default is 0-255)
     */
    (v1: number, v2: number, v3: number, alpha?: number): void;

    /**
     * Sets the color used to draw lines and borders around shapes. This color is
     * either specified in terms of the RGB or HSB color depending on the
     * current colorMode() (the default color space is RGB, with each value in
     * the range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the stroke color.
     * @param value a color string
     */
    (value: string): void;

    /**
     * Sets the color used to draw lines and borders around shapes. This color is
     * either specified in terms of the RGB or HSB color depending on the
     * current colorMode() (the default color space is RGB, with each value in
     * the range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the stroke color.
     * @param gray a gray value
     * @param alpha opacity of the background relative to current color range (default is 0-255)
     */
    (gray: number, alpha?: number): void;

    /**
     * Sets the color used to draw lines and borders around shapes. This color is
     * either specified in terms of the RGB or HSB color depending on the
     * current colorMode() (the default color space is RGB, with each value in
     * the range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the stroke color.
     * @param values an array containing the red, green, blue, and alpha components of the color
     */
    (values: number[]): void;

    /**
     * Sets the color used to draw lines and borders around shapes. This color is
     * either specified in terms of the RGB or HSB color depending on the
     * current colorMode() (the default color space is RGB, with each value in
     * the range from 0 to 255). The alpha range by default is also 0 to 255.
     * 
     * If a single string argument is provided, RGB, RGBA and Hex CSS color
     * strings and all named color strings are supported. In this case, an alpha
     * number value as a second argument is not supported, the RGBA form
     * should be used.
     * 
     * A p5 Color object can also be provided to set the stroke color.
     * @param color the stroke color
     */
    (color: p5.Color): void;
};


// SHAPE
// SHAPE: 2D Primitives
declare var arc: {

    /**
     * Draw an arc to the screen. If called with only x, y, w, h, start, and stop, the
     * arc will be drawn and filled as an open pie segment. If a mode parameter
     * is provided, the arc will be filled like an open semi-circle (OPEN), a
     * closed semi-circle (CHORD), or as a closed pie segment (PIE). The origin
     * may be changed with the ellipseMode() function.
     * 
     * The arc is always drawn clockwise from wherever start falls to wherever
     * stop falls on the ellipse. Adding or subtracting TWO_PI to either angle
     * does not change where they fall. If both start and stop fall at the same
     * place, a full ellipse will be drawn.
     * @param x x-coordinate of the arc's ellipse
     * @param y y-coordinate of the arc's ellipse
     * @param w width of the arc's ellipse by default
     * @param h height of the arc's ellipse by default
     * @param start angle to start the arc, specified in radians
     * @param stop angle to stop the arc, specified in radians
     * @param mode optional parameter to determine the way of drawing the arc. either CHORD, PIE or OPEN
     * @param detail optional parameter for WebGL mode only. This is to specify the number of vertices that makes up the perimeter of the arc. Default value is 25
     */
    (x: number, y: number, w: number, h: number, start: number, stop: number, mode?: P5ArcMode, detail?: number): void;
};

declare var ellipse: {

    /**
     * Draws an ellipse (oval) to the screen. An ellipse with equal width and
     * height is a circle. By default, the first two parameters set the location, and
     * the third and fourth parameters set the shape's width and height. If no
     * height is specified, the value of width is used for both the width and
     * height. If a negative height or width is specified, the absolute value is
     * taken. The origin may be changed with the ellipseMode() function.
     * @param x x-coordinate of the ellipse
     * @param y y-coordinate of the ellipse
     * @param w width of the ellipse
     * @param h height of the ellipse
     * @param detail number of radial sectors to draw (for WebGL mode)
     */
    (x: number, y: number, w: number, h?: number, detail?: number): void;
};

declare var circle: {

    /**
     * Draws a circle to the screen. A circle is a simple closed shape. It is the set
     * of all points in a plane that are at a given distance from a given point, the
     * centre. This function is a special case of the ellipse() function, where the
     * width and height of the ellipse are the same. Height and width of the
     * ellipse correspond to the diameter of the circle. By default, the first two
     * parameters set the location of the centre of the circle, the third sets the
     * diameter of the circle.
     * @param x x-coordinate of the centre of the circle
     * @param y y-coordinate of the centre of the circle
     * @param d diameter of the circle
     */
    (x: number, y: number, d: number): void;
};

declare var line: {

    /**
     * Draws a line (a direct path between two points) to the screen. The version
     * of line() with four parameters draws the line in 2D. To color a line, use
     * the stroke() function. A line cannot be filled, therefore the fill()
     * function will not affect the color of a line. 2D lines are drawn with a width
     * of one pixel by default, but this can be changed with the strokeWeight()
     * function.
     * @param x1 the x-coordinate of the first point
     * @param y1 the y-coordinate of the first point
     * @param x2 the x-coordinate of the second point
     * @param y2 the y-coordinate of the second point
     */
    (x1: number, y1: number, x2: number, y2: number): void;

    /**
     * Draws a line (a direct path between two points) to the screen. The version
     * of line() with four parameters draws the line in 2D. To color a line, use
     * the stroke() function. A line cannot be filled, therefore the fill()
     * function will not affect the color of a line. 2D lines are drawn with a width
     * of one pixel by default, but this can be changed with the strokeWeight()
     * function.
     * @param x1 the x-coordinate of the first point
     * @param y1 the y-coordinate of the first point
     * @param z1 the z-coordinate of the first point
     * @param x2 the x-coordinate of the second point
     * @param y2 the y-coordinate of the second point
     * @param z2 the z-coordinate of the second point
     */
    (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
};

declare var point: {

    /**
     * Draws a point, a coordinate in space at the dimension of one pixel. The
     * first parameter is the horizontal value for the point, the second value is the
     * vertical value for the point. The color of the point is determined by the
     * current stroke.
     * @param x the x-coordinate
     * @param y the y-coordinate
     * @param z the z-coordinate (for WebGL mode)
     */
    (x: number, y: number, z?: number): void;
};

declare var quad: {

    /**
     * Draw a quad. A quad is a quadrilateral, a four sided polygon. It is similar
     * to a rectangle, but the angles between its edges are not constrained to
     * ninety degrees. The first pair of parameters (x1,y1) sets the first vertex and
     * the subsequent pairs should proceed clockwise or counter-clockwise
     * around the defined shape. z-arguments only work when quad() is used in
     * WEBGL mode.
     * @param x1 the x-coordinate of the first point
     * @param y1 the y-coordinate of the first point
     * @param x2 the x-coordinate of the second point
     * @param y2 the y-coordinate of the second point
     * @param x3 the x-coordinate of the third point
     * @param y3 the y-coordinate of the third point
     * @param x4 the x-coordinate of the fourth point
     * @param y4 the y-coordinate of the fourth point
     */
    (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;

    /**
     * Draw a quad. A quad is a quadrilateral, a four sided polygon. It is similar
     * to a rectangle, but the angles between its edges are not constrained to
     * ninety degrees. The first pair of parameters (x1,y1) sets the first vertex and
     * the subsequent pairs should proceed clockwise or counter-clockwise
     * around the defined shape. z-arguments only work when quad() is used in
     * WEBGL mode.
     * @param x1 the x-coordinate of the first point
     * @param y1 the y-coordinate of the first point
     * @param z1 the z-coordinate of the first point
     * @param x2 the x-coordinate of the second point
     * @param y2 the y-coordinate of the second point
     * @param z2 the z-coordinate of the second point
     * @param x3 the x-coordinate of the third point
     * @param y3 the y-coordinate of the third point
     * @param z3 the z-coordinate of the third point
     * @param x4 the x-coordinate of the fourth point
     * @param y4 the y-coordinate of the fourth point
     * @param z4 the z-coordinate of the fourth point
     */
    (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
};

declare var rect: {

    /**
     * Draws a rectangle to the screen. A rectangle is a four-sided shape with
     * every angle at ninety degrees. By default, the first two parameters set the
     * location of the upper-left corner, the third sets the width, and the fourth
     * sets the height. The way these parameters are interpreted, however, may
     * be changed with the rectMode() function.
     * 
     * The fifth, sixth, seventh and eighth parameters, if specified, determine
     * corner radius for the top-left, top-right, lower-right and lower-left corners,
     * respectively. An omitted corner radius parameter is set to the value of the
     * previously specified radius value in the parameter list.
     * @param x x-coordinate of the rectangle
     * @param y y-coordinate of the rectangle
     * @param w width of the rectangle
     * @param h height of the rectangle
     * @param tl optional radius of top-left corner
     * @param tr optional radius of top-right corner
     * @param br optional radius of bottom-right corner
     * @param bl optional radius of bottom-left corner
     */
    (x: number, y: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): void;

    /**
     * Draws a rectangle to the screen. A rectangle is a four-sided shape with
     * every angle at ninety degrees. By default, the first two parameters set the
     * location of the upper-left corner, the third sets the width, and the fourth
     * sets the height. The way these parameters are interpreted, however, may
     * be changed with the rectMode() function.
     * 
     * The fifth, sixth, seventh and eighth parameters, if specified, determine
     * corner radius for the top-left, top-right, lower-right and lower-left corners,
     * respectively. An omitted corner radius parameter is set to the value of the
     * previously specified radius value in the parameter list.
     * @param x x-coordinate of the rectangle
     * @param y y-coordinate of the rectangle
     * @param w width of the rectangle
     * @param h height of the rectangle
     * @param detailX number of segments in the x-direction (for WebGL mode)
     * @param detailY number of segments in the y-direction (for WebGL mode)
     */
    (x: number, y: number, w: number, h: number, detailX?: number, detailY?: number): void;
};

declare var square: {

    /**
     * Draws a square to the screen. A square is a four-sided shape with every
     * angle at ninety degrees, and equal side size. This function is a special case
     * of the rect() function, where the width and height are the same, and the
     * parameter is called "s" for side size. By default, the first two parameters
     * set the location of the upper-left corner, the third sets the side size of the
     * square. The way these parameters are interpreted, however, may be
     * changed with the rectMode() function.
     * 
     * The fourth, fifth, sixth and seventh parameters, if specified, determine
     * corner radius for the top-left, top-right, lower-right and lower-left corners,
     * respectively. An omitted corner radius parameter is set to the value of the
     * previously specified radius value in the parameter list.
     * @param x x-coordinate of the square
     * @param y y-coordinate of the square
     * @param s side size of the square
     * @param tl optional radius of top-left corner
     * @param tr optional radius of top-right corner
     * @param br optional radius of bottom-right corner
     * @param bl optional radius of bottom-left corner
     */
    (x: number, y: number, s: number, tl?: number, tr?: number, br?: number, bl?: number): void;
};

declare var triangle: {

    /**
     * A triangle is a plane created by connecting three points. The first two
     * arguments specify the first point, the middle two arguments specify the
     * second point, and the last two arguments specify the third point.
     * @param x1 the x-coordinate of the first point
     * @param y1 the y-coordinate of the first point
     * @param x2 the x-coordinate of the second point
     * @param y2 the y-coordinate of the second point
     * @param x3 the x-coordinate of the third point
     * @param y3 the y-coordinate of the third point
     */
    (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
};

// SHAPE: Attributes
declare var ellipseMode: {
    (mode: P5EllipseMode): void;
};

declare var noSmooth: VoidFunction;

declare var rectMode: {
    (mode: P5RectMode): void;
};

declare var smooth: VoidFunction;

declare var strokeCap: {
    (cap: P5StrokeCap): void;
};

declare var strokeJoin: {
    (join: P5StrokeJoin): void;
};

declare var strokeWeight: {
    (weight: number): void;
};

// SHAPE: Curves
declare var bezier: {
    (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;
    (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
};

declare var bezierDetail: {
    (detail: number): void;
};

declare var bezierPoint: {
    (a: number, b: number, c: number, d: number, t: number): number;
};

declare var bezierTangent: {
    (a: number, b: number, c: number, d: number, t: number): number;
};

declare var curve: {
    (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;
    (x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
};

declare var curveDetail: {
    (resolution: number): void;
};

declare var curveTightness: {
    (amount: number): void;
};

declare var curvePoint: {
    (a: number, b: number, c: number, d: number, t: number): number;
};

declare var curveTangent: {
    (a: number, b: number, c: number, d: number, t: number): number;
};

// SHAPE: Vertex
declare var beginContour: VoidFunction;

declare var beginShape: {
    (kind?: P5ShapeKind): void;
};

declare var bezierVertex: {
    (x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;
    (x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
};

declare var curveVertex: {
    (x: number, y: number, z?: number): void;
};

declare var endContour: VoidFunction;

declare var endShape: {
    (mode?: P5EndShapeMode): void;
};

declare var quadraticVertex: {
    (cx: number, cy: number, x3: number, y3: number): void;
    (cx: number, cy: number, cz: number, x3: number, y3: number, z3: number): void;
};

declare var vertex: {
    (x: number, y: number): void;
    (x: number, y: number, z: number, u?: number, v?: number): void;
};

// SHAPE: 3D Primitives
declare var plane: {
    (width?: number, height?: number, detailX?: number, detailY?: number): void;
};

declare var box: {
    (width?: number, height?: number, depth?: number, detailX?: number, detailY?: number): void;
};

declare var sphere: {
    (radius?: number, detailX?: number, detailY?: number): void;
};

declare var cylinder: {
    (radius?: number, height?: number, detailX?: number, detailY?: number, bottomCap?: boolean, topCap?: boolean): void;
};

declare var cone: {
    (radius?: number, height?: number, detailX?: number, detailY?: number, cap?: boolean): void;
};

declare var ellipsoid: {
    (radiusX?: number, radiusY?: number, radiusZ?: number, detailX?: number, detailY?: number): void;
};

declare var torus: {
    (radius?: number, tubeRadius?: number, detailX?: number, detailY?: number): void;
};

// SHAPE: 3D Models
declare var loadModel: {
    (path: string, normalize: boolean, successCallback?: ((geometry: p5.Geometry) => void), failureCallback?: ((event: Event) => void)): p5.Geometry;
    (path: string, successCallback?: ((geometry: p5.Geometry) => void), failureCallback?: ((event: Event) => void)): p5.Geometry;
};

declare var model: {
    (model: p5.Geometry): void;
};

// MATH CONSTANTS

/**
 * HALF_PI is a mathematical constant with the value
 * 1.57079632679489661923. It is half the ratio of the circumference of a
 * circle to its diameter. It is useful in combination with the trigonometric
 * functions sin() and cos().
 */
declare var HALF_PI: number;

/**
 * PI is a mathematical constant with the value 3.14159265358979323846. It
 * is the ratio of the circumference of a circle to its diameter. It is useful in
 * combination with the trigonometric functions sin() and cos().
 */
declare var PI: number;

/**
 * QUARTER_PI is a mathematical constant with the value 0.7853982. It is
 * one quarter the ratio of the circumference of a circle to its diameter. It is
 * useful in combination with the trigonometric functions sin() and cos().
 */
declare var QUARTER_PI: number;

/**
 * TAU is an alias for TWO_PI, a mathematical constant with the value
 * 6.28318530717958647693. It is twice the ratio of the circumference of a
 * circle to its diameter. It is useful in combination with the trigonometric
 * functions sin() and cos().
 */
declare var TAU: number;

/**
 * TWO_PI is a mathematical constant with the value
 * 6.28318530717958647693. It is twice the ratio of the circumference of a
 * circle to its diameter. It is useful in combination with the trigonometric
 * functions sin() and cos().
 */
declare var TWO_PI: number;

// ENVIRONMENT
/**
 * The print() function writes to the console area of your browser. This
 * function is often helpful for looking at the data a program is producing.
 * This function creates a new line of text for each call to the function.
 * Individual elements can be separated with quotes ("") and joined with the
 * addition operator (+).
 * 
 * Note that calling print() without any arguments invokes the window.print()
 * function which opens the browser's print dialog. To print a blank line to
 * console you can write print('\n').
 * @param contents any combination of Number, String, Object, Boolean, Array to print
 */
declare function print(contents: any): void;

/**
 * The system variable frameCount contains the number of frames that have
 * been displayed since the program started. Inside setup() the value is 0,
 * after the first iteration of draw it is 1, etc.
 */
declare var frameCount: number;

/**
 * Confirms if the window a p5.js program is in is "focused," meaning that
 * the sketch will accept mouse or keyboard input. This variable is "true"
 * if the window is focused and "false" if not.
 */
declare var focused: boolean;

declare var cursor: {

    /**
     * Sets the cursor to a predefined symbol or an image, or makes it visible if
     * already hidden. If you are trying to set an image as the cursor, the
     * recommended size is 16x16 or 32x32 pixels. The values for parameters x
     * and y must be less than the dimensions of the image.
     * @param type Built-In: either ARROW, CROSS, HAND, MOVE, TEXT and WAIT. Native CSS properties: 'grab', 'progress', 'cell' etc. External: path for cursor's images (Allowed File extensions: .cur, .gif, .jpg, .jpeg, .png) For more information on Native CSS cursors and url visit: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
     * @param x the horizontal active spot of the cursor (must be less than 32)
     * @param y the vertical active spot of the cursor (must be less than 32)
     */
    (type: string | P5CursorType, x?: number, y?: number): void;
};

declare var frameRate: {

    /**
     * Specifies the number of frames to be displayed every second. For
     * example, the function call frameRate(30) will attempt to refresh 30 times a
     * second. If the processor is not fast enough to maintain the specified rate,
     * the frame rate will not be achieved. Setting the frame rate within setup()
     * is recommended. The default frame rate is based on the frame rate of the
     * display (here also called "refresh rate"), which is set to 60 frames per
     * second on most computers. A frame rate of 24 frames per second (usual
     * for movies) or above will be enough for smooth animations. This is the
     * same as setFrameRate(val).
     * 
     * Calling frameRate() with no arguments returns the current framerate.
     * The draw function must run at least once before it will return a value. This
     * is the same as getFrameRate().
     * 
     * Calling frameRate() with arguments that are not of the type numbers or
     * are non positive also returns current framerate.
     * @param fps number of frames to be displayed every second
     */
    (fps?: number): void;

    /**
     * Specifies the number of frames to be displayed every second. For
     * example, the function call frameRate(30) will attempt to refresh 30 times a
     * second. If the processor is not fast enough to maintain the specified rate,
     * the frame rate will not be achieved. Setting the frame rate within setup()
     * is recommended. The default frame rate is based on the frame rate of the
     * display (here also called "refresh rate"), which is set to 60 frames per
     * second on most computers. A frame rate of 24 frames per second (usual
     * for movies) or above will be enough for smooth animations. This is the
     * same as setFrameRate(val).
     * 
     * Calling frameRate() with no arguments returns the current framerate.
     * The draw function must run at least once before it will return a value. This
     * is the same as getFrameRate().
     * 
     * Calling frameRate() with arguments that are not of the type numbers or
     * are non positive also returns current framerate.
     * @returns the current framerate
     */
    (): number;
};

declare var noCursor: {
    /**
     * Hides the cursor from view.
     */
    (): void;
};

/**
 * System variable that stores the width of the screen display according to
 * the default pixelDensity. This is used to run a full-screen program on
 * any display size. To return actual screen size, multiply this by
 * pixelDensity.
 */
declare var displayWidth: number;

/**
 * System variable that stores the height of the screen display according to
 * the default pixelDensity. This is used to run a full-screen program on
 * any display size. To return actual screen size, multiply this by
 * pixelDensity.
 */
declare var displayHeight: number;

/**
 * System variable that stores the width of the inner window, it maps to
 * window.innerWidth.
 */
declare var windowWidth: number;

/**
 * System variable that stores the height of the inner window, it maps to
 * window.innerHeight.
 */
declare var windowHeight: number;

/**
 * System variable that stores the width of the drawing canvas. This value is
 * set by the first parameter of the createCanvas() function. For example,
 * the function call createCanvas(320, 240) sets the width variable to the
 * value 320. The value of width defaults to 100 if createCanvas() is not
 * used in a program.
 */
declare var width: number;

/**
 * System variable that stores the height of the drawing canvas. This value is
 * set by the second parameter of the createCanvas() function. For
 * example, the function call createCanvas(320, 240) sets the height variable
 * to the value 240. The value of height defaults to 100 if createCanvas() is
 * not used in a program.
 */
declare var height: number;

declare var fullscreen: {

    /**
     * If argument is given, sets the sketch to fullscreen or not based on the value
     * of the argument. If no argument is given, returns the current fullscreen
     * state. Note that due to browser restrictions this can only be called on user
     * input, for example, on mouse press like the example below.
     * @param val whether the sketch should be in fullscreen mode or not
     */
    (val: boolean): void;

    /**
     * If argument is given, sets the sketch to fullscreen or not based on the value
     * of the argument. If no argument is given, returns the current fullscreen
     * state. Note that due to browser restrictions this can only be called on user
     * input, for example, on mouse press like the example below.
     * @returns current fullscreen state
     */
    (): boolean;
};

declare var pixelDensity: {

    /**
     * Sets the pixel scaling for high pixel density displays. By default pixel
     * density is set to match display density, call pixelDensity(1) to turn this off.
     * Calling pixelDensity() with no arguments returns the current pixel
     * density of the sketch.
     * @param val whether or how much the sketch should scale
     */
    (val: number): void;

    /**
     * Sets the pixel scaling for high pixel density displays. By default pixel
     * density is set to match display density, call pixelDensity(1) to turn this off.
     * Calling pixelDensity() with no arguments returns the current pixel
     * density of the sketch.
     * @returns current pixel density
     */
    (): number;
};

declare var displayDensity: {

    /**
     * Returns the pixel density of the current display the sketch is running on.
     * @returns current pixel density of the display
     */
    (): number;
};

declare var getURL: {

    /**
     * Gets the current URL.
     * @returns url
     */
    (): string;
};

declare var getURLPath: {

    /**
     * Gets the current URL path as an array.
     * @returns path components
     */
    (): string[];
};

declare var getURLParams: {

    /**
     * Gets the current URL params as an Object.
     * @returns URL params
     */
    (): { [key: string]: any };
};

// STRUCTURE

declare var remove: {

    /**
     * Removes the entire p5 sketch. This will remove the canvas and any
     * elements created by p5.js. It will also stop the draw loop and unbind any
     * properties or methods from the window global scope. It will leave a
     * variable p5 in case you wanted to create a new p5 sketch. If you like, you
     * can set p5 = null to erase it. While all functions and variables and objects
     * created by the p5 library will be removed, any other global variables
     * created by your code will remain.
     */
    (): void;
};

declare var noLoop: {

    /**
     * Stops p5.js from continuously executing the code within draw(). If
     * loop() is called, the code in draw() begins to run continuously again. If
     * using noLoop() in setup(), it should be the last line inside the block.
     * 
     * When noLoop() is used, it's not possible to manipulate or access the
     * screen inside event handling functions such as mousePressed() or
     * keyPressed(). Instead, use those functions to call redraw() or loop(),
     * which will run draw(), which can update the screen properly. This means
     * that when noLoop() has been called, no drawing can happen, and
     * functions like saveFrame() or loadPixels() may not be used.
     * 
     * Note that if the sketch is resized, redraw() will be called to update the
     * sketch, even after noLoop() has been specified. Otherwise, the sketch
     * would enter an odd state until loop() was called.
     */
    (): void;
};

declare var loop: {

    /**
     * By default, p5.js loops through draw() continuously, executing the code
     * within it. However, the draw() loop may be stopped by calling noLoop().
     * In that case, the draw() loop can be resumed with loop().
     * 
     * Avoid calling loop() from inside setup().
     */
    (): void;
};

declare var push: {

    /**
     * The push() function saves the current drawing style settings and
     * transformations, while pop() restores these settings. Note that these
     * functions are always used together. They allow you to change the style and
     * transformation settings and later return to what you had. When a new state
     * is started with push(), it builds on the current style and transform
     * information. The push() and pop() functions can be embedded to provide
     * more control.
     * 
     * push() stores information related to the current transformation state and
     * style settings controlled by the following functions: fill(), stroke(),
     * tint(), strokeWeight(), strokeCap(), strokeJoin(), imageMode(),
     * rectMode(), ellipseMode(), colorMode(), textAlign(), textFont(),
     * textSize(), textLeading().
     * 
     * In WEBGL mode additional style settings are stored. These are controlled
     * by the following functions: setCamera(), ambientLight(),
     * directionalLight(), pointLight(), texture(),
     * specularMaterial(), shininess(), normalMaterial() and shader().
     */
    (): void;
};

declare var pop: {

    /**
     * The push() function saves the current drawing style settings and
     * transformations, while pop() restores these settings. Note that these
     * functions are always used together. They allow you to change the style and
     * transformation settings and later return to what you had. When a new state
     * is started with push(), it builds on the current style and transform
     * information. The push() and pop() functions can be embedded to provide
     * more control. (See the second example for a demonstration.)
     * 
     * push() stores information related to the current transformation state and
     * style settings controlled by the following functions: fill(), stroke(),
     * tint(), strokeWeight(), strokeCap(), strokeJoin(), imageMode(),
     * rectMode(), ellipseMode(), colorMode(), textAlign(), textFont(),
     * textSize(), textLeading().
     * 
     * In WEBGL mode additional style settings are stored. These are controlled
     * by the following functions: setCamera(), ambientLight(),
     * directionalLight(), pointLight(), texture(),
     * specularMaterial(), shininess(), normalMaterial() and shader().
     */
    (): void;
};

declare var redraw: {

    /**
     * Executes the code within draw() one time. This functions allows the
     * program to update the display window only when necessary, for example
     * when an event registered by mousePressed() or keyPressed() occurs.
     * 
     * In structuring a program, it only makes sense to call redraw() within
     * events such as mousePressed(). This is because redraw() does not run
     * draw() immediately (it only sets a flag that indicates an update is needed).
     * 
     * The redraw() function does not work properly when called inside
     * draw(). To enable/disable animations, use loop() and noLoop().
     * 
     * In addition you can set the number of redraws per method call. Just add an
     * integer as single parameter for the number of redraws.
     * @param n Redraw for n-times. The default value is 1
     */
    (n?: number): void;
};

// RENDERING
declare var createCanvas: {

    /**
     * Creates a canvas element in the document, and sets the dimensions of it in
     * pixels. This method should be called only once at the start of setup.
     * Calling createCanvas more than once in a sketch will result in very
     * unpredictable behavior. If you want more than one drawing canvas you
     * could use createGraphics (hidden by default but it can be shown).
     * 
     * The system variables width and height are set by the parameters passed to
     * this function. If createCanvas() is not used, the window will be given a
     * default size of 100x100 pixels.
     * 
     * For more ways to position the canvas, see the [positioning the canvas](https://github.com/processing/p5.js/wiki/Positioning-your-canvas) wiki
     * page.
     * @param w width of the canvas
     * @param h height of the canvas
     * @param renderer either P2D or WEBGL
     * @returns p5.Renderer object
     */
    (w: number, h: number, renderer?: P5Renderer): p5.Renderer;
};

declare var resizeCanvas: {

    /**
     * Resizes the canvas to given width and height. The canvas will be cleared
     * and draw will be called immediately, allowing the sketch to re-render itself
     * in the resized canvas.
     * @param w width of the canvas
     * @param h height of the canvas
     * @param noRedraw don't redraw the canvas immediately
     */
    (w: number, h: number, noRedraw?: boolean): void;
};

declare var noCanvas: {

    /**
     * Removes the default canvas for a p5 sketch that doesn't require a canvas.
     */
    (): void;
};

declare var createGraphics: {

    /**
     * Creates and returns a new p5.Renderer object. Use this class if you need to
     * draw into an off-screen graphics buffer. The two parameters define the
     * width and height in pixels.
     * @param w width of the offscreen graphics buffer
     * @param h height of the offscreen graphics buffer
     * @param renderer either P2D or WEBGL undefined defaults to P2D
     * @returns offscreen graphics buffer
     */
    (w: number, h: number, renderer?: P5Renderer): p5.Graphics;
};

declare var blendMode: {

    /**
     * Blends the pixels in the display window according to the defined mode. There is a choice of the following modes to blend the source pixels (A) with the ones of pixels already in the display window (B):
     * 
     * * BLEND - linear interpolation of colours: C = A * factor + B. **This is the default blending mode**.
     * * ADD - sum of A and B
     * * DARKEST - only the darkest colour succeeds: C = min(A * factor, B).
     * * LIGHTEST - only the lightest colour succeeds: C = max(A * factor, B).
     * * DIFFERENCE - subtract colors from underlying image.
     * * EXCLUSION - similar to DIFFERENCE, but less extreme.
     * * MULTIPLY - multiply the colors, result will always be darker.
     * * SCREEN - opposite multiply, uses inverse values of the colors.
     * * REPLACE - the pixels entirely replace the others and don't utilize alpha (transparency) values.
     * * OVERLAY - mix of MULTIPLY and SCREEN . Multiplies dark values, and screens light values. *(2D)*
     * * HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower. *(2D)*
     * * SOFT_LIGHT - mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh. *(2D)*
     * * DODGE - lightens light tones and increases contrast, ignores darks. *(2D)*
     * * BURN - darker areas are applied, increasing contrast, ignores lights. *(2D)*
     * * SUBTRACT - remainder of A and B *(3D)*
     * 
     * *(2D)* indicates that this blend mode **only** works in the 2D renderer.
     * 
     * *(3D)* indicates that this blend mode **only** works in the WEBGL renderer.
     * @param mode blend mode to set for canvas. either BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, or SUBTRACT
     */
    (mode: P5BlendMode): void;
};

declare var setAttributes: {

    /**
     * Set attributes for the WebGL Drawing context. This is a way of adjusting
     * how the WebGL renderer works to fine-tune the display and performance.
     * 
     * Note that this will reinitialize the drawing context if called after the
     * WebGL canvas is made.
     * 
     * If an object is passed as the parameter, all attributes not declared in the
     * object will be set to defaults.
     * 
     * The available attributes are:
     * 
     * * alpha - indicates if the canvas contains an alpha buffer default is false
     * * depth - indicates whether the drawing buffer has a depth buffer of at least 16 bits - default is true
     * * stencil - indicates whether the drawing buffer has a stencil buffer of at least 8 bits
     * * antialias - indicates whether or not to perform anti-aliasing default is false
     * * premultipliedAlpha - indicates that the page compositor will assume the drawing buffer contains colors with pre-multiplied alpha default is false
     * * preserveDrawingBuffer - if true the buffers will not be cleared and and will preserve their values until cleared or overwritten by author (note that p5 clears automatically on draw loop) default is true
     * * perPixelLighting - if true, per-pixel lighting will be used in the lighting shader. default is false
     * @param key name of attribute
     * @param value new value of named attribute
     */
    (key: string, value: boolean): void;

    /**
     * Set attributes for the WebGL Drawing context. This is a way of adjusting
     * how the WebGL renderer works to fine-tune the display and performance.
     * 
     * Note that this will reinitialize the drawing context if called after the
     * WebGL canvas is made.
     * 
     * If an object is passed as the parameter, all attributes not declared in the
     * object will be set to defaults.
     * 
     * The available attributes are:
     * 
     * * alpha - indicates if the canvas contains an alpha buffer default is false
     * * depth - indicates whether the drawing buffer has a depth buffer of at least 16 bits - default is true
     * * stencil - indicates whether the drawing buffer has a stencil buffer of at least 8 bits
     * * antialias - indicates whether or not to perform anti-aliasing default is false
     * * premultipliedAlpha - indicates that the page compositor will assume the drawing buffer contains colors with pre-multiplied alpha default is false
     * * preserveDrawingBuffer - if true the buffers will not be cleared and and will preserve their values until cleared or overwritten by author (note that p5 clears automatically on draw loop) default is true
     * * perPixelLighting - if true, per-pixel lighting will be used in the lighting shader. default is false
     * @param obj object with key-value pairs
     */
    (obj: object): void;
};

// TRANSFORM

declare var applyMatrix: {
    (a: number, b: number, c: number, d: number, e: number, f: number): void;
    /**
     * This one does not appear to work.
     */
    (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number): void;
};

declare var resetMatrix: {
    (): void;
};

declare var rotate: {
    (angle: number, axis?: p5.Vector | number[]): void;
};

declare var rotateX: {
    (angle: number): void;
};

declare var rotateY: {
    (angle: number): void;
};

declare var rotateZ: {
    (angle: number): void;
};

declare var scale: {
    (s: number | p5.Vector | number[], y?: number, z?: number): void;
    (scales: p5.Vector | number[]): void;
};

declare var shearX: {
    (angle: number): void;
};

declare var shearY: {
    (angle: number): void;
};

declare var translate: {
    (x: number, y: number, z?: number): void;
    (vector: p5.Vector): void;
};

// DATA

// DATA: Dictionary

declare var createStringDict: {
    (key: string, value: string): p5.StringDict;
    (object: Object): p5.StringDict;
};

declare var createNumberDict: {
    (key: number, value: number): p5.NumberDict;
    (object: Object): p5.NumberDict;
};

// DATA: Array Functions
declare var append: {
    (array: any[], value: any): any[];
};

declare function arrayCopy(src: any[], srcPosition: number, dst: any[], dstPosition: number, length: number): void;
declare function arrayCopy(src: any[], dst: any[], length?: number): void;

declare function concat(a: any[], b: any[]): any[];

declare function reverse(list: any[]): any[];

// Not doing shorten, as it is deprecated and just does what Array.prototype.pop() does

declare function shuffle(array: any[], modify?: boolean): any[];

// Not doing sort, as it is deprecated
// Not doing splice, as it is deprecated
// Not doing subset, as it is deprecated

// DATA: Conversion
declare function float(n: string | boolean | number): number;
declare function float(ns: Array<string | boolean | number>): number[];

declare function int(n: string | boolean | number, radix?: number): number;
declare function int(ns: Array<string | boolean | number>): number[];

declare function str(n: string | boolean | number): string;
declare function str(ns: Array<string | boolean | number>): string[];

declare function boolean(n: string | boolean | number): boolean;
declare function boolean(ns: Array<string | boolean | number>): boolean[];

declare function byte(n: string | boolean | number): number;
declare function byte(ns: Array<string | boolean | number>): number[];

declare function char(n: string | number): string;
declare function char(ns: Array<string | number>): string[];

declare function unchar(n: string): number;
declare function unchar(ns: string[]): number[];

declare function hex(n: number, digits?: number): string;
declare function hex(ns: number[], digits?: number): string[];

declare function unhex(n: string): number;
declare function unhex(ns: string[]): number[];

// DATA: String Functions
declare function join(list: string[], separator: string): string;

declare function match(str: string, regexp: string): string[];

declare function matchAll(str: string, regexp: string): string[][];

declare function nf(num: number | string, left?: number | string, right?: number | string): string;
declare function nf(nums: Array<number | string>, left?: number | string, right?: number | string): string[];

declare function nfc(num: number | string, right?: number | string): string;
declare function nfc(nums: Array<number | string>, right?: number | string): string[];

declare function nfp(num: number, left?: number, right?: number): string;
declare function nfp(nums: number[], left?: number, right?: number): string[];

declare function nfs(num: number, left?: number, right?: number): string;
declare function nfs(nums: number[], left?: number, right?: number): string[];

declare function split(value: string, delim: string): string[];

declare function splitTokens(value: string, delim?: string): string[];

declare function trim(str: string): string;
declare function trim(strs: string[]): string[];








































declare var specularMaterial: {
    (a: number): void;
};

declare var pointLight: {
    (a: p5.Color, b: p5.Vector): void;
}

declare var directionalLight: {
    (a: p5.Color, b: number, c: number, d: number): void;
};

declare var image: {
    (todo1: p5.Graphics, todo2: number, todo3: number): void;
};

declare var millis: {
    (): number;
};

declare var normalMaterial: VoidFunction;

declare var orbitControl: VoidFunction;




declare var text: {
    (value: any, a: number, b: number, c: number, d: number): void;
};


declare var loadPixels: VoidFunction;
declare var updatePixels: VoidFunction;

declare var pixels: Array<number>;
declare var mouseX: number;
declare var mouseY: number;

declare var map: {
    (value: number, inMin: number, inMax: number, outMin: number, outMax: number): number;
};

declare var abs: {
    (value: number): number;
};

declare var sin: {
    (value: number): number;
};
declare var cos: {
    (value: number): number;
};
declare var tan: {
    (value: number): number;
};
declare var sqrt: {
    (value: number): number;
};
declare var atan2: {
    (a: number, b: number): number;
};
declare var lerp: {
    (begin: number, end: number, percentage: number): number;
};

declare var createVector: {
    (x?: number, y?: number, z?: number): p5.Vector;
};