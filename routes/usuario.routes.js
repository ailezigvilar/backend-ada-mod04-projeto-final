const { Router } = require("express");
const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");
const authMiddleware = require("../middleware/auth");

const router = Router();

router.route("/")
    .get(async (_, response) => {
        const usuarios = await Usuario.findAll();

        return response.status(200).json(usuarios);
    })
    .post(async (request, response) => {
        const { email, senha, role } = request.body;

        const senhaCriptografada = await bcrypt.hash(senha, 10);
        const newUsuario = {
            email,
            senha: senhaCriptografada,
            role,
        };

        await Usuario.create(newUsuario);

        return response.status(201).json(newUsuario);
    });

router.post("/login", authMiddleware, async (request, response) => {
    return response.status(200).json({
        token: request.token,
    });
});

module.exports = router;