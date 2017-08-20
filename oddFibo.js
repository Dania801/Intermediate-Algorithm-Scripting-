
function sumFibs(num) {
  var i;
  var fib = []; // Initialize array!
  var sum = 1 ;
  var s = [] ;
  fib[0] = 0;
  fib[1] = 1;
  for(i=2; i<=num; i++)
  {
      fib[i] = fib[i-2] + fib[i-1];
      if(fib[i] % 2 !== 0 && fib[i] <= num){
        sum += fib[i] ;
        s.push(fib[i]) ;
      }
      if(fib[i] >= num)
        break ;
  }
  return sum;
}

sumFibs(75025);
