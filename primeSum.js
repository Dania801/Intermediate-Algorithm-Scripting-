
function sumPrimes(num) {
    var sieve = [], i, j, primes = [];
    var sum = 0 ;
    for (i = 2; i <= num; ++i) {
        if (!sieve[i]) {
            // i has not been marked -- it is prime
            primes.push(i);
            for (j = i << 1; j <= num; j += i) {
                sieve[j] = true;
            }
        }
    }
  for(var k = 0 ; k < primes.length ; k++){
    sum += primes[k] ;
  }
    return sum;
}

sumPrimes(10);
