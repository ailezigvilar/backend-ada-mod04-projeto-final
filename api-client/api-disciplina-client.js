const axios = require('axios');
const registros = require('./api-disciplina-client-post-requests.json');

const criarRegistro = async (registro) => {
    try {
      const response = await axios.post('http://localhost:3000/', registro, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
    } catch (error) {
      console.error('Erro ao criar registro:', error.message);
    }
  };
  
  registros.forEach(criarRegistro);

