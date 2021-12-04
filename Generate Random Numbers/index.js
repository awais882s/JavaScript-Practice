const button = document.getElementById("btn1");

button.addEventListener("click", function () {
  const bigDecimal = Math.random();
  const improvedNumbers = (bigDecimal * 6) + 1;
  const finalNumbers = Math.floor(improvedNumbers);
  console.log(finalNumbers);
});
