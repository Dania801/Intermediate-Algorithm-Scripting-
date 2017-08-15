
function sumAll(arr) {
  var num1 = parseInt(arr[0]) ;
  var num2 = parseInt(arr[1]) ;
  var temp = num1 ;
  var result = 0 ;
  num1 = Math.min(temp , num2) ;
  if(num1 === num2)
    num2 = temp ;

  for (var i = num1 ; i <= num2 ; i++)
    result += i ;

  return result ; 
}

sumAll([1, 4]);
