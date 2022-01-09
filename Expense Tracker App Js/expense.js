// create variable and store some data in objects and arrays ================================================================================
var state = {
  balance: 0,
  income: 400,
  expense: 100,
  transactions: [
    // {
    //   id: uniqueId(),
    //   name: "salary",
    //   amount: 1000,
    //   type: "income",
    // },
    // {
    //   id: uniqueId(),
    //   name: "Buy Grocery",
    //   amount: 50,
    //   type: "expense",
    // },
    // {
    //   id: uniqueId(),
    //   name: "Buy Guitar",
    //   amount: 500,
    //   type: "expense",
    // },
  ],
};
// create all variables==========================================================================================
var balanceEl = document.querySelector("#balance");
var incomeEl = document.querySelector("#income");
var expensEl = document.querySelector("#expense");
var transactionsEl = document.querySelector("#transaction");
var incomeBtnEl = document.querySelector("#incomeBtn");
var expenseBtnEl = document.querySelector("#expenseBtn");
var nameInputEl = document.querySelector("#name");
var amountInputEl = document.querySelector("#amount");
function init() {
  var localState = JSON.parse(localStorage.getItem("expenseTrackerState"));
  if (localState !== null) {
    state = localState;
  }
  updateState();
  initListeners();
}
// create unique function to delete specific value from the list============================================================

function uniqueId() {
  return Math.round(Math.random() * 1000000);
}
// function listeners on buttons ==================================================================
function initListeners() {
  incomeBtnEl.addEventListener("click", onAddIncomeClick);
  expenseBtnEl.addEventListener("click", onAddExpenseClick);
}
// function onAddIncomeClick ===================================================================
function onAddIncomeClick() {
  addTransaction(nameInputEl.value, amountInputEl.value, "income");
  //   console.log("income", nameInputEl.value, amountInputEl.value);
}
// function addTransaction =======================================================================
function addTransaction(name, amount, type) {
  if (name !== "" && amount !== "") {
    var transaction = {
      id: uniqueId(),
      name: name,
      amount: parseInt(amount),
      type: type,
    };
    state.transactions.push(transaction);
    updateState();
  } else {
    alert("Please Enter Vaild Data");
  }
  nameInputEl.value = "";
  amountInputEl.value = "";
}
// function onAddExpenseClick =====================================================================
function onAddExpenseClick() {
  //   console.log("income", nameInputEl.value, amountInputEl.value);
  addTransaction(nameInputEl.value, amountInputEl.value, "expense");
}
// function onDeleteClick ====================================================================================

function onDeleteClick(event) {
  var id = parseInt(event.target.getAttribute("data-id"));
  var deleteIndex;
  for (var i = 0; i < state.transactions.length; i++) {
    if (state.transactions[i].id === id) {
      deleteIndex = i;
      break;
    }
  }
  state.transactions.splice(deleteIndex, 1);
  updateState();
  //   console.log(event.target);
}
// function update states========================================================================
function updateState() {
  var balance = 0,
    income = 0,
    expense = 0,
    item;
  for (var i = 0; i < state.transactions.length; i++) {
    item = state.transactions[i];
    if (item.type === "income") {
      income += item.amount;
      // income = income + item.amount;
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
  // use local storage to add some data =======================================================================================

  localStorage.setItem("expenseTrackerState", JSON.stringify(state));
  render();
}
// function Render==============================================================================
function render() {
  balanceEl.innerHTML = `$${state.balance}`;
  incomeEl.innerHTML = `$${state.income}`;
  expensEl.innerHTML = `$${state.expense}`;

  var transactionEl, containerEl, amountEl, item, btnEl;
  transactionsEl.innerHTML = "";
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
    btnEl.setAttribute("data-id", item.id);
    btnEl.innerHTML = "X";
    btnEl.addEventListener("click", onDeleteClick);
    containerEl.appendChild(btnEl);
    transactionEl.appendChild(containerEl);
  }
}
// function init call ====================================================================================
init();
