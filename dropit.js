function dropElements(arr, func) {
  var times = arr.length;
  for (i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    }
    else {
    arr.shift();
    }
  }
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1;});
