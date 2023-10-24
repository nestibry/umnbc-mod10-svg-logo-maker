// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


// Create an array of questions for user input
const questions = [
    
    {
        type: "input",
        name: "text",
        message: "Enter text for the logo, cannot be more than 3 characters:",
        default: "thn",
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
        default: "white",
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    
    data.badgeUrl = renderLicenseBadge(data.license);
    data.licenseUrl = renderLicenseLink(data.license);
    data.licenseSectionStr = renderLicenseSection(data.license, data.licenseUrl);
    
    let markdownStr = generateMarkdown(data);
    fs.writeFile(fileName, markdownStr, (err) => err ? console.log(err) : console.log(`Success, see: ${fileName}`));

}

// Create a function to initialize app
function init() {

    inquirer.prompt(questions)
    .then(response => {
        writeToFile('./assets/output/generated-readme.md', response);
    });

}

// Function call to initialize app
init();
