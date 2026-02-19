document.getElementById("add-money-btn").addEventListener("click", function () {
  //1- bank acc get
  const bankAccount = getValueFromInout("add-money-bank");
  if (bankAccount == "Select a Bank") {
    alert("please select a bank");
    return;
  }
  //2 - get bank account num
  const accNo = getValueFromInout("add-money-number");
  if (accNo.length != 11) {
    alert("Invalid account number");
    return;
  }
  //3 - get amount
  const amount = getValueFromInout("add-money-amount");
  const newBalance = getBalance() + Number(amount);

  const pin = getValueFromInout("add-money-pin");
  if (pin == "1234") {
    alert(`Add Money Success form ${bankAccount} at ${new Date()}`);
    setBalance(newBalance);
  } else {
    alert("invalid pin");
    return;
  }
});
