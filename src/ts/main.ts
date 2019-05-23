let mandel: p5.Shader;

window.preload = () => {
    mandel = loadShader("assets/shader.vert", "assets/shader.frag");
};

window.setup = () => {
    // Example Defaults
    // createCanvas(100, 100);
    // createCanvas(100, 100, WEBGL);

    // Custom setup
    createCanvas(100, 100, WEBGL);
    shader(mandel);
    noStroke();
    mandel.setUniform("p", [-0.74364388703, 0.13182590421]);
};

window.draw = () => {
    // Example Defaults
    // background(200);
    // fill(255);
    // stroke(0);

    // Custom draw
    mandel.setUniform("r", 1.5 * exp(-6.5 * (1 + sin(millis() / 2000))));
    quad(-1, -1, 1, -1, 1, 1, -1, 1);
};