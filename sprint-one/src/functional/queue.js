var Queue = function(){
  var someInstance = {};
  var storage = {};
  var queueHead = 0;
  var queueTail = 0;

  someInstance.enqueue = function(value){
    storage[queueTail] = value;
    queueTail++;
  };

  someInstance.dequeue = function(){
    if ( someInstance.size() > 0 ) {
      var result = storage[queueHead];
      queueHead++;
      delete queueHead;
      return result;
    }
  };

  someInstance.size = function(){
    return queueTail - queueHead;
  };

  return someInstance;
};
