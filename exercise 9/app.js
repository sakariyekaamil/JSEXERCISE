const car = {
  name: "car",
  model: "z model",
  year: "2020",

  start: function () {
    console.log("The car is started: " + this.name);
  }
};

car.start();
