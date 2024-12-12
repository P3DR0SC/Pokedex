const express = require("express");
const cors = require("cors");
const Routes = require("./routes/routes.ts"); 

const app = express();

app.use(cors());

app.use(express.json());

app.use("/", Routes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
