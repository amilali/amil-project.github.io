function makeCoffee(name, callback) {
    console.log(`Your coffee is being made: ${name}`);
    setTimeout(() => {
      callback(name);
    }, 5000);
  }
  
  const coffeeMade = (name) => console.log(`Yay! ${name}, your coffee is ready.`);
  
  makeCoffee("Amil", coffeeMade);
  