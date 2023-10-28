const Shape = require('../lib/Shapes.js');
// const Circle = require('../lib/Shapes.js');
const Triangle = require('../lib/Shapes.js');
const Rectangle = require('../lib/Shapes.js');


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

// describe("Circle", () => {

//     describe("instantiation", () => {
//         it("should instantiate correctly", () => {
//             const text = "BMW";
//             const textcolor = "white";
//             const shape = "circle";
//             const shapecolor = "blue";
//             const newShape = new Circle(text, textcolor, shape, shapecolor);
//             expect(newShape).toBeInstanceOf(Circle);
//         });
//     });

//     it("the number of elements must match exactly", () => {
//         const text = "BMW";
//         const textcolor = "white";
//         const shape = "circle";
//         const shapecolor = "blue";
//         const newShape = new Circle(text, textcolor, shape, shapecolor);
//         expect(newShape).toMatchObject({text:text, textcolor:textcolor, shape:shape, shapecolor:shapecolor});
//     });

//     // it("should return the svgStr correctly", async () => {
//     //     const mytext = "BMW";
//     //     const mytextcolor = "white";
//     //     const myshape = "circle";
//     //     const myshapecolor = "blue";
//     //     const mysvgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill=${myshapecolor} /><text x="150" y="120" font-size="60" text-anchor="middle" fill=${mytextcolor}>${mytext}</text></svg>`;

//     //     const newCircle = new Circle(mytext, mytextcolor, myshape, myshapecolor);
//     //     console.log(newCircle);

//     //     expect(newCircle).toBe(myshape);
//     // });


// });

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

describe("Rectangle", () => {

    describe("instantiation", () => {

        it("should instantiate correctly", () => {
            const text = "BMW";
            const textcolor = "white";
            const shape = "rectangle";
            const shapecolor = "blue";
            const newShape = new Rectangle(text, textcolor, shape, shapecolor);
            expect(newShape).toBeInstanceOf(Rectangle);
        });

        it("the number of elements must match exactly", () => {
            const text = "BMW";
            const textcolor = "white";
            const shape = "rectangle";
            const shapecolor = "blue";
            const newShape = new Rectangle(text, textcolor, shape, shapecolor);
            expect(newShape).toMatchObject({text:text, textcolor:textcolor, shape:shape, shapecolor:shapecolor});
        });
    });


});