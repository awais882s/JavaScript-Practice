var state = {
  balance: 0,
  income: 400,
  expense: 100,
  transactions: [
    {
      name: "salary",
      amount: 1000,
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
var incomeBtnEl = document.querySelector("#incomeBtn");
var expenseBtnEl = document.querySelector("#expenseBtn");
function init() {
  updateState();
  initListeners();
  render();
}
// function listeners on buttons
function initListeners() {
  incomeBtnEl.addEventListener("click", onAddIncomeClick);
  expenseBtnEl.addEventListener("click", onAddExpenseClick);
}
function onAddIncomeClick() {
    

}
function onAddExpenseClick() {
    
}
// function update states
function updateState() {
  var balance = 0,
    income = 0,
    expense = 0,
    item;
  for (var i = 0; i < state.transactions.length; i++) {
    item = state.transactions[i];
    if (item.type === "income") {
      //   income += item.amount;
      income = income + item.amount;
    } else if (item.type === "expense") {
      // expense += item.amount;
      expense = expense + item.amount;
    }
  }
  balance = income - expense;
  //   console.log(balance,income,expense);
  state.balance = balance;
  state.income = income;
  state.expense = expense;
}
// function Render
function render() {
  balanceEl.innerHTML = `$${state.balance}`;
  incomeEl.innerHTML = `$${state.income}`;
  expensEl.innerHTML = `$${state.expense}`;

  var transactionEl, containerEl, amountEl, item, btnEl;
  for (var i = 0; i < state.transactions.length; i++) {
    item = state.transactions[i];
    transactionEl = document.createElement("li");
    transactionEl.append(item.name);
    transactionsEl.appendChild(transactionEl);
    //   create a div elements
    containerEl = document.createElement("div");
    amountEl = document.createElement("span");
    if (item.type === "income") {
      amountEl.classList.add("income-amt");
    } else if (item.type === "expense") {
      amountEl.classList.add("expense-amt");
    }
    amountEl.innerHTML = `$${item.amount}`;
    // console.log(amountEl);
    containerEl.appendChild(amountEl);
    btnEl = document.createElement("button");
    btnEl.innerHTML = "X";
    containerEl.appendChild(btnEl);
    transactionEl.appendChild(containerEl);
  }
}

init();
