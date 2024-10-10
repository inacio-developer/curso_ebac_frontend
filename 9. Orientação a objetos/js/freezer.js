import { HomeAppliances } from "./homeAppliances.js";

class Freezer extends HomeAppliances {
  #_temperature = 0;

  constructor(model, brand, price, connection, liters) {
    super("Freezer", model, brand, price, connection);
    this.liters = liters;
    this.open = false;
  }

  open() {
    this.open = true;
  }

  close() {
    this.open = false;
  }

  addTemperature = (value) => {
    value ? (this.#_temperature = value) : this.#_temperature++;
  };
  reduceTemperature = (value) => {
    value ? (this.#_temperature = value) : this.#_temperature--;
  };
  getTemperature = () => _this.#_temperature;
}

export { Freezer };
