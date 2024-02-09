class Circle {
  constructor(background) {
    this.background = background;
  }

  renderShape() {
    // Generate the SVG code for the circle
    return `<circle cx="145" cy="125" r="100" fill="${this.background}" />`;
  }
}



class Triangle {
  constructor(background) {
    this.background = background;
  }

  renderShape() {
    // Generate the SVG code for the circle
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.background}" />`;
  }
}



class Square {
  constructor(background) {
    this.background = `${background}`
  }

  renderShape() {
    // Generate the SVG code for the circle
    return `<rect x="50" y="22" width="200" height="200" fill="${this.background}" />`;
  }
}



class Text {
  constructor(color, initials) {
    this.color = color;
    this.initials = initials;
  }

  renderText() {
    // Generate the SVG code for the circle
    return `<text x="107" y="130" font-size="40" font-weight = "bold" fill="${this.color}">${this.initials}</text>`;
  }
}

  module.exports = {
    Circle,
    Square,
    Triangle,
    Text,
  }