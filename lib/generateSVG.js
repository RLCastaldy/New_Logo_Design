//function to write file
function generateSVG(data) {
    return `
    ${data.initials}
    ${data.color}
    ${data.shape}
    ${data.background}
    `;
}

module.exports = generateSVG;