const Shape = require('../lib/Shape.js');


describe("Shape", () => {

    describe("instantiation", () => {
        it("should instantiate correctly", () => {
            const text = "BMW";
            const textcolor = "white";
            const shape = "circle";
            const shapecolor = "blue";
            const newShape = new Shape(text, textcolor, shape, shapecolor);
            expect(newShape).toBeInstanceOf(Shape);
        });

        it("the number of elements must match exactly", () => {
            const text = "BMW";
            const textcolor = "white";
            const shape = "circle";
            const shapecolor = "blue";
            const newShape = new Shape(text, textcolor, shape, shapecolor);
            expect(newShape).toMatchObject({text:text, textcolor:textcolor, shape:shape, shapecolor:shapecolor});
        });

    });


});
