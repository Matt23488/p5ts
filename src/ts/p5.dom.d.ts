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

        /**
         * Underlying HTML element. All normal HTML methods can be called on
         * this.
         */
        elt: HTMLElement;

        /**
         * Attaches the element to the parent specified. A way of setting the
         * container for the element. Accepts either a string ID, DOM node, or
         * p5.Element. If no arguments given, parent node is returned. For more
         * ways to position the canvas, see the positioning the canvas wiki page. All
         * above examples except for the first one require the inclusion of the
         * p5.dom library in your index.html. See the using a library section for
         * information on how to include this library.
         * @param parent the ID, DOM node, or p5.Element of desired parent element
         */
        parent(parent: string | p5.Element | object): void;

        /**
         * Attaches the element to the parent specified. A way of setting the
         * container for the element. Accepts either a string ID, DOM node, or
         * p5.Element. If no arguments given, parent node is returned. For more
         * ways to position the canvas, see the positioning the canvas wiki page. All
         * above examples except for the first one require the inclusion of the
         * p5.dom library in your index.html. See the using a library section for
         * information on how to include this library.
         * @returns parent node
         */
        parent(): object;

        /**
         * Sets the ID of the element. If no ID argument is passed in, it instead
         * returns the current ID of the element. Note that only one element can have
         * a particular id in a page. The .class() function can be used to identify
         * multiple elements with the same class name.
         * @param id ID of the element
         */
        id(id: string): void;

        /**
         * Sets the ID of the element. If no ID argument is passed in, it instead
         * returns the current ID of the element. Note that only one element can have
         * a particular id in a page. The .class() function can be used to identify
         * multiple elements with the same class name.
         * @returns current ID of the element
         */
        id(): string;

        /**
         * Adds given class to the element. If no class argument is passed in, it
         * instead returns a string containing the current class(es) of the element.
         * @param class_ class to add
         */
        class(class_: string): void;

        /**
         * Adds given class to the element. If no class argument is passed in, it
         * instead returns a string containing the current class(es) of the element.
         * @returns a string containing the current class(es) of the element
         */
        class(): string;

        /**
         * The .mousePressed() function is called once after every time a mouse
         * button is pressed over the element. Some mobile browsers may also
         * trigger this event on a touch screen, if the user performs a quick tap. This
         * can be used to attach element specific event listeners.
         * @param fxn function to be fired when mouse is pressed over the element. If `false` is passed instead, the previously firing function will no longer fire
         */
        mousePressed(fxn: Function | boolean): void;

        // TODO: finish DOM
    }
}

interface Slider {
    value(): number;
}

declare var createSlider: {
    (min: number, max: number, startVal: number, step: number): Slider;
};