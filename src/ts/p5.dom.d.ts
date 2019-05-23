interface P5SizeConstant {}
interface P5CaptureConstant {}

declare const AUTO: P5SizeConstant & string;
declare const AUDIO: P5CaptureConstant & string;
declare const VIDEO: P5CaptureConstant & string;

declare namespace p5 {
    /**
     * Base class for all elements added to a sketch, including canvas, graphics
     * buffers, and other HTML elements. Methods in blue are included in the
     * core functionality, methods in brown are added with the p5.dom library. It
     * is not called directly, but p5.Element objects are created by calling
     * createCanvas, createGraphics, or in the p5.dom library, createDiv,
     * createImg, createInput, etc.
     */
    interface Element {

        // /**
        //  * Underlying HTML element. All normal HTML methods can be called on
        //  * this.
        //  */
        // elt: HTMLElement;

        // /**
        //  * Attaches the element to the parent specified. A way of setting the
        //  * container for the element. Accepts either a string ID, DOM node, or
        //  * p5.Element. If no arguments given, parent node is returned. For more
        //  * ways to position the canvas, see the positioning the canvas wiki page. All
        //  * above examples except for the first one require the inclusion of the
        //  * p5.dom library in your index.html. See the using a library section for
        //  * information on how to include this library.
        //  * @param parent the ID, DOM node, or p5.Element of desired parent element
        //  */
        // parent(parent: string | p5.Element | object): void;

        // /**
        //  * Attaches the element to the parent specified. A way of setting the
        //  * container for the element. Accepts either a string ID, DOM node, or
        //  * p5.Element. If no arguments given, parent node is returned. For more
        //  * ways to position the canvas, see the positioning the canvas wiki page. All
        //  * above examples except for the first one require the inclusion of the
        //  * p5.dom library in your index.html. See the using a library section for
        //  * information on how to include this library.
        //  * @returns parent node
        //  */
        // parent(): object;

        // /**
        //  * Sets the ID of the element. If no ID argument is passed in, it instead
        //  * returns the current ID of the element. Note that only one element can have
        //  * a particular id in a page. The .class() function can be used to identify
        //  * multiple elements with the same class name.
        //  * @param id ID of the element
        //  */
        // id(id: string): void;

        // /**
        //  * Sets the ID of the element. If no ID argument is passed in, it instead
        //  * returns the current ID of the element. Note that only one element can have
        //  * a particular id in a page. The .class() function can be used to identify
        //  * multiple elements with the same class name.
        //  * @returns current ID of the element
        //  */
        // id(): string;

        // /**
        //  * Adds given class to the element. If no class argument is passed in, it
        //  * instead returns a string containing the current class(es) of the element.
        //  * @param class_ class to add
        //  */
        // class(class_: string): void;

        // /**
        //  * Adds given class to the element. If no class argument is passed in, it
        //  * instead returns a string containing the current class(es) of the element.
        //  * @returns a string containing the current class(es) of the element
        //  */
        // class(): string;

        // /**
        //  * The .mousePressed() function is called once after every time a mouse
        //  * button is pressed over the element. Some mobile browsers may also
        //  * trigger this event on a touch screen, if the user performs a quick tap. This
        //  * can be used to attach element specific event listeners.
        //  * @param fxn function to be fired when mouse is pressed over the element. If `false` is passed instead, the previously firing function will no longer fire
        //  */
        // mousePressed(fxn: Function | boolean): void;

