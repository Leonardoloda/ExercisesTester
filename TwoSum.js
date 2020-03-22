const TwoSum = function(nums, target) {
  var retorno = [];

  nums.reduce((acumulated, current, _, arr) => {
    if(acumulated + current === target) {
      retorno[0] = arr.indexOf(acumulated);
      retorno[1] = arr.indexOf(current);
    }

    return current;
  });

  return retorno.toString();
}

module.exports = TwoSum;
