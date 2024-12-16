const express = require("express");
const cors = require("cors");
//const rotaPokemon = require("./routes/pokemon");
import rotaPokemon from './routes/pokemon'

const app = express();

app.use(cors());
app.use(express.json());

app.use('/pokemon', rotaPokemon);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
