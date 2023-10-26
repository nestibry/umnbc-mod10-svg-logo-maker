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
                // validate: async (input) => {
                //     if( input.length > 3 ){
                //         // return "Incorrect text length. Logo text needs to be 3 characters or less. Delete characters to try again...";
                //         return false;
                //     }
                //     return true;
                // }
                validate: this.logoTextLengthValidator,
            },
        ]);
        this.text = response.text;
        console.log(this);
    }

    async logoTextLengthValidator(input){
        if( input.length > 3 ){
            return "Incorrect text length. Logo text needs to be 3 characters or less. Delete characters to try again...";
        }
        return true;
    }

    // async logoTextLengthValidator(input){
    //     if( input.length > 3 ){
    //         return "Incorrect text length. Logo text needs to be 3 characters or less. Delete characters to try again...";
    //     }
    //     return true;
    // }



}

module.exports = Logo;