function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  
  // regex for white space and _
  var spaceUnderscore = /\s|_/g;
  // regex for camel cases
  var camelCase = /([a-z])([A-Z])/g;
  return str.replace(spaceUnderscore, '-').replace(camelCase, '$1-$2').toLowerCase();

spinalCase('This Is Spinal Tap');
