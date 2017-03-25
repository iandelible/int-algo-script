function myReplace(str, before, after) {
  var point = str.indexOf(before);
  var letter = str[point];
  var upper = after[0];
  
  if (letter === letter.toLowerCase()) {
    return str.replace(before, after);
  }
  else {
    var makeBig = after.charAt(0).toUpperCase() + after.slice(1);
    return str.replace(before, makeBig);
  }
  
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
