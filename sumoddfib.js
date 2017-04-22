function sumFibs(num) {
  // create fib sequence in an array, with the sequence ending one number after the num
  var fibSequence = [1,1];
  while (fibSequence[fibSequence.length -1] < num) {
    fibSequence.push(fibSequence[fibSequence.length - 2] + fibSequence[fibSequence.length - 1]);
  }
  // then pop off the last element in array if it not equal to num
  if (fibSequence[fibSequence.length -1] !== num) {
    fibSequence.pop();
  }
  //add all the odd numbers in the sequence, return total 
  var totalOdds = 0;
  for (i = 0; i < fibSequence.length; i++) {
    if ( fibSequence[i] % 2 !== 0) {
      totalOdds += fibSequence[i];
    }
  }
  return totalOdds;
}

sumFibs(75025);
