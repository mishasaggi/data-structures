var DoublyLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null && list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail.next.prev = list.tail;
      list.tail = list.tail.next;
    }
  };

  list.addToHead = function(value){
    if(list.head === null && list.tail === null) {
      list.head = Node(value);
      list.tail = list.head;
    } else {
      list.head.prev = Node(value);
      list.head.prev.next = list.head
      list.head = list.head.prev;
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    var temp = list.head;
    delete list.head;
    list.head = temp.next;
    return result;
  };

  list.removeTail = function(){
    var result = list.tail.value;
    var temp = list.tail;
    delete list.tail;
    list.tail = temp.prev;
    return result;

  };

  list.contains = function(target){
    list.search = list.head;
    if(list.tail.value === target) return true;
    while (list.search.next !== null) {
      if(list.search.value === target) return true;
      list.search = list.search.next;
     }
     return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail, addToHead: O(1)
 * removeHead, removeTail: O(1)
 * contains: O(n)
 */
