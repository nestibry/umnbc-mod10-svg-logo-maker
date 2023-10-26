// Include packages needed for this application
const inquirer  = require('inquirer');
const convert = require('color-convert');
const fs = require('fs');

// Trying out the logo class
const Logo = require('./lib/Logo.js');

// Create an array of questions for user input and their validation functions
const logoTextLengthValidator = async (input) => {
    if( input.length > 3 ){
        return "Incorrect text length. Logo text needs to be 3 characters or less. Delete characters to try again...";
    }
    return true;
}

const logoColorValidator = async (input) => {
    
    // Define a regular expression pattern for a hexadecimal color code => see StackOverflow that describes this type of test method https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
    const hexColorPattern = /^#?([0-9A-F]{6})$/i;

    // Use the test() method to check if the input matches a hex pattern || if the color name is an rgb value
    if( hexColorPattern.test(input) || convert.keyword.rgb(input) ){
        return true;
    } else {
        return "Invalid color. Delete characters to try again..."
    }

}

const questions = [
    
    {
        type: "input",
        name: "text",
        message: "Enter text for the logo, cannot be more than 3 characters:",
        default: "thn",
        validate: logoTextLengthValidator,
    },
    {
        type: "input",
        name: "textcolor",
        message: "Enter a text color (name or hexadecimal value):",
        default: "white",
    },
    {
        type: "list",
        name: "shape",
        message: "Select a shape for the logo:",
        choices: [  
            "circle",
            "triangle",
            "square",
        ],
        validate: logoColorValidator,
    },
    {
        type: "input",
        name: "shapecolor",
        message: "Enter a shape color (name or hexadecimal value):",
        default: "blue",
        validate: logoColorValidator,
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    
    let svgStr = JSON.stringify(data);
    fs.writeFile(fileName, svgStr, (err) => err ? console.log(err) : console.log(`Success, see: ${fileName}`));

}

// Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(response => {
        writeToFile('./examples/test-output.txt', response);
    });

}

// Function call to initialize app
// init();

const newLogo = new Logo();
newLogo.setLogoInfo()
.then( () => console.log(newLogo) );


// const brandLogo = new Logo();
// brandLogo.text = "JJJ";
// brandLogo.textcolor = "white";
// brandLogo.shape = "circle";
// brandLogo.shapecolor = "blue";

// console.log(brandLogo);


// newLogo.setLogoInfo()
// .then(console.log(newLogo));
// console.log(newLogo);

