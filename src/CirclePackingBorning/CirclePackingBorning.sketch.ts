import P5 from 'p5';

interface Circle {
  x: number;
  y: number;
  radius: number;
}

export const sketch = (p5: P5) => {
  const size = 600;
  var circles: Circle[] = [];
  var minRadius = 5;
  var maxRadius = 65;
  var totalCircles = 650;
  let currentCircle: Circle = createCircle();
  const maximumTries = 100;

  p5.setup = () => {
    p5.createCanvas(size, size);
    p5.background(255);
  };

  p5.draw = () => {
    p5.fill('white');
    p5.strokeWeight(2);

    currentCircle.radius += 1;

    if (
      doesCircleHaveACollision(currentCircle) ||
      currentCircle.radius >= maxRadius
    ) {
      currentCircle.radius -= 1;
      circles.push(currentCircle);
      currentCircle = createCircle();
    } else {
      p5.circle(currentCircle.x, currentCircle.y, currentCircle.radius * 2);
    }

    if (circles.length >= totalCircles || !currentCircle) {
      p5.noLoop();
    }
  };

  p5.mouseClicked = () => {
    circles = [];
    currentCircle = createCircle();
    p5.clear();
    p5.redraw();
    p5.loop();
  };

  function createCircle(tries = 0): Circle {
    if (tries >= maximumTries) {
      return;
    }

    const newCircle = {
      x: p5.random(0, size),
      y: p5.random(0, size),
      radius: minRadius,
    };
    if (!doesCircleHaveACollision(newCircle)) {
      return newCircle;
    }

    return createCircle(tries + 1);
  }

  function doesCircleHaveACollision(circle: Circle) {
    const collidesWithVerticalWalls =
      circle.x + circle.radius > size || circle.x - circle.radius < 0;

    const collidesWithHorizontalWalls =
      circle.y + circle.radius > size || circle.y - circle.radius < 0;

    const collidesWithDrawnCircle = circles.some(
      drawnCircle =>
        p5.dist(drawnCircle.x, drawnCircle.y, circle.x, circle.y) <
        drawnCircle.radius + circle.radius,
    );

    return (
      collidesWithVerticalWalls ||
      collidesWithHorizontalWalls ||
      collidesWithDrawnCircle
    );
  }
};
