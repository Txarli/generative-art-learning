import p5 from 'p5';
import React from 'react';
import { useP5Sketch } from '../useP5Sketch';

/**
 * Dialog Between Emotion and Method, 1986, Vera Molnar
 */

export const EmotionMethod: React.FC = () => {
  const ref = useP5Sketch(sketch);

  return <div ref={ref}></div>;
};

const sketch = (p5: p5) => {
  const padding = 20;
  const override = 10;
  const size = 600;
  const squareNumber = 6;
  const squareSize = size / squareNumber;

  const colors = [
    '#400C13',
    '#8C8937',
    '#8B2835',
    '#1B688C',
    '#0F3040',
    'white',
  ];

  p5.setup = () => {
    p5.createCanvas(size + padding * 2, size + padding * 2);

    p5.noLoop();
  };

  p5.draw = () => {
    p5.background('black');

    p5.noFill();
    p5.translate(padding, padding);

    for (let x = 0; x < squareNumber; x++) {
      for (let y = 0; y < squareNumber; y++) {
        p5.push();
        p5.strokeWeight(p5.random(2, 3));
        p5.stroke(p5.random(colors));
        const xMargins = [
          x * squareSize + override,
          (x + 1) * squareSize + override,
        ];
        const yMargins = [
          y * squareSize + override,
          (y + 1) * squareSize + override,
        ];
        const getRandomX = (): number => p5.random(...xMargins);
        const getRandomY = (): number => p5.random(...yMargins);

        const centerX = getRandomX();
        const centerY = getRandomY();

        for (let i = 0; i <= p5.random(4, 7); i++) {
          const a = {
            x: p5.random(x * squareSize - override, centerX),
            y: p5.random(y * squareSize - override, centerY),
          };
          const b = {
            x: p5.random(centerX, (x + 1) * squareSize + override),
            y: p5.random(y * squareSize - override, centerY),
          };
          const c = {
            x: p5.random(centerX, (x + 1) * squareSize + override),
            y: p5.random(centerY, (y + 1) * squareSize + override),
          };
          const d = {
            x: p5.random(x * squareSize - override, centerX),
            y: p5.random(centerY, (y + 1) * squareSize + override),
          };
          p5.quad(a.x, a.y, b.x, b.y, c.x, c.y, d.x, d.y);
        }
        p5.pop();
      }
    }
  };

  p5.mouseClicked = () => {
    p5.clear();
    p5.redraw();
  };
};
