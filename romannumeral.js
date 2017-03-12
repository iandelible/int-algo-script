function convertToRoman(num) {
  var digit = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  var total = '';
  
  for (var i = 0; i < digit.length; i++) {
    while (digit[i] <= num) {
      total += roman[i];
      num -= digit[i];
    }
  }
  return total;
} 

convertToRoman(141);