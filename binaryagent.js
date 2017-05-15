
function binaryAgent(str) {

  //split binary strings into individual elements in an array
  var split = str.split(' ');
  //another array to keep new values
  var agent = [];
  //function to convert binary string to decimal
  function bin_to_dec(bstr) { 
    return parseInt(bstr, 2);
  }
  
  //loop thru each element in the array and convert to decimal, and push into agent array
  //convert each element in the agent array by fromCharCode()
  for (i = 0; i < split.length; i++) {
    agent.push(String.fromCharCode(bin_to_dec(split[i])));
  }
  //join the agent array into a regular string
  return agent.join('');




  // function bin_to_dec(bstr) { 
  //   return parseInt(bstr, 2);
  //   // return parseInt((bstr + '')
  //   // .replace(/[^01]/gi, ''), 2);
  // }
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");