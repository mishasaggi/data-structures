var Stack = function(){
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  var positionPointer = 0;

  // Implement the methods below
  someInstance.push = function(value){
    storage[positionPointer] = value;
    positionPointer++;
  };

  someInstance.pop = function(){
    if ( someInstance.size() > 0 ) {
      positionPointer--;
      var result = storage[positionPointer];
      delete storage[positionPointer];
      return result;
    } else return;
  };

  someInstance.size = function(){
    return positionPointer;
  };

  return someInstance;
};
