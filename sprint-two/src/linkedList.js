var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(list.head === null && list.tail === null) {
      list.tail = Node(value);
      list.head = list.tail;
    } else {
      list.tail.next = Node(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){
    var result = list.head.value;
    var temp = list.head;
    delete list.head;
    list.head = temp.next;
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

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addToTail: O(1)
 * removeHead: O(1)
 * contains: O(n)
 */
