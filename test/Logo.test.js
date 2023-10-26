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
        beforeEach(() => jest.clearAllMocks());

        it("should return the name entered by the user", async () => {
            const myInstance = new Logo();

            // Simulate user input 
            inquirer.prompt.mockResolvedValue({text:'bmw'}); 
            await myInstance.setLogoInfo();

            expect(myInstance.text).toBe('bmw');
        });

        it("should return the name entered by the user", async () => {
            const myInstance = new Logo();
            
            // Simulate user input 
            inquirer.prompt.mockResolvedValue({text:'thn'}); 
            await myInstance.setLogoInfo();

            expect(myInstance.text).toBe('thn');
        });

    });
    

});