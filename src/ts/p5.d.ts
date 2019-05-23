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

    mouseMoved(event?: MouseEvent): void;
    mouseDragged(event?: MouseEvent): void;
    mousePressed(event?: MouseEvent): void;
    mouseReleased(event?: MouseEvent): void;
    mouseClicked(event?: MouseEvent): void;
    doubleClicked(event?: MouseEvent): void;
    mouseWheel(event?: WheelEvent): void;

    touchStarted(event?: TouchEvent): void;
    touchMoved(event?: TouchEvent): void;
    touchEnded(event?: TouchEvent): void;

    /**
     * The windowResized() function is called once every time the browser
     * window is resized. This is a good place to resize the canvas or do any
     * other adjustments to accommodate the new window size.
     */
    windowResized(): void;

    deviceMoved(): void;
    deviceTurned(): void;
    deviceShaken(): void;

    keyPressed(): void;
    keyReleased(): void;
    keyTyped(): void;
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
interface P5DeviceOrientation {}
interface P5ImageFilterType {}
interface P5ImageMode {}
interface P5HorizontalAlign {}
interface P5VerticalAlign {}
interface P5TextStyle {}
interface P5DebugMode {}
interface P5GridDebugMode extends P5DebugMode {}
interface P5AxesDebugMode extends P5DebugMode {}
interface P5TextureMode {}
interface P5TextureWrap {}

