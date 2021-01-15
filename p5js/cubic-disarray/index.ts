import P5 from 'p5'

var multiplier = 0.77;

const sketch = (p5: P5) => {
	p5.setup =  () => {
        p5.createCanvas(600, 800);
        p5.background(255);
        p5.angleMode(p5.DEGREES);
        p5.noLoop();
    }


	p5.draw = () => {
        p5.noFill();
        p5.strokeWeight(2);
        var size = 50;
        var across = 9;
        var down = 13;
        var rotateMult = 3;
        for (var x = 0; x < across; x++) {
          for (var y = 0; y < down; y++) {
            //without plusMinus all the squares will rotate in one direction
            var plusMinus = p5.random() > .5 ? 1 : -1;
            var rotateAmt = y * plusMinus * p5.random() * rotateMult * multiplier;
            p5.push();
            p5.translate(x*size+size, y*size+size);
            p5.rotate(rotateAmt);
            p5.rect(0, 0, size, size);
            p5.pop();
          }
        }
	};
};

new P5(sketch);
