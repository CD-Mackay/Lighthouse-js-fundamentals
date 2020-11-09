const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

let i = 0; // Write a while loop that prints out the contents of ingredients:
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++;
}

for (let c = 0; c < ingredients.length; c++) {// Write a for loop that prints out the contents of ingredients:
  console.log(ingredients[c]);
}

for (let c=ingredients.length-1; c >= 0; c--) {// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log(ingredients[c]);
}