// Product interface
class Car {
  drive() {
    console.log("Driving a generic car.");
  }
}

// Concrete products
class Sedan extends Car {
  drive() {
    console.log("Driving a sedan.");
  }
}

class SUV extends Car {
  drive() {
    console.log("Driving an SUV.");
  }
}

// Factory
class CarFactory {
  createCar(type) {
    switch (type) {
      case "sedan":
        return new Sedan();
      case "suv":
        return new SUV();
      default:
        return new Car();
    }
  }
}

// Client code
const factory = new CarFactory();
const sedan = factory.createCar("sedan");
const suv = factory.createCar("suv");
const genericCar = factory.createCar();

sedan.drive(); // Driving a sedan.
suv.drive(); // Driving an SUV.
genericCar.drive(); // Driving a generic car
