const Shape = require('./Shapes.js');

class Circle extends Shape {
    constructor(text, textcolor, shape, shapecolor){
        super(text, textcolor, shape, shapecolor);
        this.svgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill=${this.shapecolor} /><text x="150" y="120" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text></svg>`;
    }
}

module.exports = Circle;
