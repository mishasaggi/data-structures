

var Graph = function(){
  //object to store all nodes
  this.nodes = {};
};

Graph.prototype.addNode = function(node){
  this.nodes[node] = {};
}

Graph.prototype.contains = function(node){
  for (var key in this.nodes) {
    if (key === node) return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this.nodes[node];
};

Graph.prototype.hasEdge = function(fromNode, toNode){
  for (var key in this.nodes) {
    for (var prop in this.nodes[key]) {
      if (this.nodes[key][prop] === toNode) return true;
    }
  }
  return false;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this.nodes[fromNode][toNode] = toNode;
  this.nodes[toNode][fromNode] = fromNode;
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this.nodes[fromNode][toNode];
  delete this.nodes[toNode][fromNode];
};

Graph.prototype.forEachNode = function(cb){
  for (var key in this.nodes) {
    //callback needs to be applied to the node itself and not the value
    cb(key);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 * addNode: O(1)
 * contains: O(n)
 * removeNode: O(1)
 * hasEdge: O(n^2)
 * removeEdge: O(1)
 * forEachNode: O(n) 
 */