// CONSTANTS
// I used TypeScript intersection types here because all of these constant
// values are either strings or numbers, but to make compile-time checking
// better, I made interface types for methods that take these as parameters
// to ensure you couldn't use them in instances that p5js doesn't expect.
// Also, some are used in many different contexts, such as CENTER, so declaring
// that the constant is all of those different types allows it to be used in
// all scenarios you would expect, with strong compile-time checking.
declare const RGB: P5ColorMode & string;
declare const HSB: P5ColorMode & string;
declare const HSL: P5ColorMode & string;
declare const CHORD: P5ArcMode & string;
declare const PIE: P5ArcMode & string;
declare const OPEN: P5ArcMode & string;
declare const CENTER: P5EllipseMode & P5RectMode & P5ImageMode & P5HorizontalAlign & P5VerticalAlign & string;
declare const RADIUS: P5EllipseMode & P5RectMode & string;
declare const CORNER: P5EllipseMode & P5RectMode & P5ImageMode & string;
declare const CORNERS: P5EllipseMode & P5RectMode & P5ImageMode & string;
declare const SQUARE: P5StrokeCap & string;
declare const PROJECT: P5StrokeCap & string;
declare const ROUND: P5StrokeCap & P5StrokeJoin & string;
declare const MITER: P5StrokeJoin & string;
declare const BEVEL: P5StrokeJoin & string;
declare const POINTS: P5ShapeKind & number;
declare const LINES: P5ShapeKind & number;
declare const TRIANGLES: P5ShapeKind & number;
declare const TRIANGLE_FAN: P5ShapeKind & number;
declare const TRIANGLE_STRIP: P5ShapeKind & number;
declare const QUADS: P5ShapeKind & string;
declare const QUAD_STRIP: P5ShapeKind & string;
declare const CLOSE: P5EndShapeMode & string;
declare const DEGREES: P5AngleMode & string;
declare const RADIANS: P5AngleMode & string;
declare const ARROW: P5CursorType & string;
declare const CROSS: P5CursorType & string;
declare const HAND: P5CursorType & string;
declare const MOVE: P5CursorType & string;
declare const TEXT: P5CursorType & string;
declare const WAIT: P5CursorType & string;
declare const P2D: P5Renderer & string;
declare const WEBGL: P5Renderer & string;
declare const BLEND: P5BlendMode & string;
declare const DARKEST: P5BlendMode & string;
declare const LIGHTEST: P5BlendMode & string;
declare const DIFFERENCE: P5BlendMode & string;
declare const MULTIPLY: P5BlendMode & string;
declare const EXCLUSION: P5BlendMode & string;
declare const SCREEN: P5BlendMode & string;
declare const REPLACE: P5BlendMode & string;
declare const OVERLAY: P5BlendMode & string;
declare const HARD_LIGHT: P5BlendMode & string;
declare const SOFT_LIGHT: P5BlendMode & string;
declare const DODGE: P5BlendMode & string;
declare const BURN: P5BlendMode & string;
declare const ADD: P5BlendMode & string;
declare const SUBTRACT: P5BlendMode & string; // I get 'SUBTRACT is not defined' at runtime for some reason.
declare const LANDSCAPE: P5DeviceOrientation & string;
declare const PORTRAIT: P5DeviceOrientation & string;
declare const BACKSPACE: number;
declare const DELETE: number;
declare const ENTER: number;
declare const RETURN: number;
declare const TAB: number;
declare const ESCAPE: number;
declare const SHIFT: number;
declare const CONTROL: number;
declare const OPTION: number;
declare const ALT: number;
declare const UP_ARROW: number;
declare const DOWN_ARROW: number;
declare const LEFT_ARROW: number;
declare const RIGHT_ARROW: number;
declare const LEFT: P5HorizontalAlign & string;
declare const RIGHT: P5HorizontalAlign & string;
declare const THRESHOLD: P5ImageFilterType & string;
declare const GRAY: P5ImageFilterType & string;
declare const OPAQUE: P5ImageFilterType & string;
declare const INVERT: P5ImageFilterType & string;
declare const POSTERIZE: P5ImageFilterType & string;
declare const BLUR: P5ImageFilterType & string;
declare const ERODE: P5ImageFilterType & string;
declare const DILATE: P5ImageFilterType & string;
declare const TOP: P5VerticalAlign & string;
declare const BASELINE: P5VerticalAlign & string;
declare const NORMAL: P5TextStyle & P5TextureMode & string;
declare const ITALIC: P5TextStyle & string;
declare const BOLD: P5TextStyle & string;
declare const BOLDITALIC: P5TextStyle & string;
declare const GRID: P5GridDebugMode & string;
declare const AXES: P5AxesDebugMode & string;
declare const IMAGE: P5TextureMode & string;
declare const CLAMP: P5TextureWrap & string;
declare const REPEAT: P5TextureWrap & string;
declare const MIRROR: P5TextureWrap & string;

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
    interface Image {
        width: number;
        height: number;
        pixels: number[];

        loadPixels(): void;
        updatePixels(): void;
        get(): p5.Image;
        get(x: number, y: number): p5.Image;
        get(x: number, y: number, w: number, h: number): p5.Image;
        set(x: number, y: number, a: number | number[] | p5.Color | p5.Image): void;
        resize(width: number, height: number): void;
        copy(srcImage: p5.Image | p5.Element, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
        copy(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
        mask(srcImage: p5.Image): void;
        filter(filterType: P5ImageFilterType, filterParam?: number): void;
        blend(srcImage: p5.Image, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: P5BlendMode): void;
        blend(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: P5BlendMode): void;
        save(filename: string, extension: "jpg" | "png"): void;
    }

    // TODO:
    interface Geometry {
        computeFaces(): p5.Geometry;
        computeNormals(): p5.Geometry;
        averageNormals(): p5.Geometry;
        averagePoleNormals(): p5.Geometry;
        normalize(): p5.Geometry;
    }
    const Geometry: {
        prototype: p5.Geometry;
        new(detailX?: number, detailY?: number, callback?: VoidFunction): p5.Geometry;
    };

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

    interface Element {
        // TODO: Not sure where these things actually go....
        // The documentation for some stuff is really **really** bad
        background(todo: number): void;
        ellipse(todo1: number, todo2: number, todo3: number, todo4: number): void;

        // Now for the stuff that is actually in the documentation for p5.Element
        elt: HTMLElement;
        parent(): Node & ParentNode;
        parent(parent: string | p5.Element | HTMLElement): void;
        id(): string;
        id(id: string): void;
        class(): string;
        class(val: string): void;
        mousePressed(callback: VoidFunction): void;
        mousePressed(cancel: false): void;
        doubleClicked(callback: VoidFunction): p5.Element;
        doubleClicked(cancel: false): p5.Element;
        mouseWheel(callback: VoidFunction): void;
        mouseWheel(cancel: false): void;
        mouseReleased(callback: VoidFunction): void;
        mouseReleased(cancel: false): void;
        mouseClicked(callback: VoidFunction): void;
        mouseClicked(cancel: false): void;
        mouseMoved(callback: VoidFunction): void;
        mouseMoved(cancel: false): void;
        mouseOver(callback: VoidFunction): void;
        mouseOver(cancel: false): void;
        mouseOut(callback: VoidFunction): void;
        mouseOut(cancel: false): void;
        touchStarted(callback: VoidFunction): void;
        touchStarted(cancel: false): void;
        touchMoved(callback: VoidFunction): void;
        touchMoved(cancel: false): void;
        touchEnded(callback: VoidFunction): void;
        touchEnded(cancel: false): void;
        dragOver(callback: VoidFunction): void;
        dragOver(cancel: false): void;
        dragLeave(callback: VoidFunction): void;
        dragLeave(cancel: false): void;
    }

    interface Renderer extends Element {}

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
        z: number;
        
        toString(): string;
        set(x?: number, y?: number, z?: number): void;
        set(value: p5.Vector | number[]): void;
        copy(): p5.Vector;
        add(x: number, y?: number, z?: number): p5.Vector;
        add(value: p5.Vector | number[]): p5.Vector;
        sub(x: number, y?: number, z?: number): p5.Vector;
        sub(value: p5.Vector | number[]): p5.Vector;
        mult(n: number): p5.Vector;
        div(n: number): p5.Vector;
        mag(): number;
        magSq(): number;
        dot(x: number, y?: number, z?: number): number;
        dot(value: p5.Vector): number;
        cross(v: p5.Vector): p5.Vector;
        dist(v: p5.Vector): number;
        normalize(): p5.Vector;
        limit(max: number): void;
        setMag(len: number): void;
        heading(): number;
        rotate(angle: number): p5.Vector;
        angleBetween(other: p5.Vector): number;
        lerp(x: number, y: number, z: number, amt: number): p5.Vector;
        lerp(v: p5.Vector, amt: number): p5.Vector;
        array(): number[];
        equals(x?: number, y?: number, z?: number): boolean;
        equals(value: p5.Vector | number[]): boolean;
    }
    namespace Vector {
        function add(v1: p5.Vector, v2: p5.Vector, target?: p5.Vector): p5.Vector;
        function sub(v1: p5.Vector, v2: p5.Vector, target?: p5.Vector): p5.Vector;
        function mult(v: p5.Vector, n: number, target?: p5.Vector): p5.Vector;
        function div(v: p5.Vector, n: number, target?: p5.Vector): p5.Vector;
        function mag(vecT: p5.Vector): number;
        function dot(v1: p5.Vector, v2: p5.Vector): number;
        function cross(v1: p5.Vector, v2: p5.Vector): p5.Vector;
        function dist(v1: p5.Vector, v2: p5.Vector): number;
        function lerp(v1: p5.Vector, v2: p5.Vector, amt: number, target?: p5.Vector): p5.Vector;
        function fromAngle(angle: number, length: number): p5.Vector;
        function fromAngles(theta: number, phi: number, length?: number): p5.Vector;
        function random2D(): p5.Vector;
        function random3D(): p5.Vector;
    }

    interface PrintWriter {
        write(data: any | any[]): void;
        print(data: any | any[]): void;
        clear(): void;
        close(): void;
    }

    interface Table {
        columns: string[];
        rows: p5.TableRow[];

        addRow(row?: p5.TableRow): p5.TableRow;
        removeRow(id: number): void;
        getRow(rowID: number): p5.TableRow;
        getRows(): p5.TableRow[];
        findRow(value: string, column: number | string): p5.TableRow;
        findRows(value: string, column: number | string): p5.TableRow[];
        matchRow(regexp: string | RegExp, column: number | string): p5.TableRow;
        matchRows(regexp: string | RegExp, column: number | string): p5.TableRow[];
        getColumn(column: number | string): string[];
        clearRows(): void;
        addColumn(title?: string): void;
        getColumnCount(): number;
        getRowCount(): number;
        removeTokens(chars: string, column?: number | string): void;
        trim(column?: number | string): void;
        removeColumn(column: number | string): void;
        set<T extends number | string>(row: number, column: number | string, value: T): void;
        setNum(row: number, column: number | string, value: number): void;
        setString(row: number, column: number | string, value: string): void;
        get<T extends number | string>(row: number, column: number | string): T;
        getNum(row: number, column: number | string): number;
        getString(row: number, column: number | string): string;
        getObject(headerColumn?: string): Object;
        getArray(): any[][];
    }
    const Table: {
        prototype: p5.Table;
        new(rows?: p5.TableRow[]): p5.Table;
    };

    interface TableRow {
        set<T extends number | string>(column: number | string, value: T): void;
        setNum(column: number | string, value: number | string): void;
        setString(column: number | string, value: number | string | boolean | Object): void;
        get<T extends number | string>(column: number | string): T;
        getNum(column: number | string): number;
        getString(column: number | string): string;
    }
    const TableRow: {
        prototype: p5.TableRow;
        new(str?: string, separator?: string): p5.TableRow;
    };

    interface XML {
        getParent(): p5.XML;
        getName(): string;
        setName(name: string): void;
        hasChildren(): boolean;
        listChildren(): string[];
        getChildren(name?: string): p5.XML[];
        getChild(name: number | string): p5.XML;
        addChild(node: p5.XML): void;
        removeChild(name: number | string): void;
        getAttributeCount(): number;
        listAttributes(): string[];
        hasAttribute(attribute: string): boolean;
        getNum(name: string, defaultValue?: number): number;
        getString(name: string, defaultValue?: string): string;
        setAttribute(name: string, value: number | string | boolean): void;
        getContent(defaultValue?: string): string;
        setContent(text: string): void;
        serialize(): string;
    }
    const XML: {
        prototype: p5.XML;
        new(): p5.XML;
    };

    interface Font {
        font: Object; // TODO: figure out what the type actually is

        textBounds(line: string, x: number, y: number, fontSize?: number, options?: Object): { x: number, y: number, w: number, h: number };
        textToPoints(txt: string, x: number, y: number, fontSize?: number, options?: { sampleFactor?: number, simplifyThreshold?: number }): { x: number, y: number, alpha: number }[];
    }

    interface Camera {
        perspective(fovy?: number, aspect?: number, near?: number, far?: number): void;
        ortho(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): void;
        pan(angle: number): void;
        tilt(angle: number): void;
        lookAt(x: number, y: number, z: number): void;
        camera(x?: number, y?: number, z?: number, centerX?: number, centerY?: number, centerZ?: number, upX?: number, upY?: number, upZ?: number): void;
        move(x: number, y: number, z: number): void;
        setPosition(x: number, y: number, z: number): void;
    }

    interface Shader {
        setUniform(uniformName: string, data: Object | number | boolean | number[]): p5.Shader;
    }

    /**
     * Allows for the friendly error system (FES) to be turned off when creating
     * a sketch, which can give a significant boost to performance when needed.
     * See [disabling the friendly error system](https://github.com/processing/p5.js/wiki/Optimizing-p5.js-Code-for-Performance#disable-the-friendly-error-system-fes).
     */
    let disableFriendlyErrors: boolean;
}

