var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++){
  console.log(ingredients[i])
}


// Write a for loop that prints out the contents of ingredients:
var repeat = 0

while (repeat < ingredients.length){
  console.log(ingredients[repeat]);
  repeat ++;
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:

var listingLength = ingredients.length - 1

while (listingLength > -1){
  console.log(ingredients[listingLength]);
  listingLength --;
}