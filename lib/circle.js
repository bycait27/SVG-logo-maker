// import Shapes class
const Shapes = require('');

// extend Shapes class 
class Circle extends Shapes {
    // pass in parameters for logo
    constructor(characters, textColor, shape, shapeColor) {
        // use super to use the same key-value pairs from Shapes class
        super(characters, textColor, shape, shapeColor);
    }
    // render function
    render() {
        // render shape of circle
        // render text color, shape color, and characters based on user input
        return `
        <circle cx="50" cy="75" r="50" fill="${this.shapeColor}"/>
        
        <text x="50" y="90" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>
        `;
    }
}

// exports Circle class
module.exports = Circle;