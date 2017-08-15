
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  var valueflag = false ;
  var propflag = false ;

  // Only change code below this line
   for(var i = 0 ; i < collection.length ; i++){
      for(var prop in source){
        var thisValue = source[prop] ;

        if (collection[i].hasOwnProperty(prop)){
          propflag = true ;
          var currValue = collection[i][prop] ;
          if(currValue == thisValue){
            valueflag = true ;
            continue ;
          } else {
            valueflag = false ;
            break ;
          }
        }
        else {
          propflag = false ;
          break ;
        }
      }
     if(propflag && valueflag){
       arr.push(collection[i]) ;
     }
    }

  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
