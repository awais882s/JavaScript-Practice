var state = {
  balance: 0,
  income: 400,
  expense: 100,
  transactions: [
    {
      name: "salary",
      amount: 5000,
      type: "income",
    },
    {
      name: "Buy Grocery",
      amount: 50,
      type: "expense",
    },
    {
      name: "Buy Guitar",
      amount: 500,
      type: "expense",
    },
  ],
};
// functions============================================
var balanceEl = document.querySelector("#balance");
var incomeEl = document.querySelector("#income");
var expensEl = document.querySelector("#expense");
var transactionsEl = document.querySelector("#transaction");
function init() {
  balanceEl.innerHTML = `${state.balance}`;
  incomeEl.innerHTML = `${state.income}`;
  expensEl.innerHTML = `${state.expense}`;

  var transactionEl, containerEL, amountEL, item;
  for (var i = 0; i < state.transactions.length; i++) {
    item = state.transactions[i];
    transactionEl = document.createElement("li");
    transactionEl.append(item.name);
    transactionEl.appendChild(transactionEl);
    //   create a div elements
    containerEl = document.createElement("div");
    amountEl = document.createElement("span");
    if (item.type === "income") {
      amountEL.classList.add("income-amt");
    } else if (item.type === "expense") {
      amountEL.classList.add("expense-amt");
    }
  }
}
init();
