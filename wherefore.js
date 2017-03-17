//Make a function that looks thru an arry of objects and returns an array of all object with matching property and value pairs. 
function whatIsInAName(collection, source) {
  
  var srcKeys = Object.keys(source);

  // filter the collection
  return collection.filter(function (obj) {
    for(var i = 0; i < srcKeys.length; i++) {
      // if object is not same or obj values are not same return false
      if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]] !== source[srcKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//if Wan gets this far, consider looping thru the collection 
//then pushing into the array that was originally given