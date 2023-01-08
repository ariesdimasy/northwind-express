var twoSum = function (nums, target) {
  var res = [];
  for (var i = 0; i < nums.length; i++) {
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        res.push(i, j);
        return res;
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
