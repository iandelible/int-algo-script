 function translatePigLatin(str) {
  //create a regex to find vowels
  var vowels = /[aeiou]/gi;
  var indexOfVowel = '';
  //if the first letter is a vowel, return string argument and add "way"
  if (str[0].match(vowels)){
    return str + "way";
  }
  //else find the index value of the vowel in the string, 
  //then return the string starting from the vowel and add the beginning consonants with "ay"
  else {
    indexOfVowel = str.indexOf(str.match(vowels)[0]);
    
    return str.substr(indexOfVowel) + str.substr(0, indexOfVowel) + "ay";
  }
  
}

translatePigLatin("consonant");

//learned about regex and is typically good for finding user info like a phone number
//had to learn the trick about str.match(vowels)[0] to get the indexOf
