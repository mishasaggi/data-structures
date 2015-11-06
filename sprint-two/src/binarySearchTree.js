var BinarySearchTree = function(value){
  var newBinarySearchTree = {};
  newBinarySearchTree.value = value;
  newBinarySearchTree.left = null;
  newBinarySearchTree.right = null;
  _.extend(newBinarySearchTree, binarySearchTree)

  return newBinarySearchTree;
};

  var binarySearchTree = {};

  binarySearchTree.insert = function(value) {
    if (value < this.value) {
      if (this.left) {
        //call insert function again so it searches from this.left node
        //this will recurse until an empty left property is found
        this.left.insert(value);
      } else this.left = BinarySearchTree(value);
    } else if (value > this.value) {
      if (this.right) {
        this.right.insert(value);
      } else this.right = BinarySearchTree(value);
    }

  };

  binarySearchTree.contains = function(target) {
    if (this.value === target) return true;
    else if (target < this.value) {
      if (this.left) return this.left.contains(target);
    } else if (target > this.value) {
      if (this.right) return this.right.contains(target);
    }
    return false;
  };

  binarySearchTree.depthFirstLog = function(cb) {
    cb(this.value);
    if(this.left) this.left.depthFirstLog(cb);
    if(this.right) this.right.depthFirstLog(cb);
  };


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: O(nlogn)
 * contains: O(nlogn)
 * depthFirstLog: o(x^n)
 */
