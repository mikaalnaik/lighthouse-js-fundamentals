function lastIndexOf(array, value) {
  var match = false
  var index;
  for (var i = (array.length - 1); i > -1; i--) {
    if (value === array[i]) {
      match = true;
      index = i;
      break;
    }
  }
  if (match) {
    return index;
  } else {
    return -1;
  }
}


console.log(lastIndexOf([ 5, 5, 5 ], 5), "=?", 2);
console.log(lastIndexOf([3], 3), "=?", 0);