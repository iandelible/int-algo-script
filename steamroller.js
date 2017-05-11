function steamrollArray(arr) {
  var flattenedArray = [];
  arr.forEach(function(element) {
    if (Array.isArray(element)) {
      steamrollArray(element);
    }
    else {
      flattenedArray.push(element);
    }
  }); 

  return flattenedArray;
}

steamrollArray([1, [2], [3, [[4]]]]);