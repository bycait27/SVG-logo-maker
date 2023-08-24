// create Shapes class
class Shapes {
    // pass in parameters for logo
    constructor(characters, textColor, shape, shapeColor) {
        // create key-value pairs from parameters
        this.characters = characters;
        this.textColor = textColor;
        this.shape = shape;
        this.shapeColor = shapeColor;
    }
    render() {
        throw new Error('Must indicate Circle, Square, or Triangle to render a shape!')
    }
}

// exports Shapes class
module.exports = Shapes;