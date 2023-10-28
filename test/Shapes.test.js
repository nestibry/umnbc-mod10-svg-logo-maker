const Shape = require('../lib/Shapes.js');
// const Circle = require('../lib/Shapes.js');
const Triangle = require('../lib/Shapes.js');
// const Rectangle = require('../lib/Shapes.js');


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


describe("Triangle", () => {

    describe("instantiation", () => {
        it("should instantiate correctly", () => {
            const text = "BMW";
            const textcolor = "white";
            const shape = "triangle";
            const shapecolor = "blue";
            const newShape = new Triangle(text, textcolor, shape, shapecolor);
            expect(newShape).toBeInstanceOf(Triangle);
        });
    });

    it("the number of elements must match exactly", () => {
        const text = "BMW";
        const textcolor = "white";
        const shape = "triangle";
        const shapecolor = "blue";
        const newShape = new Triangle(text, textcolor, shape, shapecolor);
        expect(newShape).toMatchObject({text:text, textcolor:textcolor, shape:shape, shapecolor:shapecolor});
    });


});

// describe("Rectangle", () => {

//     describe("instantiation", () => {

//         it("should instantiate correctly", () => {
//             const text = "BMW";
//             const textcolor = "white";
//             const shape = "rectangle";
//             const shapecolor = "blue";
//             const newShape = new Rectangle(text, textcolor, shape, shapecolor);
//             expect(newShape).toBeInstanceOf(Rectangle);
//         });

//         it("the number of elements must match exactly", () => {
//             const text = "BMW";
//             const textcolor = "white";
//             const shape = "rectangle";
//             const shapecolor = "blue";
//             const newShape = new Rectangle(text, textcolor, shape, shapecolor);
//             expect(newShape).toMatchObject({text:text, textcolor:textcolor, shape:shape, shapecolor:shapecolor});
//         });
//     });


// });