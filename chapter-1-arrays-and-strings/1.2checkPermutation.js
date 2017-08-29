// 1.2 Check Permutation: Given two strings, write a method to decide if one is a permutation of the other.


function checkPermutation(s1,s2) {
  if (s1.length != s2.length) {
    return false;
  }
  var charDict = {};
  for (var i=0; i<s1.length; i++) {
    if (charDict.hasOwnProperty(s1[i])) {
      charDict[s1[i]] += 1;
    } else {
      charDict[s1[i]] = 1;
    }
  }
  console.log(charDict);
  for (var j=0; j<s2.length; j++) {
    if (charDict.hasOwnProperty(s2[j])) {
      if (charDict[s2[j]] <= 0) {
        return false;
      }
      charDict[s2[j]] -= 1;
    }
  }
  console.log(charDict); // still prints { h: 1, e: 1, l: 2, o: 1 }
  for (i in charDict) {
    if (charDict[i] !== 0) {
      return false;
    }
  }
  console.log(charDict);
  return true;
}