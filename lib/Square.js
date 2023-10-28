const Shape = require('./Shape.js');

class Square extends Shape {
    constructor(text, textcolor, shape, shapecolor){
        super(text, textcolor, shape, shapecolor);
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="0" rx="0" ry="0" width="200" height="200" fill=${this.shapecolor}/><text x="150" y="120" font-size="65" text-anchor="middle" fill=${this.textcolor}>${this.text}</text></svg>`;
    }

}

module.exports = Square;
