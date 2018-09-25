module.exports = function main(Num) {
  // Write your code here
  var len = Num.length;
  var sum = 0;
  for (var i=0; i<len; i++){
      sum += Number(Num[i]);
  }
  return sum;
};

