function spinalCase(str) {
  //str = str.replace(/\s+/g, '');
  str = str.replace(/_/g , '');
  var arr = [];
  var prevLetter = "" ;
  for(var i = 0 ; i < str.length ; i++){
    var letter = str.charAt(i) ;
    var small ;
    var ch ;
    if(letter === letter.toUpperCase() && letter !== '-'){
      small = letter.toLowerCase() ;
      ch = i ===0 ? small:'-'+small ;
      arr.push(ch) ;
    }else{
      arr.push(letter) ;
    }
    prevLetter  = letter ;
  }
  str = arr.join("").replace(/-\s+-/g, '-');
  str = str.replace(/\s+/g, '');
  return str;
}

spinalCase('Teletubbies say Eh-oh');
