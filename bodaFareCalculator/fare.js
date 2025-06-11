
function calculateBodaFare() {
  let distanceInput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?:");

  let distanceInKm = parseFloat(distanceInput); // Use parseFloat to allow for decimal distances

  if (isNaN(distanceInKm) || distanceInKm < 0) {
    console.log("Hiyo sio number poa. Tafadhali weka namba halali ya umbali.");
    return;   
  }

 
  const baseFare = 50; 
  const chargePerKm = 15; 

  const totalFare = baseFare + (distanceInKm * chargePerKm);
  const mpakaUkoCharge = distanceInKm * chargePerKm; 

  console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
  console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
  console.log(`Mpaka Uko: KES ${mpakaUkoCharge}`);
  console.log(`Total: KES ${totalFare}`);
  console.log("\nPanda Pikipiki!");
}

calculateBodaFare();