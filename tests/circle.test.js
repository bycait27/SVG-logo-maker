const Circle = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/circle.js');

describe('Circle', () => {
    test('should render a logo in the shape of a circle.', () => {
        const expectedLogo = [
            `<circle cx="50" cy="75" r="50" fill="${this.shapeColor}"/>`,
            `<text x="50" y="90" font-size="45" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`,
        ].join('');
        const circle = new Circle().render();
        expect(circle).toEqual(expectedLogo);
    })
})