// COLOR

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
declare function color(gray: number, alpha?: number): p5.Color;

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
declare function color(v1: number, v2: number, v3: number, alpha?: number): p5.Color;

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
declare function color(value: string): p5.Color;

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
declare function color(values: number[]): p5.Color;

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
declare function color(color: p5.Color): p5.Color;

/**
 * Extracts the green value from a color or pixel array.
 * @param color p5.Color object, color components, or CSS color
 * @returns the green value
 */
declare function green(color: p5.Color | number[] | string): number;

/**
 * Extracts the hue value from a color or pixel array.
 * @param color p5.Color object, color components, or CSS color
 * @returns the hue value
 */
declare function hue(color: p5.Color | number[] | string): number;

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
declare function lerpColor(c1: p5.Color, c2: p5.Color, amt: number): p5.Color;

/**
 * Extracts the lightness value from a color or pixel array.
 * @param color p5.Color object, color components, or CSS color
 * @returns the lightness value
 */
declare function lightness(color: p5.Color | number[] | string): number;

/**
 * Extracts the red value from a color or pixel array.
 * @param color p5.Color object, color components, or CSS color
 * @returns the red value
 */
declare function red(color: p5.Color | number[] | string): number;

/**
 * Extracts the saturation value from a color or pixel array.
 * @param color p5.Color object, color components, or CSS color
 * @returns the saturation value
 */
