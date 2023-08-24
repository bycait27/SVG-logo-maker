// import inquirer module
const inquirer = require('inquirer');
// import fs module
const fs = require('fs');
// import shape classes
const Shapes = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/shapes.js');
const Circle = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/circle.js');
const Square = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/square.js');
const Triangle = require('/Users/caitlinash/Desktop/coding-challenges/SVG-logo-maker/lib/triangle.js');

// add inquirer prompts
inquirer
    .prompt([
        {
            type: 'input',
            message: 'Please enter three characters:',
            name: 'characters',
        },
        {
            type: 'input',
            message: 'Please provide a color for the text (a color keyword OR a hexadecimal number):',
            name: 'textColor',
        },
        {
            type: 'list',
            message: 'Please choose a shape:',
            name: 'shape',
            choices:['Circle', 'Square', 'Triangle'],
        },
        {
            type: 'input',
            message: 'Please provide a color for the shape (a color keyword OR a hexadecimal number):',
            name: 'shapeColor',
        },
    ])
    .then((response) => {
        // declare rendered shape of each type
        const newCircle = new Circle().render();
        const newSquare = new Square().render();
        const newTriangle = new Triangle().render();

        // declare template for contents of file
        let svgTemplate = `
        <svg width="300" height="200">

        // code stops reading after newCircle...fix this
        ${newCircle || newTriangle || newSquare}

        </svg>
        `;
        // creates a file named 'logo.svg' with the logo generated based on the user's input
        fs.writeFile('logo.svg', svgTemplate, err => {
            err ? console.error(err) : console.log('Generated logo.svg');
        })
    })