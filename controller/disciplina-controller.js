const service = require('../service/disciplina-service');

class DisciplinaController{

  
  async getAllDisciplinas(request, response) {
    let { limit } = request.query;
    let disciplinasList = await service.getAllDisciplinas(limit);
    response.json(disciplinasList);
  }

  async getDisciplinaById(request, response) {
    const disciplina = await service.getDisciplinaById(request.params.id);
    if (!disciplina) return response.status(404).end("Disciplina não encontrada.");
    
    response.json(disciplina);
  }

  async createDisciplina(request, response) {
    const disciplina = await service.createDisciplina(request.body);
    response.status(201).json(disciplina);
  }

  async updateDisciplina(request, response) {
    const disciplina = await service.updateDisciplina(request.params.id);
    if (!disciplina) return response.status(404).end("Disciplina não encontrada.");
    
    response.end("Disciplina atualizada com sucesso!");
  }

  async deleteDisciplina(request, response) {
    const success = await service.deleteDisciplina(request.params.id);
    if (!success) return response.status(404).end("Disciplina não encontrada.");
    
    response.end("Disciplina removida com sucesso!");
  }

}
module.exports = new DisciplinaController();