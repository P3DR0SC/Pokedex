export class PokemonService {
    private pokemons: Array<{ id: string; name: string; type: string }> = [
        { id: '1', name: 'Squirtle', type: 'Water' },
        { id: '2', name: 'Charmander', type: 'Fire' },
        { id: '3', name: 'Bulbasaur', type: 'Grass' },
    ];

    async getAllPokemon() {
        return this.pokemons;
    }

    async getByIdPokemon(id: string) {
        return this.pokemons.find(pokemon => pokemon.id === id);
    }

    async addPokemon(pokemon: { name: string; type: string }) {
        const newPokemon = { id: `${Date.now()}`, ...pokemon };
        this.pokemons.push(newPokemon);
        return newPokemon;
    }

    async deletePokemon(id: string) {
        const index = this.pokemons.findIndex(pokemon => pokemon.id === id);
        if (index === -1) return null;
        return this.pokemons.splice(index, 1)[0];
    }
}
