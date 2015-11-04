var Queue = function() {
  var queueInstance = Object.create(queueMethods);
  queueInstance.storage = {};
  queueInstance.head = 0;
  queueInstance.tail = 0;

  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.tail] = value;
  this.tail++;
};

queueMethods.dequeue = function() {
  if ( this.size() > 0 ) {
    var result = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return result;
  } else return;
};

queueMethods.size = function() {
  return this.tail - this.head;
};


