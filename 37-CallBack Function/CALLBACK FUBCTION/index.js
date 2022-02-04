const funA = () => {
  setTimeout(() => {
    console.log(`welcome funcA`);
  }, 3000);
};

const funB = () => {
  console.log(`welcome funB`);
};

funA();
funB();

const personOne = (friend, callfrnd) => {
  console.log(
    `I am busy right now. I am talking to other ${friend} .I will Call You Back`
  );
  callfrnd();
};
const personTwo = () => {
  console.log("Hey whatsappp. I call back you dekha.");
};

personOne("AWAIS", personTwo);
// personTwo();
