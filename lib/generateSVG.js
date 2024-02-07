//function to write file
function generateSVG(data) {
    return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="10" width="80" height="80" fill="blue"/>
    <text x="37" y="55" fill="orange">RLC</text>
    </svg>
    `;
}

module.exports = generateSVG;