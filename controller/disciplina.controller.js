const Disciplina = require("../model/disciplina");

const getAll = async (request, response) => {
  let {limit} = request.query;
  let disciplinasList = await Disciplina.findAll({ limit });

  response.json(disciplinasList);
};

const create = async (request, response) => {
  const disciplina = await Disciplina.create(request.body);

  response.status(201).json(disciplina);
};

const getOne = async (request, response) => {  
  const disciplina = await Disciplina.findByPk(request.params.id);
  if (!disciplina) return response.status(404).end("Disciplina não encontrada.");

  response.json(disciplina);
};

const updateOne = async (request, response) => {
  const filter = {
    where: { id: request.params.id },
    returning: true
  };
  const [disciplina, _] = await Disciplina.update(request.body, filter);
  if (!disciplina) return response.status(404).end("Disciplina não encontrada.");

  response.json(disciplina);
}

const deleteOne = async (request, response) => {
  const filter = { where: { id: request.params.id } };
  const countDeleted = await Disciplina.destroy(filter);
  if (countDeleted <= 0) return response.status(404).end("Disciplina não encontrada.");

  response.end("Disciplina removida com sucesso!");
};

module.exports = {
  getAll,
  create,
  getOne,
  updateOne,
  deleteOne
}