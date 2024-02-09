const {Circle, Triangle, Square} = require('./shapes');


describe("Circle", () => {
  test('MyCircle should have a property initialized correctly', () => {
    const myCircle = new Circle("green");
    expect(myCircle.renderShape()).toEqual(`<circle cx="145" cy="125" r="100" fill="${myCircle.background}" />`);
  });
})

describe("Square", () => {
  test('MySquare should have a property initialized correctly', () => {
    const mySquare = new Square("green");
    expect(mySquare.renderShape()).toEqual(`<rect x="50" y="22" width="200" height="200" fill="${mySquare.background}" />`);
  });
})

describe("Triangle", () => {
  test('MyTriangle should have a property initialized correctly', () => {
    const myTriangle = new Triangle("green");
    expect(myTriangle.renderShape()).toEqual(`<polygon points="150, 18 244, 182 56, 182" fill="${myTriangle.background}" />`);
  });
})