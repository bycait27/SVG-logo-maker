const Shapes = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/shapes.js');

describe('Shapes', () => {
    test('should throw error if render() is called without specifying what kind of shape should be rendered.', () => {
        const shapes = new Shapes();
        const err = new Error('Must indicate Circle, Square, or Triangle to render a shape!');
        expect(shapes.render).toThrow(err);
    });
});