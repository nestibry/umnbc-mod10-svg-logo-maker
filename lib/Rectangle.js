const Shape = require('./Shapes.js');

class Rectangle extends Shape {
    constructor(text, textcolor, shape, shapecolor){
        super(text, textcolor, shape, shapecolor);
        this.svgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" rx="0" ry="0" width="300" height="200" fill=${this.shapecolor}/><text x="150" y="130" font-size="100" text-anchor="middle" fill=${this.textcolor}>${this.text}</text></svg>`;
    }
}

module.exports = Rectangle;
