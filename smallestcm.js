function smallestCommons(arr) {
  //sort function from greatest to least
  arr.sort(function(a,b) {
          return b - a; 
  });
  //return the range after arr has been sorted
  var range = []; 
  for (i = arr[0]; i >= arr[1]; i--) {
    range.push(i);
  }
  
  //find smallest common multiple
  //smallest common multiple
  var scm = 0;
  //loops is for iterating to find common multiple
  var loops = 1; 
  do {  
    //starting from the multiple of the two largest numbers in the range
    scm = arr[0] * arr[1] * loops;
    //for every number in the range, if the current scm is not a multiple break and increase the loop
    for (n = 1; n < range.length; n++) {
      if (scm % range[n] !== 0) {
        break;
      } 
    }
    loops++;
    //do while the number is not equal to the total numbers within the range
  } while (n !== range.length);
  
  return scm;
}

smallestCommons([1,7])