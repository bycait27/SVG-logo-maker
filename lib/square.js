// import Shapes class
const Shapes = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/shapes.js');

// extend Shapes class 
class Square extends Shapes {
    // pass in parameters for logo
    constructor(characters, textColor, shape, shapeColor) {
        // use super to use the same key-value pairs from Shapes class
        super(characters, textColor, shape, shapeColor);
    }
    // render function
    render() {
        // render shape of square
        // render text color, shape color, and characters based on user input
        return `
        <rect x="30" y="30" width="100" height="100" fill="${this.shapeColor}"/>
        
        <text x="80" y="96" font-size="47" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        `;
    }
}

// exports Square class
module.exports = Square;