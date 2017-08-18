
function fearNotLetter(str) {
  var missed ;
  var prev = str.charCodeAt(0);
  var curr ;
  var op ;
  var arr = [prev] ;
  var index ;
  for(var i = 1 ; i < str.length ; i++){
    curr = str.charCodeAt(i) ;
    arr.push(curr) ;
    op = curr - prev ;
    if(op !== 1){
      index = str.charCodeAt(--i)+1 ;

      missed = String.fromCharCode(index) ;
      break ;
    }
    prev = curr ;
  }

  return missed;
}

fearNotLetter("abcdefghjklmno");
