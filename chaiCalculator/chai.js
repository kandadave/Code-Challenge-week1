
function calculateChaiIngredients() {
 
  let numberOfCupsInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");

 
  let numberOfCups = parseInt(numberOfCupsInput);

  
  if (isNaN(numberOfCups) || numberOfCups <= 0) {
    console.log("Please enter a valid number of cups.");
    return; 
  }

 
  const waterPerCup = 200; 
  const milkPerCup = 50; 
  const teaLeavesPerCup = 1; 
  const sugarPerCup = 2; 

  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;


  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("\nEnjoy your Chai Bora!");




}


calculateChaiIngredients();