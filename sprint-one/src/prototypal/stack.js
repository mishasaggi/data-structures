var Stack = function() {
  var stackInstance = Object.create(stackMethods)
  stackInstance.storage = {};
  stackInstance.positionPointer = 0;

  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.positionPointer] = value;
  this.positionPointer++;
};

stackMethods.pop = function() {
  if(this.size() > 0){
    this.positionPointer--;
    var result = this.storage[this.positionPointer];
    delete this.storage[this.positionPointer];
    return result;
  } else return;
};

stackMethods.size = function() {
  return this.positionPointer;
};


