const Routes = (app) => {

    app.get("/listaPokemon", (req, res) => {
        res.json({ 
            pokemon: ["charmander", "squirtle", "bulbasaur"] 
        });
    });

    app.put("/atualizaPokemon", (req, res) => {
        res.json({ success: true, message: "Pokemon atualizado com sucesso!" });
    });

    app.post("/criaPokemon", (req, res) => {
        res.json({ success: true, message: "Pokemon criado com sucesso!" });
    });

    app.delete("/deletaPokemon", (req, res) => {
        res.json({ success: true, message: "Pokemon deletado com sucesso!" });
    });
};
