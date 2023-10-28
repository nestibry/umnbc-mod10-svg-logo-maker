const Square = require('../lib/Square.js');

describe("Square", () => {

    describe("instantiation", () => {

        it("should instantiate correctly", () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "square";
            const myshapecolor = "blue";
            const newShape = new Square(mytext, mytextcolor, myshape, myshapecolor);
            expect(newShape).toBeInstanceOf(Square);
        });

        
        it("the instantiated elements must match the inputs exactly", () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "circle";
            const myshapecolor = "blue";
            const newShape = new Square(mytext, mytextcolor, myshape, myshapecolor);
            expect(newShape).toMatchObject({text:mytext, textcolor:mytextcolor, shape:myshape, shapecolor:myshapecolor});
        });

        it("should return the render() method correctly", async () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "circle";
            const myshapecolor = "blue";
            const newShape = new Square(mytext, mytextcolor, myshape, myshapecolor);


            const expectedSvgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="0" rx="0" ry="0" width="200" height="200" fill="${myshapecolor}"/><text x="150" y="120" font-size="65" text-anchor="middle" fill="${mytextcolor}">${mytext}</text></svg>`;
    
            expect(newShape.render()).toEqual(expectedSvgStr);
        });

    });

});