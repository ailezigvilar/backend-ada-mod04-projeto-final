const jwt = require("jsonwebtoken");
const secret = '5D2jF9!aQbZcXeYg';

const validateToken = async (request, response, next) => {
    const token = request.headers.authorization?.split(" ")[1];
  
    if (!token) {
      return response.status(401).json({
        error: "You need to pass a token",
      });
    }
  
    try {
      const decoded = jwt.verify(token, secret);
      request.userDecoded = decoded;
      
      next();
    } catch (error) {
      return response.status(401).json({ error: "Erro ao validar token!" });
    }
};

module.exports = validateToken;