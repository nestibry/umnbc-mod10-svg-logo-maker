const Triangle = require('../lib/Triangle.js');

describe("Triangle", () => {

    describe("instantiation", () => {

        it("should instantiate correctly", () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "triangle";
            const myshapecolor = "blue";
            const newShape = new Triangle(mytext, mytextcolor, myshape, myshapecolor);
            expect(newShape).toBeInstanceOf(Triangle);
        });

        
        it("the instantiated elements must match the inputs exactly", () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "triangle";
            const myshapecolor = "blue";
            const newShape = new Triangle(mytext, mytextcolor, myshape, myshapecolor);
            expect(newShape).toMatchObject({text:mytext, textcolor:mytextcolor, shape:myshape, shapecolor:myshapecolor});
        });

        it("should return the render() method correctly", async () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "triangle";
            const myshapecolor = "blue";
            const newShape = new Triangle(mytext, mytextcolor, myshape, myshapecolor);


            const expectedSvgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0, 0 300, 0 150, 200" fill="${myshapecolor}"/><text x="150" y="65" font-size="65" text-anchor="middle" fill="${mytextcolor}">${mytext}</text></svg>`;
    
        
            expect(newShape.render()).toEqual(expectedSvgStr);
        });

    });

});