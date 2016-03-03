var HashTable = function(){
  //pass in new size as a parameter
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  //check size before inserting
  //loop over all k, v and create new index values for the new hash table
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(!this._storage.get(i)) {
    var bucket = [];
    bucket.push([k,v]);
    this._storage.set(i, bucket);
  } else {
    bucket = this._storage.get(i)
    bucket.push([k,v]);
    this._storage.set(i, bucket);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k) return bucket[i][1];
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  for (var i = 0; i < bucket.length; i++) {
    if(bucket[i][0] === k) {
      bucket[i][1] = null; 
      this._storage.set(i, bucket);
    }
  }
  
};


/*
 * Complexity: What is the time complexity of the above functions?
 * insert: 
 */
