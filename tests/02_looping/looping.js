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
 

}

function addTheEvens(num) {

}

module.exports = {
  factorial, stringReverse, slicer, addTheEvens,
};
