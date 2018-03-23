
function range(start, end, step){
  var myArray = [];
  if (step < 0) {
    return myArray;
  }
  for (start; start <= end; start += step) {
    myArray.push(start);
  }
  return myArray;
}
console.log(range(2,40,9));
console.log(range(4,35,-1));
