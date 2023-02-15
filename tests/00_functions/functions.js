/* eslint-disable arrow-body-style */
/* eslint-disable consistent-return */
function max(num1, num2, num3) {
  if (num1 > num2 && num1 > num3){
    return num1;
  }
  if (num2 > num1 && num2 > num3){
    return num2;
  }
  return num3;
}

function addUnknown(num1, num2, num3, num4, num5) {
  if (num3 === undefined){
    num3 = 0 
  }
  if (num4 === undefined){
    num4 = 0 
  }
  if (num5 === undefined){
    num5 = 0 
  }

  return (num1 + num2 + num3 + num4 + num5)


}

function evenOrOdd(num) {
  if (num % 2 == 0 ){
    return "even"
  }
  else{
    return "odd"
  }

}

function operator(num1,num2,num3) {
  if (num1 + num2 === num3){
    return "plus"
  }
  if (num1 - num2 === num3){
    return "minus"
  }
  if (num1 * num2 === num3){
    return "multiply"
  }
  if (num1 / num2 === num3){
    return "divide"
  }
  else{
    return null
  }

}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
