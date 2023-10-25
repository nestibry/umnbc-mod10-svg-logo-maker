// Include packages needed for this application
// const colorname = require('color-name');
// import colors from 'color-name';
const inquirer  = require('inquirer');
const fs = require('fs');
var convert = require('color-convert');
console.log(convert.keyword.rgb('blah'));



// let colorValue = "red";
// let colorLowerCase = colorValue.toLowerCase();
// let rgb = colors.red;

// console.log(rgb);

// const testColorPattern = /^#?([0-9A-F]{6})$/i.test(rgb);
// console.log(testColorPattern);


// Create an array of questions for user input and their validation functions
const logoTextLengthValidator = async (input) => {
    if( input.length > 3 ){
        return "Incorrect text length. Logo text needs to be 3 characters or less. Delete characters to try again...";
    }
    return true;
}

// Borrowed from ChatGPT prompt "In JavaScript, how to check if a text word like 'red' or 'blue' is a hexadecimal color" 
// => see StackOverflow that describes this type of test method https://stackoverflow.com/questions/8027423/how-to-check-if-a-string-is-a-valid-hex-color-representation
const isHexadecimalColor = async (input) => {
    // Define a regular expression pattern for a hexadecimal color code
    const hexColorPattern = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;

    // Use the test() method to check if the input matches the pattern
    return hexColorPattern.test(input);
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
        message: "Enter a text color:",
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
        validate: isHexadecimalColor,
    },
    {
        type: "input",
        name: "shapecolor",
        message: "Enter a shape color:",
        default: "blue",
        validate: isHexadecimalColor,
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
init();
