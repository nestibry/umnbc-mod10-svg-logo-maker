// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// Create an array of questions for user input

const logoTextLengthValidator = async (input) => {
    if( input.length > 3 ){
        return "Incorrect text length. Logo text needs to be 3 characters or less. Delete characters to try again...";
    }
    return true;
}

const logoColorValidator = async (input) => {
    if( input.length > 20 ){
        return "Incorrect text length. Logo text needs to be 3 characters or less. Delete characters to try again...";
    }
    return true;
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
        
    },
    {
        type: "input",
        name: "shapecolor",
        message: "Enter a shape color:",
        default: "blue",
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
