class Shape {
    constructor(text, textcolor, shape, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shape = shape;
        this.shapecolor = shapecolor;
    }
}

// class Circle extends Shape {
//     constructor(text, textcolor, shape, shapecolor){
//         super(text, textcolor, shape, shapecolor);
//         // this.text = text;
//         // this.textcolor = textcolor;
//         // this.shape = shape;
//         // this.shapecolor = shapecolor;
//         this.svgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill=${this.shapecolor} /><text x="150" y="120" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text></svg>`;
//     }
// }

class Triangle extends Shape {
    constructor(text, textcolor, shape, shapecolor){
        super(text, textcolor, shape, shapecolor);
        this.svgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="100" fill=${this.shapecolor} />
        <text x="150" y="120" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text>
        </svg>`;
    }
}

class Rectangle extends Shape {
    constructor(text, textcolor, shape, shapecolor){
        super(text, textcolor, shape, shapecolor);
        this.svgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" rx="0" ry="0" width="300" height="200" fill=${this.shapecolor}/>
        <text x="150" y="130" font-size="100" text-anchor="middle" fill=${this.textcolor}>${this.text}</text>
        </svg>`;
    }
}

module.exports = Shape, Triangle, Rectangle;

// const text = "BMW";
// const textcolor = "white";
// const shape = "circle";
// const shapecolor = "blue";

// const newShape = new Circle(text, textcolor, shape, shapecolor);

// console.log(newShape.svgStr);