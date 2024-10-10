import { HomeAppliances } from "./homeAppliances.js";

class TV extends HomeAppliances {
  constructor(model, brand, price, connection, smartTV, inches, entries) {
    super("TV", model, brand, price, connection);
    this.smartTV = smartTV;
    this.inches = inches;
    this.entries = entries;
    this.channel = 1;
  }

  advChannel(value) {
    this.getStatus() === "on"
      ? value
        ? (this.channel = value)
        : this.channel++
      : "the tv is off";
  }

  backChannel(value) {
    this.getStatus() === "on"
      ? value
        ? (this.channel = value)
        : this.channel--
      : "the tv is off";
  }
}

export { TV };
