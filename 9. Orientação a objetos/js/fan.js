import { HomeAppliances } from "./homeAppliances.js";

class Fan extends HomeAppliances {
  constructor(name, model, brand, price, connection) {
    super(name, model, brand, price, connection);
    let _speed = this.getStatus() === "on" ? 1 : 0;

    this.upSpeed = () =>
      _speed < 3
        ? _speed++
        : "there is no way to increase the fan speed any further";
    this.downSpeed = () =>
      _speed > 0
        ? _speed--
        : "there is no way to decrease the fan speed any further";
    this.getSpeed = () => _speed;
  }
}

export { Fan };
