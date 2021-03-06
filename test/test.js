var Shape = require('@ednagc/ull-shape-ednagc');
var Triangle = require('@ednagc/ull-shape-triangle-ednagc');
var Square = require('@ednagc/ull-shape-square-ednagc');
var Rectangle = require('@ednagc/ull-shape-rectangle-ednagc');

describe("getArea", function() {
  it("must compute the triangle area correctly. Shape object", function() {
    let a = new Shape({ width: 100, height: 50 }, 'Triangle');
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
  it("must compute the triangle area correctly. Triangle object", function() {
    let a = new Triangle({ width: 100, height: 50 });
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
});
