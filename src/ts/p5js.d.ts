interface Window {
    setup(): void;
    draw(): void;
    mousePressed(): void;
    mouseReleased(): void;
}

interface Renderer{}
declare var P2D: Renderer;
declare var WEBGL: Renderer;

declare var createCanvas: {
    (width: number, height: number, renderer?: Renderer): void;
};

declare var background: {
    (gray: number, alpha?: number): void;
    (r: number, g: number, b: number, a?: number): void;
};

declare var pixelDensity: {
    (val: number): void;
    (): number;
};

declare var loadPixels: {
    (): void;
};
declare var updatePixels: {
    (): void;
};

declare var pixels: Array<number>;
declare var width: number;
declare var height: number;
declare var windowWidth: number;
declare var windowHeight: number;
declare var mouseX: number;
declare var mouseY: number;
declare var TWO_PI: number;

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
declare var sqrt: {
    (value: number): number;
};
declare var atan2: {
    (a: number, b: number): number;
};
declare var lerp: {
    (begin: number, end: number, percentage: number): number;
};

interface PVector {
    x: number;
    y: number;
}

declare var createVector: {
    (x: number, y: number): PVector;
};

declare var stroke: {
    (r: number, g: number, b: number, a?: number): void;
    (gray: number, alpha?: number): void;
};

declare var noFill: {
    (): void;
};

declare var ellipse: {
    (x: number, y: number, r1: number, r2?: number): void;
};

declare var line: {
    (x1: number, y1: number, x2: number, y2: number): void;
};

declare var beginShape: {
    (): void;
};
declare var endShape: {
    (): void;
};
declare var vertex: {
    (x: number, y: number): void;
};

declare var strokeWeight: {
    (value: number): void;
};