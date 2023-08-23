// import inquirer module
const inquirer = require('inquirer');
// import fs module
const fs = require('fs');
// import shape classes
const Shapes = require('');
const Circle = require('');
const Square = require('');
const Triangle = require('');

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
        const newCircle = new Circle().render();
        const newSquare = new Square().render();
        const newTriangle = new Triangle().render();

        let svgTemplate = `
        <svg width="300" height="200">

        // fix this
        ${newCircle || newTriangle || newSquare}

        </svg>
        `;
        fs.writeFile('logo.svg', svgTemplate, err => {
            err ? console.error(err) : console.log('Generated logo.svg');
        })
    })