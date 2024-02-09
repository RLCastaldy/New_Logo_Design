const {Circle, Triangle, Square} = require('./shapes');


describe("Circle", () => {
  test('MyCircle should have a property initialized correctly', () => {
    const myCircle = new Circle("green");
    expect(myCircle.renderShape()).toEqual(`<circle cx="50" cy="50" r="40" fill="${myCircle.background}" />`);
  });
})

describe("Square", () => {
  test('MySquare should have a property initialized correctly', () => {
    const mySquare = new Square("green");
    expect(mySquare.renderShape()).toEqual(`<rect x="10" y="10" width="80" height="80" fill="${mySquare.background}" />`);
  });
})

describe("Triangle", () => {
  test('MyTriangle should have a property initialized correctly', () => {
    const myTriangle = new Triangle("green");
    expect(myTriangle.renderShape()).toEqual(`<polygon points="50,10 10,90 90,90" fill="${myTriangle.background}" />`);
  });
})