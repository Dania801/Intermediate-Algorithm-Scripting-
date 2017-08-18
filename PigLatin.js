
function translatePigLatin(str) {
  var newStr = "" ;
  var cons = "" ;
  var flag = false ;
  var i = 0 ;
  var counter = 0 ;
  consonant = [ "b", "c", 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'x', 'z'] ;

  while(consonant.indexOf(str.charAt(i)) !== -1){
    counter++ ;
    cons += str.charAt(i) ;
    flag = true ;
    i++ ;
  }
   i-- ;
  var arr = str.split("") ;
  newStr = arr.splice(0 , counter) ;
  s = arr.join("") ;
  l = newStr.join("") ;
  var n = s + l ;
  if(flag){
    n += "ay" ;
  }else{
    n += "way" ;
  }


  return n;
}

translatePigLatin("california");
