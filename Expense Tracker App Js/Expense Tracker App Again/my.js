var state = {
  balance: 0,
  income: 400,
  expense: 100,
  transactions: [
    {
      name: "Salary",
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
// create a init function()=================================================================================================
var balanceEl = document.querySelector("#balance");
var incomeEl = document.querySelector("#income");
var expenseEl = document.querySelector("#expense");
var transactionsEl = document.querySelector("#transaction");
function init() {
  updateState();
  render();
}
function updateState() {
  var balance = 0,
    income = 0,
    expense = 0,
    item;
  var tranlen = state.transactions.length;
  for (var i = 0; i < tranlen; i++) {
    item = state.transactions[i];
    if (item.type === "income") {
      income = income + item.amount;
    } else if (item.type === "expense") {
      expense = expense + item.amount;
    }
  }
  balance = income - expense;

  state.balance = balance;
  state.income = income;
  state.expense = expense;
}
function render() {
  balanceEl.innerHTML = `$${state.balance}`;
  incomeEl.innerHTML = `$${state.income}`;
  expenseEl.innerHTML = `$${state.expense}`;
  //   create a list of variables=====================================================================================
  var transactionEl, containerEl, amountEl, item, btnEl;
  //   for length of transaction check outside of for loop==================================================================
  var tranlen = state.transactions.length;
  for (var i = 0; i < tranlen; i++) {
    item = state.transactions[i];
    transactionEl = document.createElement("li");
    transactionEl.append(item.name);
    transactionsEl.appendChild(transactionEl);
    // create a div and span element and also one button ===========================================================================================
    containerEl = document.createElement("div");
    amountEl = document.createElement("span");
    if (item.type === "income") {
      amountEl.classList.add("income-amt");
    } else if (item.type === "expense") {
      amountEl.classList.add("expense-amt");
    }
    amountEl.innerHTML = `$${item.amount}`;
    containerEl.appendChild(amountEl);
    btnEl = document.createElement("button");
    btnEl.innerHTML = "X";
    containerEl.appendChild(btnEl);
    transactionEl.appendChild(containerEl);
  }
}
init();
