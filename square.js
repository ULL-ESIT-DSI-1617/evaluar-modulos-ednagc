let Shape = require('./shapesarea.js');
class Square extends Shape {
    constructor(options) {
      super(options)
    }
    getArea() {
      return  Math.pow(this.width,2) 
    }
}
Shape.Shapes.Square = Square; 
module.exports = Square;