declare function saturation(color: p5.Color | number[] | string): number;

// COLOR: Setting
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
declare function background(color: p5.Color): void;

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
declare function background(colorString: string, alpha?: number): void;

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
declare function background(gray: number, alpha?: number): void;

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
declare function background(v1: number, v2: number, v3: number, a?: number): void;

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
declare function background(values: number[]): void;

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
declare function background(image: p5.Image, alpha?: number): void;

/**
 * Clears the pixels within a buffer. This function only clears the canvas. It
 * will not clear objects created by createX() methods such as
 * createVideo() or createDiv(). Unlike the main graphics context, pixels
 * in additional graphics areas created with createGraphics() can be
 * entirely or partially transparent. This function clears everything to make
 * all of the pixels 100% transparent.
 */
declare function clear(): void;

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
declare function colorMode(mode: P5ColorMode, max?: number): void;

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
declare function colorMode(mode: P5ColorMode, max1: number, max2: number, max3: number, maxA?: number): void;

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
declare function fill(v1: number, v2: number, v3: number, alpha?: number): void;

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
declare function fill(value: string): void;

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
declare function fill(gray: number, alpha?: number): void;

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
declare function fill(values: number[]): void;

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
declare function fill(color: p5.Color): void;

/**
 * Disables filling geometry. If both noStroke() and noFill() are called,
 * nothing will be drawn to the screen
 */
declare function noFill(): void;

/**
 * Disables drawing the stroke (outline). If both noStroke() and noFill()
 * are called, nothing will be drawn to the screen
 */
declare function noStroke(): void;

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
declare function stroke(v1: number, v2: number, v3: number, alpha?: number): void;

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
declare function stroke(value: string): void;

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
declare function stroke(gray: number, alpha?: number): void;

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
declare function stroke(values: number[]): void;

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
declare function stroke(color: p5.Color): void;


