function diffArray(arr1, arr2) {
  var newArr = [];
  var combined = arr1.concat(arr2);
  for (var i = 0; i < combined.length; i++) {
    if (arr1.includes(combined[i]) === false || arr2.includes(combined[i]) === false) {
      newArr.push(combined[i]);
    }

  }
  return newArr;
} 

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
