const myDataStructure = {
  mySet = set(),

  push: function(e) {
    this.mySet.push(e)
  },

  delete: function(e) {
    this.mySet.delete(e)
  }
}

ds.push(3)
ds.delete(3)
