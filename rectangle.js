let Shape = require('@ednagc/ull-shape-ednagc');

class Rectangle extends Shape {
    constructor(options) {
      super(options)
    }
    area() {
      return this.width * this.height;
    }
}
Shape.Shapes.Rectangle = Rectangle;
module.exports = Rectangle;
