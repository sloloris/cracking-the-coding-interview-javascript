// 1.6 String Compression: Implement a method to perform basic string compression using the counts of repeated characters. For example, the string 'aabcccccaaa' would become 'a2b1c5a3'. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase letters (a-z). 

function compressString(s) {
  var currentChar = s[1];
  var count = 0;
  var compressedString = '';
  for (var i=0; i<s.length; i++) {
    if (s[i] !== currentChar) {
      compressedString += currentChar;
      compressedString += count.toString();
      currentChar = s[i];
      count = 0;
    }
    count += 1;
  }
  compressedString += currentChar;
  compressedString += count.toString();
  if (s.length <= compressedString.length) {
    return s;
  }
  return compressedString;
}