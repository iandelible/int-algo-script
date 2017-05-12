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

// function steamrollArray(arr) {
//   var rolled = [];
//   var flatten = function(arg) {
//     if(Array.isArray(arg)) {
//       for (var a in arg) {
//         flatten(arg[a]);
//       }
//     }
//     else {
//       rolled.push(arg);
//     }
//   };
  
//   arr.forEach(flatten);
//   return rolled;
// }

// steamrollArray([1, [2], [3, [[4]]]]);