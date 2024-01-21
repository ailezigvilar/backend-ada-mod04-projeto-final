const Disciplina = require('../entity/Disciplina')

class DisciplinaRepository{
  async getAllDisciplinas(limit) {
    return await Disciplina.findAll({ limit });
  }

  async getDisciplinaById(id) {
    return await Disciplina.findByPk(id);
  }

  async createDisciplina(data) {
    return await Disciplina.create(data);
  }

  async updateDisciplina(id, data) {
    const filter = { where: { id }, returning: true };
    return await Disciplina.update(data, filter);
  }

  async deleteDisciplina(id) {
    const filter = { where: { id } };
    return await Disciplina.destroy(filter);
  }
}

module.exports = new DisciplinaRepository();