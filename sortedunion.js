 function uniteUnique(arr) {
  //need to read up on arguments object
  //sorted final array
  var sortedArray = [];

  for (i = 0; i < arguments.length; i++) {
    for (j = 0; j < arguments[i].length; j++ ) {
      if (sortedArray.includes(arguments[i][j])) {}  
      else {
        sortedArray.push(arguments[i][j]);
      }
    }
  }
  
    return sortedArray;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
