const axios = require('axios');
const fs = require('fs');
const headers = require('./api-furg-client-headers.json');

const originalConsoleLog = console.log;

console.log = function (...args) {
  const formattedArgs = args.map(arg => JSON.stringify(arg, null, 2));
  originalConsoleLog.apply(console, formattedArgs);
};

const listaDeCodigos = ['23163', '23084', '01252', '23164', '23152',
                        '23104', '23085', '23096', '23088', '23057',
                        '23012', '01283', '23090', '23089', '23103',
                        '23175', '23098', '23097', '23058', '23045'];

const listaDisciplinas = [];

const url = 'https://api.furg.br/siagrad/Publico/getDisciplinaQsl';

const obterDadosApiFurg = async (codigo) => {
  const data = {
    cd_disciplina: codigo,
    id_qsl: 336,
    nr_matricula: ""
  };

  try{
    const response = await axios.post(url, data, { headers });
    
    const disciplinaMapeada = {
      nome: response.data.res.nm_disciplina,
      ementa: tratarEmenta(response.data.res.tx_ementa),
      numeroCreditos: parseInt(response.data.res.nr_creditos),
      cargaHorariaTotal: parseInt(response.data.res.ch_total),
      tipo: mapearPeriodoParaTipoPeriodo(response.data.res.ds_tipo_periodo),
      unidadeAcademica: response.data.res.nm_unidade,
    };

    return disciplinaMapeada;

  } catch (error) {
    console.error('Erro na chamada assíncrona:', error.message);
    throw error;
  }
};

const executarAsyncCallsArmazenandoRespostaEmLista = async () => {
  for (let codigo of listaDeCodigos) {
    const disciplina = await obterDadosApiFurg(codigo);
    listaDisciplinas.push(disciplina);
  }

  return listaDisciplinas;
};

const escreverResultadoEmArquivo = (caminhoArquivo, dados) => {
  try {
    const dadosJson = JSON.stringify(dados, null, 2);
    fs.writeFileSync(caminhoArquivo, dadosJson);
    console.log(`Resultado foi escrito em "${caminhoArquivo}".`);
  } catch (error) {
    console.error('Erro ao escrever o arquivo JSON:', error.message);
  }
};

function mapearPeriodoParaTipoPeriodo(tipoPeriodo){
    return tipoPeriodo.toUpperCase() === "ANO"? "Anual": "Semestral";
}

function tratarEmenta(ementa){
    return ementa??='Ainda não foi informada ementa para esta disciplina.';
}

executarAsyncCallsArmazenandoRespostaEmLista().then((resultado) =>{
  escreverResultadoEmArquivo('api-disciplina-client-post-requests.json', resultado);
});