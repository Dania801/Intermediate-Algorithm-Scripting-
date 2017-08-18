
function uniteUnique(arr) {
  var mainArr = arguments[0] ;
  for(var i = 1 ; i < arguments.length ; i++){
   for(var j = 0 ; j < arguments[i].length ; j++){
     var ele = arguments[i][j] ;
     if (mainArr.indexOf(ele) === -1){
       mainArr.push(ele) ;
     }
   }
  }
  return mainArr ;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