// SHAPE
// SHAPE: 2D Primitives
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
declare function arc(x: number, y: number, w: number, h: number, start: number, stop: number, mode?: P5ArcMode, detail?: number): void;

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
declare function ellipse(x: number, y: number, w: number, h?: number, detail?: number): void;

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
declare function circle(x: number, y: number, d: number): void;

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
declare function line(x1: number, y1: number, x2: number, y2: number): void;

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
declare function line(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;

/**
 * Draws a point, a coordinate in space at the dimension of one pixel. The
 * first parameter is the horizontal value for the point, the second value is the
 * vertical value for the point. The color of the point is determined by the
 * current stroke.
 * @param x the x-coordinate
 * @param y the y-coordinate
 * @param z the z-coordinate (for WebGL mode)
 */
declare function point(x: number, y: number, z?: number): void;

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
declare function quad(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;

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
declare function quad(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;

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
declare function rect(x: number, y: number, w: number, h: number, tl?: number, tr?: number, br?: number, bl?: number): void;

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
declare function rect(x: number, y: number, w: number, h: number, detailX?: number, detailY?: number): void;

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
declare function square(x: number, y: number, s: number, tl?: number, tr?: number, br?: number, bl?: number): void;

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
declare function triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

// SHAPE: Attributes
declare function ellipseMode(mode: P5EllipseMode): void;
declare function noSmooth(): void;
declare function rectMode(mode: P5RectMode): void;
declare function smooth(): void;
declare function strokeCap(cap: P5StrokeCap): void;
declare function strokeJoin(join: P5StrokeJoin): void;
declare function strokeWeight(weight: number): void;

// SHAPE: Curves
declare function bezier(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;
declare function bezier(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
declare function bezierDetail(detail: number): void;
declare function bezierPoint(a: number, b: number, c: number, d: number, t: number): number;
declare function bezierTangent(a: number, b: number, c: number, d: number, t: number): number;
declare function curve(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;
declare function curve(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
declare function curveDetail(resolution: number): void;
declare function curveTightness(amount: number): void;
declare function curvePoint(a: number, b: number, c: number, d: number, t: number): number;
declare function curveTangent(a: number, b: number, c: number, d: number, t: number): number;

// SHAPE: Vertex
declare function beginContour(): void;
declare function beginShape(kind?: P5ShapeKind): void;
declare function bezierVertex(x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): void;
declare function bezierVertex(x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
declare function curveVertex(x: number, y: number, z?: number): void;
declare function endContour(): void;
declare function endShape(mode?: P5EndShapeMode): void;
declare function quadraticVertex(cx: number, cy: number, x3: number, y3: number): void;
declare function quadraticVertex(cx: number, cy: number, cz: number, x3: number, y3: number, z3: number): void;
declare function vertex(x: number, y: number): void;
declare function vertex(x: number, y: number, z: number, u?: number, v?: number): void;

// SHAPE: 3D Primitives
declare function plane(width?: number, height?: number, detailX?: number, detailY?: number): void;
declare function box(width?: number, height?: number, depth?: number, detailX?: number, detailY?: number): void;
declare function sphere(radius?: number, detailX?: number, detailY?: number): void;
declare function cylinder(radius?: number, height?: number, detailX?: number, detailY?: number, bottomCap?: boolean, topCap?: boolean): void;
declare function cone(radius?: number, height?: number, detailX?: number, detailY?: number, cap?: boolean): void;
declare function ellipsoid(radiusX?: number, radiusY?: number, radiusZ?: number, detailX?: number, detailY?: number): void;
declare function torus(radius?: number, tubeRadius?: number, detailX?: number, detailY?: number): void;

// SHAPE: 3D Models
declare function loadModel(path: string, normalize: boolean, successCallback?: ((geometry: p5.Geometry) => void), failureCallback?: ((event: Event) => void)): p5.Geometry;
declare function loadModel(path: string, successCallback?: ((geometry: p5.Geometry) => void), failureCallback?: ((event: Event) => void)): p5.Geometry;
declare function model(model: p5.Geometry): void;

// MATH CONSTANTS

/**
 * HALF_PI is a mathematical constant with the value
 * 1.57079632679489661923. It is half the ratio of the circumference of a
 * circle to its diameter. It is useful in combination with the trigonometric
 * functions sin() and cos().
 */
declare const HALF_PI: number;

/**
 * PI is a mathematical constant with the value 3.14159265358979323846. It
 * is the ratio of the circumference of a circle to its diameter. It is useful in
 * combination with the trigonometric functions sin() and cos().
 */
declare const PI: number;

/**
 * QUARTER_PI is a mathematical constant with the value 0.7853982. It is
 * one quarter the ratio of the circumference of a circle to its diameter. It is
 * useful in combination with the trigonometric functions sin() and cos().
 */
declare const QUARTER_PI: number;

/**
 * TAU is an alias for TWO_PI, a mathematical constant with the value
 * 6.28318530717958647693. It is twice the ratio of the circumference of a
 * circle to its diameter. It is useful in combination with the trigonometric
 * functions sin() and cos().
 */
declare const TAU: number;

/**
 * TWO_PI is a mathematical constant with the value
 * 6.28318530717958647693. It is twice the ratio of the circumference of a
 * circle to its diameter. It is useful in combination with the trigonometric
 * functions sin() and cos().
 */
declare const TWO_PI: number;

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
declare const frameCount: number;

/**
 * Confirms if the window a p5.js program is in is "focused," meaning that
 * the sketch will accept mouse or keyboard input. This variable is "true"
 * if the window is focused and "false" if not.
 */
declare const focused: boolean;

/**
 * Sets the cursor to a predefined symbol or an image, or makes it visible if
 * already hidden. If you are trying to set an image as the cursor, the
 * recommended size is 16x16 or 32x32 pixels. The values for parameters x
 * and y must be less than the dimensions of the image.
 * @param type Built-In: either ARROW, CROSS, HAND, MOVE, TEXT and WAIT. Native CSS properties: 'grab', 'progress', 'cell' etc. External: path for cursor's images (Allowed File extensions: .cur, .gif, .jpg, .jpeg, .png) For more information on Native CSS cursors and url visit: https://developer.mozilla.org/en-US/docs/Web/CSS/cursor
 * @param x the horizontal active spot of the cursor (must be less than 32)
 * @param y the vertical active spot of the cursor (must be less than 32)
 */
declare function cursor(type: string | P5CursorType, x?: number, y?: number): void;

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
declare function frameRate(fps?: number): void;

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
declare function frameRate(): number;

/**
 * Hides the cursor from view.
 */
declare function noCursor(): void;

/**
 * System variable that stores the width of the screen display according to
 * the default pixelDensity. This is used to run a full-screen program on
 * any display size. To return actual screen size, multiply this by
 * pixelDensity.
 */
declare const displayWidth: number;

/**
 * System variable that stores the height of the screen display according to
 * the default pixelDensity. This is used to run a full-screen program on
 * any display size. To return actual screen size, multiply this by
 * pixelDensity.
 */
declare const displayHeight: number;

/**
 * System variable that stores the width of the inner window, it maps to
 * window.innerWidth.
 */
declare const windowWidth: number;

/**
 * System variable that stores the height of the inner window, it maps to
 * window.innerHeight.
 */
declare const windowHeight: number;

/**
 * System variable that stores the width of the drawing canvas. This value is
 * set by the first parameter of the createCanvas() function. For example,
 * the function call createCanvas(320, 240) sets the width variable to the
 * value 320. The value of width defaults to 100 if createCanvas() is not
 * used in a program.
 */
declare const width: number;

/**
 * System variable that stores the height of the drawing canvas. This value is
 * set by the second parameter of the createCanvas() function. For
 * example, the function call createCanvas(320, 240) sets the height variable
 * to the value 240. The value of height defaults to 100 if createCanvas() is
 * not used in a program.
 */
declare const height: number;

/**
 * If argument is given, sets the sketch to fullscreen or not based on the value
 * of the argument. If no argument is given, returns the current fullscreen
 * state. Note that due to browser restrictions this can only be called on user
 * input, for example, on mouse press like the example below.
 * @param val whether the sketch should be in fullscreen mode or not
 */
declare function fullscreen(val: boolean): void;

/**
 * If argument is given, sets the sketch to fullscreen or not based on the value
 * of the argument. If no argument is given, returns the current fullscreen
 * state. Note that due to browser restrictions this can only be called on user
 * input, for example, on mouse press like the example below.
 * @returns current fullscreen state
 */
declare function fullscreen(): boolean;

/**
 * Sets the pixel scaling for high pixel density displays. By default pixel
 * density is set to match display density, call pixelDensity(1) to turn this off.
 * Calling pixelDensity() with no arguments returns the current pixel
 * density of the sketch.
 * @param val whether or how much the sketch should scale
 */
declare function pixelDensity(val: number): void;

/**
 * Sets the pixel scaling for high pixel density displays. By default pixel
 * density is set to match display density, call pixelDensity(1) to turn this off.
 * Calling pixelDensity() with no arguments returns the current pixel
 * density of the sketch.
 * @returns current pixel density
 */
declare function pixelDensity(): number;

/**
 * Returns the pixel density of the current display the sketch is running on.
 * @returns current pixel density of the display
 */
declare function displayDensity(): number;

/**
 * Gets the current URL.
 * @returns url
 */
declare function getURL(): string;

/**
 * Gets the current URL path as an array.
 * @returns path components
 */
declare function getURLPath(): string[];

/**
 * Gets the current URL params as an Object.
 * @returns URL params
 */
declare function getURLParams(): { [key: string]: any };

// STRUCTURE
/**
 * Removes the entire p5 sketch. This will remove the canvas and any
 * elements created by p5.js. It will also stop the draw loop and unbind any
 * properties or methods from the window global scope. It will leave a
 * variable p5 in case you wanted to create a new p5 sketch. If you like, you
 * can set p5 = null to erase it. While all functions and variables and objects
 * created by the p5 library will be removed, any other global variables
 * created by your code will remain.
 */
declare function remove(): void;

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
declare function noLoop(): void;

/**
 * By default, p5.js loops through draw() continuously, executing the code
 * within it. However, the draw() loop may be stopped by calling noLoop().
 * In that case, the draw() loop can be resumed with loop().
 * 
 * Avoid calling loop() from inside setup().
 */
declare function loop(): void;

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
declare function push(): void;

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
declare function pop(): void;

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
declare function redraw(n?: number): void;

// RENDERING
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
declare function createCanvas(w: number, h: number, renderer?: P5Renderer): p5.Renderer;

/**
 * Resizes the canvas to given width and height. The canvas will be cleared
 * and draw will be called immediately, allowing the sketch to re-render itself
 * in the resized canvas.
 * @param w width of the canvas
 * @param h height of the canvas
 * @param noRedraw don't redraw the canvas immediately
 */
declare function resizeCanvas(w: number, h: number, noRedraw?: boolean): void;

/**
 * Removes the default canvas for a p5 sketch that doesn't require a canvas.
 */
declare function noCanvas(): void;

/**
 * Creates and returns a new p5.Renderer object. Use this class if you need to
 * draw into an off-screen graphics buffer. The two parameters define the
 * width and height in pixels.
 * @param w width of the offscreen graphics buffer
 * @param h height of the offscreen graphics buffer
 * @param renderer either P2D or WEBGL undefined defaults to P2D
 * @returns offscreen graphics buffer
 */
declare function createGraphics(w: number, h: number, renderer?: P5Renderer): p5.Graphics;

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
declare function blendMode(mode: P5BlendMode): void;

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
declare function setAttributes(key: string, value: boolean): void;

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
declare function setAttributes(obj: object): void;

// TRANSFORM
declare function applyMatrix(a: number, b: number, c: number, d: number, e: number, f: number): void;
/**
 * This one does not appear to work.
 */
declare function applyMatrix(a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number, i: number, j: number, k: number, l: number, m: number, n: number, o: number, p: number): void;
declare function resetMatrix(): void;
declare function rotate(angle: number, axis?: p5.Vector | number[]): void;
declare function rotateX(angle: number): void;
declare function rotateY(angle: number): void;
declare function rotateZ(angle: number): void;
declare function scale(s: number | p5.Vector | number[], y?: number, z?: number): void;
declare function scale(scales: p5.Vector | number[]): void;
declare function shearX(angle: number): void;
declare function shearY(angle: number): void;
declare function translate(x: number, y: number, z?: number): void;
declare function translate(vector: p5.Vector): void;

// DATA
// DATA: Dictionary
declare function createStringDict(key: string, value: string): p5.StringDict;
declare function createStringDict(object: Object): p5.StringDict;
declare function createNumberDict(key: number, value: number): p5.NumberDict;
declare function createNumberDict(object: Object): p5.NumberDict;

// DATA: Array Functions
declare function append(array: any[], value: any): any[];
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

// EVENTS
// EVENTS: Acceleration
declare const deviceOrientation: P5DeviceOrientation | undefined;
declare const accelerationX: number;
declare const accelerationY: number;
declare const accelerationZ: number;
declare const pAccelerationX: number;
declare const pAccelerationY: number;
declare const pAccelerationZ: number;
declare const rotationX: number;
declare const rotationY: number;
declare const rotationZ: number;
declare const pRotationX: number;
declare const pRotationY: number;
declare const pRotationZ: number;
declare const turnAxis: "X" | "Y" | "Z";
declare function setMoveThreshold(value: number): void;
declare function setShakeThreshold(value: number): void;

// EVENTS: Keyboard
declare const keyIsPressed: boolean;
declare const key: string;
declare const keyCode: number;
declare function keyIsDown(code: number): boolean;

// EVENTS: Mouse
declare const mouseX: number;
declare const mouseY: number;
declare const pmouseX: number;
declare const pmouseY: number;
declare const winMouseX: number;
declare const winMouseY: number;
declare const pwinMouseX: number;
declare const pwinMouseY: number;
declare const mouseButton: string;
declare const mouseIsPressed: boolean;

// EVENTS: Touch
declare const touches: { x: number, y: number, winX: number, winY: number, id: number }[];

// IMAGE
declare function createImage(width: number, height: number): p5.Image;
declare function saveCanvas(selectedCanvas?: p5.Element | HTMLCanvasElement, filename?: string, extension?: "jpg" | "png"): void;
declare function saveCanvas(filename?: string, extension?: "jpg" | "png"): void;
declare function saveFrames(filename: string, extension: "jpg" | "png", duration: number, framerate: number, callback?: ((images: { imageData: string, filename: string, ext: string }[]) => void)): void;

// IMAGE: Loading & Displaying
declare function loadImage(path: string, successCallback?: ((image: p5.Image) => void), failureCallback?: ((e: Event) => void)): p5.Image;
declare function image(img: p5.Image | p5.Element, x: number, y: number, width?: number, height?: number): void;
declare function image(img: p5.Image | p5.Element, dx: number, dy: number, dWidth: number, dHeight: number, sx: number, sy: number, sWidth?: number, sHeight?: number): void;
declare function tint(v1: number, v2: number, v3: number, alpha?: number): void;
declare function tint(value: string): void;
declare function tint(gray: number, alpha?: number): void;
declare function tint(values: number[]): void;
declare function tint(color: p5.Color): void;
declare function noTint(): void;
declare function imageMode(mode: P5ImageMode): void;

// IMAGE: Pixels
declare const pixels: number[];
declare function blend(srcImage: p5.Image, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: P5BlendMode): void;
declare function blend(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number, blendMode: P5BlendMode): void;
declare function copy(srcImage: p5.Image | p5.Element, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
declare function copy(sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void;
declare function filter(filterType: P5ImageFilterType, filterParam?: number): void;
declare function get(): p5.Image;
declare function get(x: number, y: number): p5.Image;
declare function get(x: number, y: number, w: number, h: number): p5.Image;
declare function loadPixels(): void;
declare function set(x: number, y: number, c: number | number[] | p5.Color | p5.Image): void;
declare function updatePixels(x?: number, y?: number, w?: number, h?: number): void;

// IO
// IO: Input
declare function loadJSON(path: string, jsonpOptions?: object, datatype?: "json" | "jsonp", callback?: ((json: any) => void), errorCallback?: ((response: any) => void)): object | any[];
declare function loadJSON(path: string, datatype: "json" | "jsonp", callback?: ((json: any) => void), errorCallback?: ((response: any) => void)): object | any[];
declare function loadJSON(path: string, callback: ((json: any) => void), errorCallback?: ((response: any) => void)): object | any[];
declare function loadStrings(filename: string, callback?: ((strs: string[]) => void), errorCallback?: ((response: any) => void)): string[];
declare function loadTable(filename: string, options: "header" | "csv" | "tsv", callback?: ((table: p5.Table) => void), errorCallback?: ((response: any) => void)): p5.Table;
declare function loadTable(filename: string, callback?: ((table: p5.Table) => void), errorCallback?: ((response: any) => void)): p5.Table;
declare function loadXML(filename: string, callback?: ((xml : p5.XML) => void), errorCallback?: ((response: any) => void)): p5.XML;
declare function loadBytes(file: string, callback?: ((data: { bytes: Uint8Array }) => void), errorCallback?: ((response: any) => void)): { bytes: Uint8Array };
declare function httpGet<T>(path: string, datatype?: "json" | "jsonp" | "binary" | "arrayBuffer" | "xml" | "text", data?: Object | boolean, callback?: ((data: T) => void), errorCallback?: ((response: any) => void)): Promise<T>;
declare function httpGet<T>(path: string, data: Object | boolean, callback?: ((data: T) => void), errorCallback?: ((response: any) => void)): Promise<T>;
declare function httpGet<T>(path: string, callback: ((data: T) => void), errorCallback?: ((response: any) => void)): Promise<T>;
declare function httpPost<T>(path: string, datatype?: "json" | "jsonp" | "binary" | "arrayBuffer" | "xml" | "text", data?: Object | boolean, callback?: ((data: T) => void), errorCallback?: ((response: any) => void)): Promise<T>;
declare function httpPost<T>(path: string, data: Object | boolean, callback?: ((data: T) => void), errorCallback?: ((response: any) => void)): Promise<T>;
declare function httpPost<T>(path: string, callback: ((data: T) => void), errorCallback?: ((response: any) => void)): Promise<T>;
declare function httpDo<T>(path: string, method?: "GET" | "POST" | "PUT", datatype?: "json" | "jsonp" | "xml" | "text", data?: Object, callback?: ((data: T) => void), errorCallback?: ((response: any) => void)): Promise<T>;
declare function httpDo<T>(path: string, options: RequestInit, callback?: ((data: T) => void), errorCallback?: ((response: any) => void)): Promise<T>;

// IO: Output
declare function createWriter(name: string, extension?: string): p5.PrintWriter;
declare function save(filename: string): void;
declare function save(object: Object, filename: string, options?: boolean | string): void;
declare function saveJSON(json: any[] | Object, filename: string, optimize?: boolean): void;
declare function saveStrings(list: string[], filename: string, extension?: string): void;
declare function saveTable(table: p5.Table, filename: string, options?: "tsv" | "csv" | "html"): void;

// IO: Time & Date
declare function day(): number;
declare function hour(): number;
declare function minute(): number;
declare function millis(): number;
declare function month(): number;
declare function second(): number;
declare function year(): number;

// MATH
declare function createVector(x?: number, y?: number, z?: number): p5.Vector;

// MATH: Calculation
declare function abs(n: number): number;
declare function ceil(n: number): number;
declare function constrain(n: number, low: number, high: number): number;
declare function dist(x1: number, y1: number, x2: number, y2: number): number;
declare function dist(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): number;
declare function exp(n: number): number;
declare function floor(n: number): number;
declare function lerp(start: number, stop: number, amt: number): number;
declare function log(n: number): number;
declare function mag(a: number, b: number): number;
declare function map(value: number, start1: number, stop1: number, start2: number, stop2: number, withinBounds?: boolean): number;
declare function max(n0: number, n1: number): number;
declare function max(nums: number[]): number;
declare function min(n0: number, n1: number): number;
declare function min(nums: number[]): number;
declare function norm(value: number, start: number, stop: number): number;
declare function pow(n: number, e: number): number;
declare function round(n: number): number;
declare function sq(n: number): number;
declare function sqrt(n: number): number;

// MATH: Noise
declare function noise(x: number, y?: number, z?: number): number;
declare function noiseDetail(lod: number, falloff: number): void;
declare function noiseSeed(seed: number): void;

// MATH: Trigonometry
declare function acos(value: number): number;
declare function asin(value: number): number;
declare function atan(value: number): number;
declare function atan2(y: number, x: number): number;
declare function cos(angle: number): number;
declare function sin(angle: number): number;
declare function tan(angle: number): number;
declare function degrees(radians: number): number;
declare function radians(degrees: number): number;
declare function angleMode(mode: P5AngleMode): void;

// MATH: Random
declare function randomSeed(seed: number): void;
declare function random(min?: number, max?: number): number;
declare function random<T>(choices: T[]): T;
declare function randomGaussian(mean?: number, sd?: number): number;

// TYPOGRAPHY: Attributes
declare function textAlign(horizAlign: P5HorizontalAlign, vertAlign?: P5VerticalAlign): void;
// textAlign() with no args?
declare function textLeading(leading: number): void;
// textLeading() with no args?
declare function textSize(size: number): void;
// textSize() with no args?
declare function textStyle(style: P5TextStyle): void;
// textStyle() with no args?
declare function textWidth(text: string): number;
declare function textAscent(): number;
declare function textDescent(): number;

// TYPOGRAPHY: Loading & Displaying
declare function loadFont(path: string, callback?: VoidFunction, onError?: VoidFunction): p5.Font;
declare function text(str: string | Object | any[] | number | boolean, x: number, y: number, x2?: number, y2?: number): void;
declare function textFont(): p5.Font;
declare function textFont(font: p5.Font | string, size?: number): void;

// LIGHTS, CAMERA: Interaction
declare function orbitControl(sensitivityX?: number, sensitivityY?: number): void;
declare function debugMode(): void;
declare function debugMode(mode: P5DebugMode): void;
declare function debugMode(mode: P5GridDebugMode, gridSize?: number, gridDivisions?: number, xOff?: number, yOff?: number, zOff?: number): void;
declare function debugMode(mode: P5AxesDebugMode, axesSize?: number, xOff?: number, yOff?: number, zOff?: number): void;
declare function debugMode(gridSize?: number, gridDivisions?: number, gridXOff?: number, gridYOff?: number, gridZOff?: number, axesSize?: number, axesXOff?: number, axesYOff?: number, axesZOff?: number): void;
declare function noDebugMode(): void;

// LIGHTS, CAMERA: Lights
declare function ambientLight(v1: number, v2: number, v3: number, alpha?: number): void;
declare function ambientLight(value: string): void;
declare function ambientLight(gray: number, alpha?: number): void;
declare function ambientLight(values: number[]): void;
declare function ambientLight(color: p5.Color): void;
declare function directionalLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): void;
declare function directionalLight(v1: number, v2: number, v3: number, position: p5.Vector): void;
declare function directionalLight(color: number[] | string | p5.Color, x: number, y: number, z: number): void;
declare function directionalLight(color: number[] | string | p5.Color, position: p5.Vector): void;
declare function pointLight(v1: number, v2: number, v3: number, x: number, y: number, z: number): void;
declare function pointLight(v1: number, v2: number, v3: number, position: p5.Vector): void;
declare function pointLight(color: number[] | string | p5.Color, x: number, y: number, z: number): void;
declare function pointLight(color: number[] | string | p5.Color, position: p5.Vector): void;
declare function lights(): void;

// LIGHTS, CAMERA: Material
declare function loadShader(vertFilename: string, fragFilename: string, callback?: ((shader: p5.Shader) => void), errorCallback?: ((error: Error) => void)): p5.Shader;
declare function createShader(vertSrc: string, fragSrc: string): p5.Shader;
declare function shader(shader: p5.Shader): void;
declare function resetShader(): void;
declare function normalMaterial(): void;
declare function texture(tex: p5.Image | p5.MediaElement | p5.Graphics): void;
declare function textureMode(mode: P5TextureMode): void;
declare function textureWrap(wrap: P5TextureWrap): void;
declare function textureWrap(wrapX: P5TextureWrap, wrapY: P5TextureWrap): void;
declare function ambientMaterial(v1: number, v2?: number, v3?: number, a?: number): void;
declare function ambientMaterial(color: number[] | string | p5.Color): void;
declare function specularMaterial(v1: number, v2?: number, v3?: number, a?: number): void;
declare function specularMaterial(color: number[] | string | p5.Color): void;
declare function shininess(shine: number): void;

// LIGHTS, CAMERA: Camera
declare function camera(x?: number, y?: number, z?: number, centerX?: number, centerY?: number, centerZ?: number, upX?: number, upY?: number, upZ?: number): void;
declare function perspective(fovy?: number, aspect?: number, near?: number, far?: number): void;
declare function ortho(left?: number, right?: number, bottom?: number, top?: number, near?: number, far?: number): void;
declare function createCamera(): p5.Camera;
declare function setCamera(cam: p5.Camera): void;