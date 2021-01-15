import P5 from 'p5'

const multiplier = 0.77;


const sketch = (p5: P5) => {
  let y: number
  
  p5.setup =  () => {
      p5.createCanvas(600, 800);
      p5.background(255);
      p5.angleMode(p5.DEGREES);

      y = 0;
  }


	p5.draw = () => {
      p5.noFill();
      p5.strokeWeight(1);
      const size = 50;
      const across = 9;
      const down = 13;
      const rotateMult = 3;
      for (let x = 0; x < across; x++) {
          //without plusMinus all the squares will rotate in one direction
          const plusMinus = p5.random() > .5 ? 1 : -1;
          const rotateAmt = y * plusMinus * p5.random() * rotateMult * multiplier;
          p5.push();
          p5.translate(x*size+size, y*size+size);
          p5.rotate(rotateAmt);
          p5.rect(0, 0, size, size);
          p5.pop();
      }

    if (y < down) {
      y++
    } else {
      y = 0
    }
  };

  p5.mouseClicked = () => {
    p5.clear()
    p5.redraw()
  }   
};

new P5(sketch);
