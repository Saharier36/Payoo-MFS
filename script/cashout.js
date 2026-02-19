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
  const balanceElement = document.getElementById("balance");
  const balance = balanceElement.innerText;
  console.log(balance);
  //4 - calculate new balance
  const newBalance = Number(balance) - Number(cashoutAmount);
  if (newBalance < 0) {
    alert("Invalid Amount");
    return;
  }
  //5 - get the pin and verify
  const pin = getValueFromInout("cashout-pin");
  if (pin === "1234") {
    //5.1 - true:: show an alert > set balance
    alert("cashout successful");
    balanceElement.innerText = newBalance;
  } else {
    //5.2 - true:: show an error alert > return
    alert("Invalid Pin");
    return;
  }
});

// document.getElementById("cashout-btn").addEventListener("click", function () {
//
//   const cashoutNumberInput = document.getElementById("cashout-number");
//   const cashoutNumber = cashoutNumberInput.value;
//   console.log(cashoutNumber);
//
//
//   const cashoutAmountInput = document.getElementById("cashout-amount");
//   const cashoutAmount = cashoutAmountInput.value;
//   console.log(cashoutAmount);

//
//   const newBalance = Number(balance) - Number(cashoutAmount);
//   if (newBalance < 0) {
//     alert("Invalid Amount");
//     return;
//   }
//   //5 - get the pin and verify
//   const cashoutPinInput = document.getElementById("cashout-pin");
//   const pin = cashoutPinInput.value;
//   if (pin === "1234") {
//     //5.1 - true:: show an alert > set balance
//     alert("cashout successful");
//     console.log("new balance", newBalance);
//     balanceElement.innerText = newBalance;
//   } else {
//     //5.2 - true:: show an error alert > return
//     alert("Invalid Pin");
//     return;
//   }
// });
