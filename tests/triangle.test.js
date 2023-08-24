const Triangle = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/triangle.js');

describe('Triangle', () => {
    test('should render a logo in the shape of a triangle.', () => {
        const expectedLogo = [
            `<polygon points="75,30 140,130 14,130" fill="${this.shapeColor}"/>`,
            `<text x="76" y="109" font-size="36" text-anchor="middle" fill="${this.textColor}">${this.characters}</text>`,
        ].join('');
        const triangle = new Triangle().render();
        expect(triangle).toEqual(expectedLogo);
    })
}) 