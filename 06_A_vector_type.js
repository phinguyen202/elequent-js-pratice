// using prototype (before 2015 (ecma5))
function Vec(x, y) {
    this.x = x;
    this.y = y;
  }
  
Vec.prototype.plus = function(vector) {
  return new Vec(vector.x +this.x, vector.y + this.y);
}

Vec.prototype.minus = function (vector) {
  return new Vec(vector.x - this.x, vector.y - this.y)
}

Vec.prototype.length = function() {
  return(Math.sqrt(Math.pow(this.x, 2)+ Math.pow(this.y, 2)));
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length());

// using class notation
class Vector{
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  plus(vector) {
    return new Vector(vector.x + this.x, vector.y + this.y);
  }
  
  minus(vector) {
    return new Vector(vector.x - this.x, vector.y - this.y)
  }
  
  get length() {
    return(Math.sqrt(Math.pow(this.x, 2)+ Math.pow(this.y, 2)));
  }
}

console.log(new Vector(2, 2).plus(new Vector(2, 2)));
// → Vec{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vector(3, 4).length);