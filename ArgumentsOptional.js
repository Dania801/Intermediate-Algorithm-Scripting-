
function addTogether() {
  var sum = 0 ;

  if(arguments.length === 2){
    var arg1 = arguments[0] ;
    var arg2 = arguments[1] ;
    if (arg1 === parseInt(arg1, 10) && arg2 === parseInt(arg2, 10)){
      sum = arg1 + arg2 ;
      return sum ;
    }
  } else if(arguments.length === 1 ){
    var arg = arguments[0] ;
      if(arg === parseInt(arg, 10)){
        return function(x){
          if(x === parseInt(x, 10)){
             return arg+x ;
          }
      } ;
    }
  }
}

addTogether(2,3);
