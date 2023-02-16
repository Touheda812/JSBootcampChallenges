/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  // check if the str includes the letter. if true return true
  if (str.includes(letter)){
    return true;
  }
  return false;
}

function cap(str, letter) {
  const index = str.indexOf(letter)
  if(index === -1){
    return 'sorry not found';
  }
  if(index === str.length - 1){
    return str[0].toUpperCase();
  }
  const nextIndex = index + 1;
  return str[nextIndex].toUpperCase();
//  // else return false
//   if (str.includes(letter)){
//     const index = str.indexOf(letter)
//     const num = index+1
  
//     const index1 = (str[index])
//     const num1 = (str[num]).toUpperCase()
//     return num1
//   }
//   else{
//     return "sorry not found"
//   }
}

function firstCharacter(str1, str2) {
  // grab the first character from each variable and new variables.
  // const str1FirstChar = str1[0].toLowerCase();
  // const str2FirstChar = str2[0].toLowerCase();

  if (str1[0].toLowerCase()===str2[0].toLowerCase()){
    return true;
  }
  
  // if first chars are equal return true 

  // else return false
  return false;

  // const str1_upper = str1.toUpperCase()
  // const str2_upper = str2.toUpperCase() 
  // if (str1_upper.charAt(0)===str2_upper.charAt(0)){
  //   return true
  // }
  // else{
  //   return false
  // }
}

module.exports = {
  cap, firstCharacter, doesInclude,
}
