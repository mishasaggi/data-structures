var Queue = function(){
  var queueInstance = {};
  queueInstance.storage = {};
  queueInstance.head = 0;
  queueInstance.tail = 0;
  _.extend(queueInstance, queueMethods);

  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function() {
  if(this.tail !== this.head) {
    var result = this.storage[this.head];
    this.head++;
    return result;
  } else return;

};

queueMethods.size = function() {
  return this.tail - this.head;
};

