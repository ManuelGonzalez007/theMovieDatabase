const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")

app.use(cors())
app.use("/api/peliculas", require("./routes/rutas"));
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})


