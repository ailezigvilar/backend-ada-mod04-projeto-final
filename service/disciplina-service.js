const repository = require('../repository/disciplina-repository');

class DisciplinaService{

  async getAllDisciplinas(limit) {
    return await repository.getAllDisciplinas(limit);
  }

  async getDisciplinaById(id) {
    return await repository.getDisciplinaById(id);
  }

  async createDisciplina(data) {
    return await repository.createDisciplina(data);
  }

  async updateDisciplina(id, data) {
    const [disciplina, _] = await repository.updateDisciplina(id, data);
    return disciplina;
  }

  async deleteDisciplina(id) {
    const countDeleted = await repository.deleteDisciplina(id);
    return countDeleted > 0;
  }

}

module.exports = new DisciplinaService();