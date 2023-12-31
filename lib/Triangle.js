const Shape = require('./Shape.js');

class Triangle extends Shape {
    constructor(text, textcolor, shape, shapecolor){
        super(text, textcolor, shape, shapecolor);
    }

    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="0, 0 300, 0 150, 200" fill="${this.shapecolor}"/><text x="150" y="65" font-size="65" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`;
    }

}

module.exports = Triangle;
