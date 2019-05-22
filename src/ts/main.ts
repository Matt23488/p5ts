let earthquakes: any;

window.preload = () => {
    let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
    earthquakes = loadJSON(url);
};

window.setup = () => {
    // Example Defaults
    // createCanvas(100, 100);
    // createCanvas(100, 100, WEBGL);

    // Custom setup
    noLoop();
};

window.draw = () => {
    // Example Defaults
    // background(200);
    // fill(255);
    // stroke(0);

    // Custom draw
    background(200);
    let earthquakeMag = earthquakes.features[0].properties.mag;
    let earthquakeName = earthquakes.features[0].properties.place;
    ellipse(width / 2, height / 2, earthquakeMag * 10, earthquakeMag * 10);
    textAlign(CENTER);
    text(earthquakeName, 0, height - 30, width, 30);
};