class Circle {
  constructor(background) {
    this.background = background;
  }

  renderCircle() {
    // Generate the SVG code for the circle
    return `<circle cx="50" cy="50" r="40" fill="${this.background}" />`;
  }
}



class Triangle {
  constructor(background) {
    this.background = background;
  }

  renderTriangle() {
    // Generate the SVG code for the circle
    return `<polygon points="50,10 10,90 90,90" fill="${this.background}" />`;
  }
}



class Square {
  constructor(background) {
    this.background = background;
  }

  renderSquare() {
    // Generate the SVG code for the circle
    return `<rect x="10" y="10" width="80" height="80" fill="${this.background}" />`;
  }
}



class Text {
  constructor(color) {
    this.color = color;
    this.initials = initials;
  }

  renderText() {
    // Generate the SVG code for the circle
    return `<text x="37" y="55" fill="${this.color}">${this.initials}</text>`;
  }
}

  module.exports = Circle;
  module.exports = Square;
  module.exports = Triangle;
  module.exports = Text;