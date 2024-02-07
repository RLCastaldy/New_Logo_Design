const Circle = require('./shapes');
const Triangle = require('./shapes');
const Square = require('./shapes');
const Text = require('./shapes');



test('MyCircle should have a property initialized correctly', () => {
    const myCircle = new Circle();
    expect(myCircle.circleProperty).toBe('expectedValue');
  });
  
  test('MyCircle should execute myCircleMethod correctly', () => {
    const myCircle = new Circle();
    const resultCircle = myCircle.renderCircle();
    expect(resultCircle).toBe('<circle cx="50" cy="50" r="40"/>');
  });

  
  
  test('MyTriangle should have a property initialized correctly', () => {
    const myTriangle = new Triangle();
    expect(myTriangle.triangleProperty).toBe('expectedValue');
  });
  
  test('MyTriangle should execute myTriangleMethod correctly', () => {
    const myTriangle = new Triangle();
    const resultTriangle = myTriangle.renderTriangle();
    expect(resultTriangle).toBe('<polygon points="50,10 10,90 90,90"/>');
  });



  test('MySquare should have a property initialized correctly', () => {
    const mySquare = new Square();
    expect(mySquare.squareProperty).toBe('expectedValue');
  });
  
  test('MySquare should execute mySquareMethod correctly', () => {
    const mySquare = new Square();
    const resultSquare = mySquare.renderSquare();
    expect(resultSquare).toBe('<rect x="10" y="10" width="80" height="80"/>');
  });



  test('MyText should have a property initialized correctly', () => {
    const myText = new Text();
    expect(myText.textProperty).toBe('expectedValue');
  });
  
  test('MyText should execute myTextMethod correctly', () => {
    const myText = new Text();
    const resultText = myText.renderText();
    expect(resultText).toBe('<rect x="10" y="10" width="80" height="80"/>');
  });