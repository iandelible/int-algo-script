function fearNotLetter(str) {
  for (i = 0; i < str.length; i++) {
    //find current charCode
    var currentCode = str.charCodeAt(i);
    
    if (currentCode !== str.charCodeAt(0) + i) {
      //return the string fromCharCode at currentCode minus 1
      return String.fromCharCode(currentCode - 1);
    }
  }
  return undefined;
}

fearNotLetter("abce");