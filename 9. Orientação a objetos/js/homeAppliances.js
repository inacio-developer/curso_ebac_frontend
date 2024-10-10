const connectionType = {
  PLUG_IN: "plug in",
  BATTERY: "battery",
  RECHARGEABLE: "rechargeable",
};

class HomeAppliances {
  #_status = "off";

  constructor(name, model, brand, price, connection) {
    this.name = name;
    this.model = model;
    this.brand = brand;
    this.price = price;
    if (Object.values(connectionType).includes(connection.toLowerCase()))
      this.connectionType = connection;
    else throw new Error(`Invalid power type: ${connection}`);

    this.getStatus = () => {
      return this.#_status;
    };

    this.btnOn = () => {
      console.log(`${this.name} switch on`);
      this.#_status = "on";
    };

    this.btnOff = () => {
      console.log(console.log(`${this.name} switch off`));
      this.#_status = "off";
    };
  }
}

export { HomeAppliances };
