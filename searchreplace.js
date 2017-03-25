function myReplace(str, before, after) {
  // find index of the first letter of the replacement
  var point = str.indexOf(before);
  // save the letter to find the casing
  var letter = str[point];
  
  //if letter is lower just use replace(before, after) function
  if (letter === letter.toLowerCase()) {
    return str.replace(before, after);
  }
  //else make the first letter capital then replace
  else {
    var makeBig = after.charAt(0).toUpperCase() + after.slice(1);
    return str.replace(before, makeBig);
  }
  
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
