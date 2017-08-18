
function convertHTML(str) {

  var newStr = str.replace(/&/i , '&amp;') ;
  newStr = newStr.replace(/</i , '&lt;') ;
  newStr = newStr.replace(/</i , '&lt;') ;
  newStr = newStr.replace(/>/i , '&gt;') ;
  newStr = newStr.replace(/"/i , '&quot;') ;
  newStr = newStr.replace(/"/i , '&quot;') ;
  newStr = newStr.replace(/'/i , '&apos;') ;
  return newStr;
}

convertHTML("Hamburgers < Pizza < Tacos");
