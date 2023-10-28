const Shape = require('../lib/Shapes.js');
const Circle = require('../lib/Shapes.js');
const Triangle = require('../lib/Shapes.js');
const Rectangle = require('../lib/Shapes.js');


describe("Shape", () => {

    describe("instantiation", () => {
        it("should instantiate correctly", () => {
            const newShape = new Shape('BMW','white','circle','blue');
            expect(newShape).toBeInstanceOf(Shape);
        });
    });


});

describe("Circle", () => {

    describe("instantiation", () => {
        it("should instantiate correctly", () => {
            const newShape = new Circle('BMW','white','circle','blue');
            expect(newShape).toBeInstanceOf(Circle);
        });
    });


});

describe("Triangle", () => {

    describe("instantiation", () => {
        it("should instantiate correctly", () => {
            const newShape = new Triangle('BMW','white','triangle','blue');
            expect(newShape).toBeInstanceOf(Triangle);
        });
    });


});

describe("Rectangle", () => {

    describe("instantiation", () => {
        it("should instantiate correctly", () => {
            const newShape = new Rectangle('BMW','white','blue');
            expect(newShape).toBeInstanceOf(Rectangle);
        });
    });


});