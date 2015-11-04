var Stack = function() {
  this.storage = {};
  this.positionPointer = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.positionPointer] = value;
  this.positionPointer++;
};

Stack.prototype.pop = function() {
  if ( this.positionPointer > 0 ) {
    this.positionPointer--;
    var result = this.storage[this.positionPointer];
    delete this.storage[this.positionPointer];
    return result;
  } else return;
};

Stack.prototype.size = function() {
  return this.positionPointer;
};


