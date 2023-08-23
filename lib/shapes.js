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
}

// exports Shapes class
module.exports = Shapes;