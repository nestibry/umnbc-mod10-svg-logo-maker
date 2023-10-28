const Rectangle = require('../lib/Rectangle.js');

describe("Rectangle", () => {

    describe("instantiation", () => {

        it("should instantiate correctly", () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "rectangle";
            const myshapecolor = "blue";
            const newShape = new Rectangle(mytext, mytextcolor, myshape, myshapecolor);
            expect(newShape).toBeInstanceOf(Rectangle);
        });

        it("the instantiated elements must match the inputs exactly", () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "rectangle";
            const myshapecolor = "blue";
            const newShape = new Rectangle(mytext, mytextcolor, myshape, myshapecolor);
            expect(newShape).toMatchObject({text:mytext, textcolor:mytextcolor, shape:myshape, shapecolor:myshapecolor});
        });

        it("should return the Circle.svgStr correctly", async () => {
            const mytext = "BMW";
            const mytextcolor = "white";
            const myshape = "rectangle";
            const myshapecolor = "blue";
            const rectangleSvgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" rx="0" ry="0" width="300" height="200" fill=${myshapecolor}/><text x="150" y="130" font-size="100" text-anchor="middle" fill=${mytextcolor}>${mytext}</text></svg>`;
    
            const newShape = new Rectangle(mytext, mytextcolor, myshape, myshapecolor);
        
            expect(newShape.svgStr).toBe(rectangleSvgStr);
        });

    });

});