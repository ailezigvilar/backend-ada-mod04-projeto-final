const express = require("express");
const database = require("./database/database");
const routes = require("./routes/app.routes");
const path = require("path");
const bodyParser = require('body-parser');

async function main() {
  await database.sync();

  const app = express();

  app.set('view engine', 'ejs');
  app.set('views', './views');
  app.use(express.static(path.join(__dirname, "public")));

  app.use(express.json());

  routes(app);

  const PORT = 3000;
  app.listen(PORT, () =>
    console.log(`Server running at http://localhost:${PORT}/`),
  );
}

main();