        // // TODO: finish DOM
        addClass(val: string): void;
        removeClass(val: string): void;
        hasClass(val: string): boolean;
        toggleClass(val: string): void;
        child(): Node[];
        child(child: string | p5.Element | HTMLElement): void;
        center(align?: "vertical" | "horizontal"): void;
        html(): string;
        html(html: string, append?: boolean): void;
        position(): { x: number, y: number };
        position(x: number, y: number): void;
        style(property: string): string;
        style(property: string, value: string | number | p5.Color): void;
        attribute(): string;
        attribute(attr: string, value: string): void;
        removeAttribute(attr: string): void;
        value<T extends number | string>(): T;
        value<T extends number | string>(value: T): void;
        show(): void;
        hide(): void;
        size(): { width: number, height: number };
        size(w: number | P5SizeConstant, h?: number | P5SizeConstant): void;
        remove(): void;
        drop(callback?: ((file: p5.File) => void), fxn?: ((e: DragEvent) => void)): void;
        
        changed(callback: VoidFunction): void;
        changed(cancel: false): void;
        input(callback: VoidFunction): void;
        input(cancel: false): void;

        // TODO: this is a placeholder to allow for function calls
        // that exist only on some instances of p5.Element.
        [key: string]: any;
    }

    interface MediaElement extends p5.Element {
        src: string;

        play(): void;
        stop(): void;
        pause(): void;
        loop(): void;
        noLoop(): void;
        autoplay(autoplay: boolean): void;
        volume(): number;
        volume(val: number): void;
        speed(): number;
        speed(speed: number): void;
        time(): number;
        time(time: number): void;
        duration(): number;
        onended(callback: ((element: p5.MediaElement) => void)): void;
        // TODO: connect(). I'm omitting it here because it seems reliant on another library, namely p5.sound.js.
        disconnect(): void;
        showControls(): void;
        hideControls(): void;
        addCue(time: number, callback: ((time: number) => void)): number;
        addCue<T>(time: number, callback: ((time: number, param: T) => void), value: T): number;
        removeCue(id: number): void;
        clearCues(): void;
    }
    const MediaElement: {
        prototype: p5.MediaElement;
        new(elt: string): p5.MediaElement;
    };

    interface File {
        file: globalThis.File;
        type: string;
        subtype: string;
        name: string;
        size: number;
        data: string;
    }
    const File: {
        prototype: p5.File;
        new(file: globalThis.File): p5.File;
    };
}

// TODO: Since documentation is so lacking, I'm going to have to go through
// all the code and find out which of these add extra functions and properties
// to the p5.Elements returned. For example, createSelect() returns a p5.Element
// that has an option() method that isn't present on other p5.Element objects.
// Ultimately I'll create separate interfaces for each special type to get compile-time
// checking for them.
declare function select(name: string, container?: string | p5.Element | HTMLElement): p5.Element | null;
declare function selectAll(name: string, container?: string | p5.Element | HTMLElement): p5.Element[];
declare function removeElements(): void;
declare function createDiv(html?: string): p5.Element;
declare function createP(html?: string): p5.Element;
declare function createSpan(html?: string): p5.Element;
declare function createImg(src: string, alt?: string, successCallback?: VoidFunction): p5.Element;
declare function createImg(src: string, successCallback: VoidFunction): p5.Element;
declare function createA(href: string, html: string, target?: string): p5.Element;
declare function createSlider(min: number, max: number, value?: number, step?: number): p5.Element;
declare function createButton(label: string, value?: string): p5.Element;
declare function createCheckbox(label?: string, value?: boolean): p5.Element;
declare function createSelect(multiple?: boolean): p5.Element;
declare function createSelect(existing: HTMLElement): p5.Element;
declare function createRadio(divId?: string): p5.Element;
declare function createColorPicker(value?: string | p5.Color): p5.Element;
declare function createInput(value?: string, type?: string): p5.Element;
declare function createFileInput(callback?: VoidFunction, multiple?: boolean): p5.Element;
declare function createVideo(src: string | string[], callback?: VoidFunction): p5.MediaElement;
declare function createAudio(src: string | string[], callback?: VoidFunction): p5.MediaElement;
declare function createCapture(type: string | P5CaptureConstant | MediaTrackConstraintSet, callback?: VoidFunction): p5.Element;
declare function createElement(tag: string, content?: string): p5.Element;