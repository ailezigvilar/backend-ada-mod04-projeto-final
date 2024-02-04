const path = require("path");
const upload = require("../utils/multerUpload");
const disciplinaRoutes = require("./disciplina.routes");
const usuarioRoutes = require("./usuario.routes");

function routes(app) {
  app.get("/home", (_, response) => {
    response.sendFile(path.resolve("public/home.html"));
  });


  app.get("/upload", (_, response) => {
    response.sendFile(path.resolve("public/upload.html"));
  });

  app.post("/upload", upload.single("file"), (request, response) => {
    console.log(request.file);

    response.end("Upload successful!");
  });

  app.use("/disciplinas", disciplinaRoutes);
  app.use("/usuarios", usuarioRoutes);
}

module.exports = routes;