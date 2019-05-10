import Complex, { dft, DFTResult } from "./fourier";

let positions: Complex[] = [];
let transformedPositions: DFTResult[];
let time = 0;
let path: PVector[] = [];
const states = {
  NONE: -1,
  USER: 0,
  DRAW: 1
};
let state = states.DRAW;

window.mousePressed = () => {
  state = states.USER;
  positions = [];
  time = 0;
  path = [];
}

window.mouseReleased = () => {
  state = states.DRAW;
  transformedPositions = dft(positions);
  transformedPositions.sort((a, b) => b.amp - a.amp);
}

window.setup = () => {
  createCanvas(windowWidth, windowHeight);
  background(0);

  let triforceW, triforceH;
  if (width < height) {
    triforceW = width - 20;
    triforceH = 13 * triforceW / 15;
  } else {
    triforceH = height - 20;
    triforceW = 15 * triforceH / 13;
  }

  let triforce = [
    -triforceW / 2, triforceH / 2,
    -triforceW / 4, 0,
    0, -triforceH / 2,
    triforceW / 4, 0,
    -triforceW / 4, 0,
    0, triforceH / 2,
    triforceW / 4, 0,
    triforceW / 2, triforceH / 2,
    0, triforceH / 2
  ];

  const steps = 50;
  for (let i = 0; i < triforce.length; i += 2) {
    let nextIdx = (i + 2 == triforce.length) ? 0 : i + 2;
    let curr = {
      x: triforce[i],
      y: triforce[i + 1]
    };
    let next = {
      x: triforce[nextIdx],
      y: triforce[nextIdx + 1]
    };

    positions.push(new Complex(curr.x, curr.y));
    for (let j = 1; j <= steps; j++) {
      const re = lerp(curr.x, next.x, j / steps);
      const im = lerp(curr.y, next.y, j / steps);
      positions.push(new Complex(re, im));
    }
  }

  transformedPositions = dft(positions);
  transformedPositions.sort((a, b) => b.amp - a.amp);
}

function epicycles(x: number, y: number, rotation: number, fourier: DFTResult[]): PVector {
  for (let i = 0; i < fourier.length; i++) {
    let prevX = x;
    let prevY = y;
    let freq = fourier[i].freq;
    let radius = fourier[i].amp;
    let phase = fourier[i].phase;
    x += radius * cos(freq * time + phase + rotation);
    y += radius * sin(freq * time + phase + rotation);

    stroke(255, 100);
    noFill();
    ellipse(prevX, prevY, radius * 2);
    stroke(255);
    line(prevX, prevY, x, y);
  }
  return createVector(x, y);
}

window.draw = () => {
  background(0);
  if (state == states.USER) {
    let point = new Complex(mouseX - width / 2, mouseY - height / 2);
    positions.push(point);
    stroke(255);
    noFill();
    beginShape();
    for (let v of positions) {
      vertex(v.re + width / 2, v.im + height / 2);
    }
    endShape();
  } else if (state == states.DRAW) {
    let v = epicycles(width / 2, height / 2, 0, transformedPositions);
    path.unshift(v);
    beginShape();
    noFill();
    strokeWeight(2);
    stroke(255, 255, 0);
    for (let i = 0; i < path.length; i++) {
      vertex(path[i].x, path[i].y);
    }
    endShape();

    const dt = TWO_PI / transformedPositions.length;
    time += dt;

    if (time > TWO_PI) {
      time = 0;
      path = [];
    }
  }
}