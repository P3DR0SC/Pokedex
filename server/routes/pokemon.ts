const { Router } = require('express')
import { PokemonController } from '../controller/pokemonController';

const router = Router()
const pokemonController = new PokemonController()

router.get('/', pokemonController.getAllPokemon)

router.get('/:id', pokemonController.getByIdPokemon)

router.post('/cria', pokemonController.addPokemon)

router.put('/atualiza/:id', pokemonController.updatePokemon)

router.delete('/deleta/:id', pokemonController.deletePokemon)

export default router