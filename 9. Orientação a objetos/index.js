import { Fan } from "./js/fan.js";
import { Freezer } from "./js/freezer.js";
import { TV } from "./js/tv.js";

const freezer = new Freezer(
  "Horizontal 2 portas",
  "Consul",
  2.5,
  "plug in",
  534
);

const tv = new TV("50PUG7408/78", "Philips", 1.946, "plug in", true, '50"', 4);

const fan = new Fan("Maxx Force", "Britânia", 199.9, "Plug in");

console.log(freezer, tv, fan);
