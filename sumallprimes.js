function sumPrimes(num) {
  // //took function from http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
  // function getPrimes(max) {
  //     var sieve = [], i, j, primes = [];
  //     for (i = 2; i <= max; ++i) {
  //         if (!sieve[i]) {
  //             // i has not been marked -- it is prime
  //             primes.push(i);
  //             for (j = i << 1; j <= max; j += i) {
  //                 sieve[j] = true;
  //             }
  //         }
  //     }
  //     return primes;
  // }
  // var primes = getPrimes(num);
  // var total = 0;
  // for (i = 0; i < primes.length; i++) {
  //   total += primes[i];
  // }
  
  // return total;
  
  // function to check if the number presented is prime
  function isPrime(number){
      for (i = 2; i <= number; i++){
          if(number % i === 0 && number!== i){
          // return true if it is divisible by any number that is not itself.
             return false;
          }
       }
       // if it passes the for loops conditions it is a prime
      return true;
  }
  // 1 is not a prime, so return nothing, also stops the recursive calls.
  if (num === 1){
    return 0;
  }
  // Check if your number is not prime
  if(isPrime(num) === false){
  // for non primes check the next number down from your maximum number, do not add anything to your answer
    return sumPrimes(num - 1);
  }

  // Check if your number is prime
  if(isPrime(num) === true){
  // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
    return num + sumPrimes(num - 1);
  }
}

sumPrimes(10);