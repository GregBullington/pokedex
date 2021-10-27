import { PokiesController } from "./Controllers/PokiesController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();
  pokiesController = new PokiesController()
}

window["app"] = new App();
