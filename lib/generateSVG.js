//import shape classes
const {Circle, Square, Triangle, Text} = require('./shapes')

//function to write file
function generateSVG(data) {
    let shape;

    if(data.shape==="Circle") {
        shape = new Circle(data.background)
    }

    if(data.shape==="Square") {
        shape = new Square(data.background)
    }

    if(data.shape==="Triangle") {
        shape = new Triangle(data.background)
    }

    let text = new Text(data.color, data.initials);

    return `
    <svg viewBox="0 0 100" xmlns="http://www.w3.org/2000/svg">
    ${shape.renderShape()}
    ${text.renderText()}
    </svg>
    `;
}

//exports method
module.exports = generateSVG;