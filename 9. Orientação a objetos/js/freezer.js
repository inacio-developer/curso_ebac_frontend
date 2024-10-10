import { HomeAppliances } from "./homeAppliances.js";

class Freezer extends HomeAppliances {
  constructor(name, model, brand, price, connection, liters, temperature = 0) {
    super(name, model, brand, price, connection);
    this.liters = liters;
    let _temperature = this.getStatus() === "on" ? temperature : 0;
    this.open = false;

    this.addTemperature = (value) => {
      value ? (_temperature = value) : _temperature++;
    };
    this.reduceTemperature = (value) => {
      value ? (_temperature = value) : _temperature--;
    };
    this.getTemperature = () => _temperature;
  }

  open() {
    this.open = true;
  }

  close() {
    this.open = false;
  }
}

export { Freezer };
