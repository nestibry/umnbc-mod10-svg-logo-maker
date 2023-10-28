// Install Dependencies
const fs = require('fs');
const Logo = require('./lib/Logo.js');
const Circle = require('./lib/Circle.js');
const Triangle = require('./lib/Triangle.js');
const Square = require('./lib/Square.js');


// Script to set and render Logo
const newLogo = new Logo();
newLogo.setLogoInfo()
.then( () => {

    switch(newLogo.shape) {
        case "circle":
            const circleLogo = new Circle(newLogo.text, newLogo.textcolor, newLogo.shape, newLogo.shapecolor);
            var svgStr = circleLogo.render();
            break;
        case "triangle":
            const triangleLogo = new Triangle(newLogo.text, newLogo.textcolor, newLogo.shape, newLogo.shapecolor);
            var svgStr = triangleLogo.render();
            break;
        case "square":
            const squareLogo = new Square(newLogo.text, newLogo.textcolor, newLogo.shape, newLogo.shapecolor);
            var svgStr = squareLogo.render();
            break;
        default:
            console.log("Error creating logo, shape not defined properly.");
    }
    const fileName = './output/logo.svg';
    fs.writeFile(fileName, svgStr, (err) => err ? console.log(err) : console.log(`Generated: ${fileName}`));
    
});




