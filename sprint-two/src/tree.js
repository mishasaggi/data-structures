var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target, currentNode){
  //recursively search through children arrays
  currentNode = currentNode || this;
  if (currentNode.value === target) return true;
  if (currentNode.children.length > 0) {
    for (var i = 0; i < currentNode.children.length; i++){
      if (currentNode.children[i].value === target) return true;
        else return this.contains(target, currentNode.children[i])
      }
    }
    return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
