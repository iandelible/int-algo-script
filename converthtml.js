function convertHTML(str) {
  // &colon;&rpar;
  // chains replace method for each html entity 
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}

convertHTML("Dolce & Gabbana");