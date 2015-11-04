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
    if (queueTail !== queueHead) {
      var result = storage[queueHead];
      queueHead++;
      return result;
    }
  };

  someInstance.size = function(){
    return queueTail - queueHead;
  };

  return someInstance;
};
