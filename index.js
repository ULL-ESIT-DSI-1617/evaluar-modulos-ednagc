let util = require('util');
var Shape = require('@ednagc/ull-shape-ednagc');
var Triangle = require('@ednagc/ull-shape-triangle-ednagc');
var Square = require('@ednagc/ull-shape-square-ednagc');
var Rectangle = require('@ednagc/ull-shape-rectangle-ednagc');
var readline = require('readline');

try {
  /**
    Index.js donde hacemos uso de los paquetes npm que se han creado
    para carlular el area de una de las figuras:
    @ednagc/ull-shape-ednagc
    @ednagc/ull-shape-triangle-ednagc
    @ednagc/ull-shape-square-ednagc
    @ednagc/ull-shape-rectangle-ednagc
  */

  let arg = process.argv[2] || '{"width":9, "height":5}';
  let obj = JSON.parse(arg);
  let type = process.argv[3] || 'Rectangle';
  let t = new Shape(obj, type);
  let s = t.getArea();
  console.log(s);

  t = new Shape({ width: 100, height: 100 }, 'Triangle');
  s = t.getArea();
  console.log(s);

  let a = new Triangle({ width: 100, height: 100 });
  s = a.getArea();
  console.log(s);

  let sq = new Square({ width: 100});
  s = sq.getArea();
  console.log(s);

  sq = new Shape({ width: 100}, 'Square');
  s = sq.getArea();
  console.log(s);

  let re = new Rectangle({ width: 100, height: 10});
  s = re.getArea();
  console.log(s);

  re = new Shape({ width: 100, height: 10}, 'Rectangle');
  s = re.getArea();
  console.log(s);

  // error
  let bg = new Shape({ width: 100, height: 10}, 'Bug');
  s = bg.getArea();
  console.log(s);

  // error
  bg = new Shape({ width: 100, height: 10});
  s = bg.getArea();
  console.log(s);
}
catch (e) {
  console.log(e.message);
}
