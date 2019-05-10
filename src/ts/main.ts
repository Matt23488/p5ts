let bg: p5.Graphics;

window.setup = () => {
    // Example Defaults
    // createCanvas(100, 100);
    // createCanvas(100, 100, WEBGL);

    // Custom setup
    createCanvas(100, 100, WEBGL);
    noStroke();
    fill(255);
};

let lights = [
    { c: "#f00", t: 1.12, p: 1.91, r: 0.2 },
    { c: "#0f0", t: 1.21, p: 1.31, r: 0.2 },
    { c: "#00f", t: 1.37, p: 1.57, r: 0.2 },
    { c: "#ff0", t: 1.12, p: 1.91, r: 0.7 },
    { c: "#0ff", t: 1.21, p: 1.31, r: 0.7 },
    { c: "#f0f", t: 1.37, p: 1.57, r: 0.7 }
];

window.draw = () => {
    // Example Defaults
    // background(200);
    // fill(255);
    // stroke(0);

    // Custom draw
    var t = millis() / 1000 + 1000;
    background(0);
    directionalLight(color("#222"), 1, 1, 1);

    for (let i = 0; i < lights.length; i++) {
        let light = lights[i];
        pointLight(
            color(light.c),
            p5.Vector.fromAngles(t * light.t, t * light.p, width * light.r)
        );
    }

    specularMaterial(255);
    sphere(width * 0.1);

    rotateX(t * 0.77);
    rotateY(t * 0.83);
    rotateZ(t * 0.91);
    torus(width * 0.3, width * 0.07, 24, 10);
};

window.mousePressed = () => {
    setAttributes("perPixelLighting", true);
    noStroke();
    fill(255);
};

window.mouseReleased = () => {
    setAttributes("perPixelLighting", false);
    noStroke();
    fill(255);
};