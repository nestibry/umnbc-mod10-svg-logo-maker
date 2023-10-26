const Logo = require('../lib/Logo.js');
const inquirer = require('inquirer');

// Mock Inquirer to avoid acutal user prompts => from ChatGPT3.5 response to question "in javascript, how to test an inquirer prompt function within a class using jest framework"
jest.mock('inquirer');

describe("Logo", () => {

    describe("instantiation", () => {
        it("should instantiate correctly", () => {
            const logo = new Logo();
            expect(logo).toBeInstanceOf(Logo);
        });
    });

    describe("instantiation of inquirer prompts", () => {

        // Mock Inquirer to avoid acutal user prompts => from ChatGPT3.5 response to question "in javascript, how to test an inquirer prompt function within a class using jest framework"
        // Note to TA's: I added this functionality because I understand what it does, just needed help finding a tool to use to mock inquire prompt responses
        beforeEach(() => jest.clearAllMocks());

        it("should return the text entered by the user", async () => {
            const myInstance = new Logo();

            // Simulate user input 
            inquirer.prompt.mockResolvedValue({text:'bmw'}); 
            await myInstance.setLogoInfo();

            expect(myInstance.text).toBe('bmw');
        });

        
        
    });
    
    // Validation Functions => See https://stackoverflow.com/questions/57321266/how-to-test-inquirer-validation
    describe("Inquirer Validate Functions", () => {
        
        it("logoTextLengthValidator() should return true on text length less than or equal to 3 characters entered by the user", async () => {
            const myInstance = new Logo();
            const result = await myInstance.logoTextLengthValidator("thn");
            expect(result).toBe(true);
        });

        it("logoTextLengthValidator() should return Error Message on text length more than 3 characters entered by the user", async () => {
            const myInstance = new Logo();
            const result = await myInstance.logoTextLengthValidator("thn29");
            expect(result).toBe("Incorrect text length. Logo text needs to be 3 characters or less. Delete characters to try again...");
        });

    });
    
    
});