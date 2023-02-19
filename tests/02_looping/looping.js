/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let factorial = 1;
  // for loop 
  for (let i = 1; i<= num; i++){
    factorial *= i 
  }
  // return 
  return factorial;
}

function stringReverse(str) {
  // for loop  | to count from back the index is -1 [i--]decrementing backwards
  backwardsStr = ''
  for (let i = str.length -1; i>=0; i--){
    backwardsStr += str[i]
  }
  // return 
  return(backwardsStr);
}

// do not use built in slice method.
function slicer(originalString, startIdx, endIdx) {
  if (startIdx === undefined){
    return originalString;
  }
  if (endIdx === undefined){
    endIdx = originalString.length
  }
  let stringNew = ''

  for (i= startIdx; i<endIdx; i++){
    stringNew += originalString[i]
  }
  return stringNew;
  

}

function addTheEvens(num) {
  let total = 0;
  for(i =0; i<=num; i+=2){
    total +=i;
  }
  return total 

}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
