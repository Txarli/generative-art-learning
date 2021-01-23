import P5 from 'p5';

interface Circle {
  x: number;
  y: number;
  radius: number;
}

const sketch = (p5: P5) => {
  const size = 600;
  var circles: Circle[] = [];
  var minRadius = 5;
  var maxRadius = 65;
  var totalCircles = 650;

  const maximumTries = 100;

  p5.setup = () => {
    p5.createCanvas(size, size);
    p5.background(255);

    p5.noLoop();
  };

  p5.draw = () => {
    p5.noFill();
    p5.strokeWeight(2);

    for (let i = 0; i <= totalCircles; i++) {
      createAndDrawCircle();
    }
  };

  p5.mouseClicked = () => {
    circles = [];
    p5.clear();
    p5.redraw();
  };

  function createAndDrawCircle(tries = 0) {
    if (tries > maximumTries) {
      return;
    }

    const circle: Circle = {
      x: p5.random(0, size),
      y: p5.random(0, size),
      radius: minRadius,
    };

    if (doesCircleHaveACollision(circle)) {
      createAndDrawCircle(tries + 1);
      return;
    }

    for (let radius = minRadius; radius <= maxRadius; radius++) {
      circle.radius = radius;

      if (doesCircleHaveACollision(circle)) {
        circle.radius--;
        break;
      }
    }

    circles.push(circle);
    p5.circle(circle.x, circle.y, circle.radius * 2);
  }

  function doesCircleHaveACollision(circle: Circle) {
    const collidesWithVerticalWalls =
      circle.x + circle.radius >= size || circle.x - circle.radius <= 0;

    const collidesWithHorizontalWalls =
      circle.y + circle.radius >= size || circle.y - circle.radius <= 0;

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

new P5(sketch);
