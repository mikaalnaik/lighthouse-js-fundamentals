function calculateRectangleArea(length, width){
  if (length || width < 0) return undefined
  return length*width;
}


console.log("The rectangle is " + calculateRectangleArea(-2,3) + " metres squared")


function calculateTriangleArea(base, height) {
  return (base * height) / 2
}

console.log("The triangle is " + calculateTriangleArea(2,3) + " metres squared")

function calculateCircleArea(radius){
  return Math.PI * radius*radius
}

console.log("The circle is " + calculateCircleArea(2,3) + " metres squared")


