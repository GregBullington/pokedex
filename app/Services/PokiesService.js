import { ProxyState } from "../AppState.js";
import { Pokemon } from "../Models/Pokemon.js"
import { pokemonApi, sandboxApi } from "./AxiosService.js"

class PokiesService {

  async getPokemonApi() {
    const res = await pokemonApi.get()
    const pokemon = new Pokemon(res.data)
    ProxyState.currentPokemon = pokemon
    console.log(res.data);
  }


}



export const pokiesService = new PokiesService()