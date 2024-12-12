import { PokemonService } from "../service/pokemonService.ts"

export class PokemonController {

    private pokemonService: PokemonService;

    constructor() {
        this.pokemonService = new PokemonService();
    }
    
    getAllPokemon(req, res) {
        const pokemons = this.pokemonService.getAllPokemon();
        res.json({ success: true, data: pokemons });
    }

    getByIdPokemon(req, res) {
        const pokemons = this.pokemonService.getByIdPokemon(id);
        res.json({ success: true, data: pokemons });
    }

    addPokemon(req, res) {
        const pokemons = this.pokemonService.addPokemon(id);
        res.json({ success: true, data: pokemons });
    }

    deletePokemon(req, res) {
        const pokemons = this.pokemonService.deletePokemon(id);
        res.json({ success: true, data: pokemons });
    }
}
