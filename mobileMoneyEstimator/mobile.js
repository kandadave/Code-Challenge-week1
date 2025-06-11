
function estimateTransactionFee(amountToSend) {
  const percentageFeeRate = 0.015; 
  const minimumFee = 10; 
  const maximumFee = 70;

  let sendingFee = amountToSend * percentageFeeRate
  
  if (sendingFee<minimumFee){
    sendingFee=minimumFee;
  } else if(sendingFee>maximumFee){
    sendingFee=maximumFee;
  }
  
  const totalAmountDebited = amountToSend + sendingFee;

  console.log(`Sending KES ${amountToSend}:`);
  console.log(`Calculated Transaction Fee: KES ${sendingFee}`);
  console.log(`Total amount to be debited: KES ${totalAmountDebited}`);
  console.log("\nSend Money Securely!");

}

window.onload = function(){
  let amountInput = prompt("Unatuma Ngapi? (KES):");
  let amountToSend = Number(amountInput);
    
    
  if (!isNaN(amountToSend) && amountToSend > 0) {
      estimateTransactionFee(amountToSend)
    } else{
      console.log("Please weka number iko valid")
    }
}
  

estimateTransactionFee();