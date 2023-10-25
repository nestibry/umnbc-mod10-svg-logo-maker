// Instantiate dependencies
const inquirer = require('inquirer');


class Logo {
    constructor(){
        this.text = "";
        this.textcolor = "";
        this.shape = "";
        this.shapecolor = "";
    }

    async setLogoInfo(){
        const response = await inquirer.prompt([
            {
                type: "input",
                name: "text",
                message: "Enter text for the logo, cannot be more than 3 characters:",
                default: "thn",
            },
        ]);
        this.text = response.text;
    }
}

module.exports = Logo;