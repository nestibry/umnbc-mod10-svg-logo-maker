const Circle = require('../lib/Circle.js');

describe("Circle", () => {

    describe("instantiation", () => {

        it("should instantiate correctly", () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "circle";
            const myshapecolor = "blue";
            const newShape = new Circle(mytext, mytextcolor, myshape, myshapecolor);
            expect(newShape).toBeInstanceOf(Circle);
        });

        
        it("the instantiated elements must match the inputs exactly", () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "circle";
            const myshapecolor = "blue";
            const newShape = new Circle(mytext, mytextcolor, myshape, myshapecolor);
            expect(newShape).toMatchObject({text:mytext, textcolor:mytextcolor, shape:myshape, shapecolor:myshapecolor});
        });

        it("should return the render() method correctly", async () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "circle";
            const myshapecolor = "blue";
            const newShape = new Circle(mytext, mytextcolor, myshape, myshapecolor);


            const expectedSvgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${myshapecolor}" /><text x="150" y="120" font-size="60" text-anchor="middle" fill="${mytextcolor}">${mytext}</text></svg>`;
    
        
            expect(newShape.render()).toEqual(expectedSvgStr);
        });

    });

});