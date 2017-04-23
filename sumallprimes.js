function sumPrimes(num) {
//   var start = 1;
//   var list = [];
//   while (start <= num) {
//     list.push(start);
//     start += 1;   
//   }
  
  //took function from http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
  function getPrimes(max) {
      var sieve = [], i, j, primes = [];
      for (i = 2; i <= max; ++i) {
          if (!sieve[i]) {
              // i has not been marked -- it is prime
              primes.push(i);
              for (j = i << 1; j <= max; j += i) {
                  sieve[j] = true;
              }
          }
      }
      return primes;
  }
  var primes = getPrimes(num);
  var total = 0;
  for (i = 0; i < primes.length; i++) {
    total += primes[i];
  }
  
  return total;
}

sumPrimes(10);