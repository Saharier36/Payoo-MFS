document.getElementById("cashout-btn").addEventListener("click", function () {
  //1 - get the agent number & validate
  const cashoutNumber = getValueFromInout("cashout-number");
  if (cashoutNumber.length !== 11) {
    alert("Invalid Agent Number");
    return;
  }
  //2 - get the amount
  const cashoutAmount = getValueFromInout("cashout-amount");
  //3 - get the current balance
  const currentBalance=getBalance()
  //4 - calculate new balance
  const newBalance = currentBalance - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  //5 - get the pin and verify
  const pin = getValueFromInout("cashout-pin");
  if (pin === "1234") {
    //5.1 - true:: show an alert > set balance
    alert("cashout successful");
    setBalance(newBalance)
  } else {
    //5.2 - true:: show an error alert > return
    alert("Invalid Pin");
    return;
  }
});
