
function diffArray(arr1, arr2) {
  var newArr = [];
  var len1 = arr1.length ;
  var len2 = arr2.length ;
  var len = Math.min(len1 , len2) ;

  if(len1 === 0)
    newArr = arr2 ;

  if(len2 === 0)
    newArr = arr1 ;


  for(var j = 0 ; j < arr1.length ; j++)
  {
      var e = arr1[j] ;
      var r = check(arr2 , e) ;
      if(!r)
        newArr.push(e) ;
  }

  for(var k = 0 ; k < arr2.length ; k++)
  {
      var ee = arr2[k] ;
      var rr = check(arr1 , ee) ;
      if(!rr)
        newArr.push(ee) ;
  }

  return newArr;
}

function check(arr , ele)
{
  for(var i = 0 ; i < arr.length ; i++){
     if(arr[i] != ele)
     {
        continue ;
     }
     else
     {
       return true ;
     }
  }

  return false ;
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
