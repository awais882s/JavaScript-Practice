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
