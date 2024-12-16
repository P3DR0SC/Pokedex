import { Request, Response } from 'express';  // Importando Request e Response do Express
import { PokemonService } from '../service/pokemonService';  // Importando o serviço de Pokémon

export class PokemonController {
    private pokemonService: PokemonService;

    constructor() {
        this.pokemonService = new PokemonService();
    }

    // Método para pegar todos os pokemons
    async getAllPokemon(req: Request, res: Response): Promise<void>  {
        try {
            const pokemons = await this.pokemonService.getAllPokemon();
            res.json({ success: true, data: pokemons });
        } catch (error: any) { // Tratando erro como 'any'
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // Método para pegar um pokemon pelo ID
    async getByIdPokemon(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const pokemon = await this.pokemonService.getByIdPokemon(id);
            if (!pokemon) {
                res.status(404).json({ success: false, message: "Pokémon not found" });
                return;
            }
            res.json({ success: true, data: pokemon });
        } catch (error: any) { // Tratando erro como 'any'
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // Método para adicionar um novo pokemon
    async addPokemon(req: Request, res: Response): Promise<void> {
        try {
            const { name, type } = req.body;
            const newPokemon = await this.pokemonService.addPokemon({ name, type });
            res.status(201).json({ success: true, data: newPokemon });
        } catch (error: any) { // Tratando erro como 'any'
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // Método para deletar um pokemon
    async deletePokemon(req: Request, res: Response): Promise<void> {
        try {
            const { id } = req.params;
            const result = await this.pokemonService.deletePokemon(id);
            if (!result) {
                res.status(404).json({ success: false, message: "Pokémon not found" });
                return;
            }
            res.json({ success: true, message: "Pokémon deleted successfully" });
        } catch (error: any) { // Tratando erro como 'any'
            res.status(500).json({ success: false, message: error.message });
        }
    }

    async updatePokemon(req: Request, res: Response): Promise<void> {
        try {
            res.json({ success: true, message: "Pokémon updated successfully" });
        } catch (error: any) { // Tratando erro como 'any'
            res.status(500).json({ success: false, message: error.message });
        }
    }
}
