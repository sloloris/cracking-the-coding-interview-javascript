'use strict';

// 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? 

function isUnique(s) {
  // assuming only lowercase characters; can be changed to suit other character combinations
  if (s.length > 26) {
    return false
  }
  let charSet = new Set([])
  for (var i=0; i<s.length; i++) {
    if (charSet.has(s[i])) {
      return false
    } else {
      charSet.add(s[i])
    }
  }
  return true
}
