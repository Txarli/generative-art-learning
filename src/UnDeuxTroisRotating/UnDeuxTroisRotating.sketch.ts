import P5 from 'p5';

export const sketch = (p5: P5) => {
  const step = 40;
  const size = step * 15;
  const aThirdOfHeight = size / 3;
  const padding = 20;
  const speed = 0.12;
  let initialRotations: {
    [key: string]: { initialRotation: number; speed: number };
  } = {};

  p5.setup = () => {
    p5.createCanvas(size + padding * 2, size + padding * 2);
    p5.background(255);
    p5.frameRate(30);
  };

  p5.draw = () => {
    p5.clear();
    p5.noFill();
    p5.strokeWeight(4);
    p5.translate(padding, padding);

    for (let y = 0; y < size; y += step) {
      for (let x = 0; x < size; x += step) {
        if (y < aThirdOfHeight) {
          drawLines(x, y, [0]);
        } else if (y < 2 * aThirdOfHeight) {
          drawLines(x, y, [-1 / 4, 1 / 4]);
        } else {
          drawLines(x, y, [-1 / 3, 0, 1 / 3]);
        }
      }
    }
  };

  p5.mouseClicked = () => {
    initialRotations = {};
    p5.clear();
    p5.redraw();
  };

  function drawLines(x: number, y: number, xAxisMultipliers: number[]) {
    p5.push();
    p5.translate(x + step / 2, y + step / 2);

    const initialRotation = initialRotations[`${x}-${y}`];
    if (!initialRotation) {
      const rotation = p5.random(0, p5.PI);
      initialRotations[`${x}-${y}`] = {
        initialRotation: rotation,
        speed: p5.random(-speed, speed),
      };
      p5.rotate(rotation);
    } else {
      p5.rotate(
        initialRotation.initialRotation + p5.frameCount * initialRotation.speed,
      );
    }

    xAxisMultipliers.forEach(xAxisMultiplier => {
      p5.line(
        step * xAxisMultiplier,
        -step / 2,
        step * xAxisMultiplier,
        step / 2,
      );
    });
    p5.pop();
  }
};
