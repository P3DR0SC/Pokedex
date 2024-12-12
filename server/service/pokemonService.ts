import { Pokemon } from "../domain/model/pokemon";
import { TypePokemon } from "../domain/model/types";


export class PokemonService {
    
    getAllPokemon() {
       return console.log("func getAll, "), Pokemon;
    }

    getByIdPokemon(id) {
        return console.log("func getById");
    }

    putAtualizaPokemon() {
        return console.log("func putAtualizaPokemon");
    }

    postAddPokemon(Pokemon, TypePokemon) {
       return console.log("func add");
    }

    deletePokemon(id) {
        return console.log("func delete");
    }
}
