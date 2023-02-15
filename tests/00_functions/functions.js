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

function addUnknown() {

}

function evenOrOdd() {

}

function operator() {

}

module.exports = {
  max, addUnknown, evenOrOdd, operator,
};
