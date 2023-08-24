const Square = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/circle.js');

describe('Square', () => {
    test('should render a logo in the shape of a square.', () => {
        const expectedLogo = [
            `<rect x="30" y="30" width="100" height="100" fill="${this.shapeColor}"/>`,
            `<text x="80" y="96" font-size="47" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`,
        ].join('');
        const square = new Square().render();
        expect(square).toEqual(expectedLogo);
    })
}) 