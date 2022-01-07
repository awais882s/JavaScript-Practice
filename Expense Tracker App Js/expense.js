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
function init() {
  balanceEl.innerHTML = `${state.balance}`;
  incomeEl.innerHTML = `${state.income}`;
  expensEl.innerHTML = `${state.expense}`;
}
init();
