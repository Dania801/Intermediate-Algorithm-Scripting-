
function myReplace(str, before, after) {
  strArr = str.split(" ");
  flag = false ;
  for(var i = 0 ; i < strArr.length ; i++){
    if(strArr[i] === before){
      if(before[0] !== before[0].toUpperCase())
        strArr[i] = after ;
      else{
        strArr[i] = after[0].toUpperCase()+after.slice(1,after.length) ;
      }
    }
  }
  str = strArr.join(" ");
  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
