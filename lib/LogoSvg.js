class LogoInfo {
    constructor(text, textcolor, shape, shapecolor){
        this.text = text;
        this.textcolor = textcolor;
        this.shape = shape;
        this.shapecolor = shapecolor;
    }
}

class CircleLogo extends LogoInfo {
    constructor(text, textcolor, shapecolor){
        super(text, textcolor, shape, shapecolor);
        this.svgStr = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill=${this.shapecolor} /><text x="150" y="120" font-size="60" text-anchor="middle" fill=${this.textcolor}>${this.text}</text></svg>`
    }
}