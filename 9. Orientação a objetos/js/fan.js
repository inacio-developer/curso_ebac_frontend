import { HomeAppliances } from "./homeAppliances.js";

class Fan extends HomeAppliances {
  #_speed = this.getStatus() === "on" ? 1 : 0;
  constructor(model, brand, price, connection) {
    super("Fan", model, brand, price, connection);
  }

  getSpeed = () => this.#_speed;

  upSpeed = () =>
    this.#_speed < 3
      ? this.#_speed++
      : "there is no way to increase the fan speed any further";

  downSpeed = () =>
    this.#_speed > 0
      ? this.#_speed--
      : "there is no way to decrease the fan speed any further";
}

export { Fan };
