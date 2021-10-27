import { ProxyState } from "../AppState.js";
import { pokiesService } from "../Services/PokiesService.js";

function _drawPokemon() {
  const pokemon = ProxyState.pokemonApi
  let template = ''


}



export class PokiesController {
  constructor() {
    this.getPokemonApi()

  }

  async getPokemonApi() {
    try {
      await pokiesService.getPokemonApi()
    } catch (error) {
      console.error("[Pokemon API Error]", error)
    }
  }

}