var Tree = function(value, parent){
  var newTree = {};
  newTree.value = value;
  newTree.parent = parent;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value, this));
};

treeMethods.removeFromParent = function(){
  //disassociates the node from parent 
  for (var i = 0; i < this.parent.children.length; i++) {
    if(this.parent.children[i].value === this.value) {
      this.parent.children[i].value = null;
    }
  }
  this.parent = null;
  
};

treeMethods.contains = function(target){
  //recursively search through children arrays
  if (this.value === target) return true;
    for (var i = 0; i < this.children.length; i++){
      if (this.children[i].contains(target)) return true;
    }
    return false;
};

treeMethods.traverse = function(cb){
  if (this.value) cb(this.value);
  for (var i = 0; i < this.children.length; i++){
    console.log(this.children[i]);
    this.children[i].traverse(cb);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 * addChild: O(1)
 * removeFromParent: O(n)
 * contains: O(x^n)
 * traverse: O(n)
 */
