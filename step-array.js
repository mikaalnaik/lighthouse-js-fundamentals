myArray = [];

function range (start, end, step){
  var i = start
  if (start>end){
    return myArray
  } else if (step < 0){
    return myArray


  while (i <= end){
  myArray.push(i)
  i += step
  }
}
}

range(10,30,7)
console.log(myArray)




  /*if (start || end || step === undefined){
    return newArray[];
  }*/