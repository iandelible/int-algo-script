function pairElement(str) {
  //return the pairs when given one side of the pair
  var pairs = [];
  
  //loop through the elements and push each pair into the array
  for (i = 0; i < str.length; i++) {
    if (str[i] === 'A') {
      pairs.push(['A','T']);
    }
    else if (str[i] === 'C') {
      pairs.push(['C','G']);
    }
    else if (str[i] === 'G') {
      pairs.push(['G','C']);
    }
    else {
      pairs.push(['T','A']);
    }
  }
  
  return pairs;
}

pairElement("ATGCG");

//food for thought: switch and case is another way