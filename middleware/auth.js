const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Usuario = require("../model/usuario");
const secret = '5D2jF9!aQbZcXeYg';

const authMiddleware = async (request, response, next) => {
    const { email, senha } = request.body;
  
    const usuario = await Usuario.findOne({
      where: {
        email,
      },
    });
  
    if (!usuario) {
      return response.status(404).json({
        error: "Usuário não encontrado",
      });
    }
  
    const validatedPassword = await bcrypt.compare(senha, usuario.senha);
    
    if (!validatedPassword) {
      return response.status(401).json({
        error: "Credenciais incorretas. Verifique a senha informada!",
      });
    }
  
    const payload = {
      email: usuario.email,
      role: usuario.role,
    };
  
    const token = jwt.sign(payload, secret, { expiresIn: "1h" });
    request.token = token;
  
    next();
};

module.exports = authMiddleware;