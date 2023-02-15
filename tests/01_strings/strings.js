/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  const doesIncludeLetter = str.includes(letter);
  return doesIncludeLetter; 
}

function cap(str, letter) {

}

function firstCharacter(str1, str2) {
  const str1_upper = str1.toUpperCase()
  const str2_upper = str2.toUpperCase() 
  if (str1_upper.charAt(0)===str2_upper.charAt(0)){
    return true
  }
  else{
    return false
  }
}

module.exports = {
  cap, firstCharacter, doesInclude,
}
