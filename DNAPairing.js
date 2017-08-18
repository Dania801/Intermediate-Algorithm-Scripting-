
function pairElement(str) {
  var DNA = [] ;
  for(var i = 0 ; i < str.length ; i++){
    ele = str.charAt(i) ;
    var pair = [ele] ;
    switch(ele){
      case "A":
        pair.push("T") ;
        break;
      case "T":
        pair.push("A") ;
        break;
      case "G":
        pair.push("C") ;
        break;
      case "C":
        pair.push("G") ;
        break;
    }
    DNA.push(pair) ;
  }
  return DNA;
}

pairElement("GCG");
