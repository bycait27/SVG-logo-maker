// import Shapes class
const Shapes = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/shapes.js');

// extend Shapes class 
class Triangle extends Shapes {
    // pass in parameters for logo
    constructor(characters, textColor, shape, shapeColor) {
        // use super to use the same key-value pairs from Shapes class
        super(characters, textColor, shape, shapeColor);
    }
    // render function
    render() {
        // render shape of triangle
        // render text color, shape color, and characters based on user input
        return `
        <polygon points="75,30 140,130 14,130" fill="${this.shapeColor}"/>

        <text x="76" y="109" font-size="36" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        `;
    }
}

// exports Triangle class
module.exports = Triangle;