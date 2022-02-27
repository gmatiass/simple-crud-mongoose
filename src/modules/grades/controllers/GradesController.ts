import { Request, Response } from 'express';
import CreateGradeService from '../services/CreateGradeService';
import DeleteGradeService from '../services/DeleteGradeService';
import ListGradesService from '../services/ListGradesService';
import ShowGradesService from '../services/ShowGradesService';
import UpdateGradeService from '../services/UpdateGradeService';

export default class GradesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listGrades = new ListGradesService();

    const grades = await listGrades.execute();

    return response.json(grades);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { grade_id } = request.params;

    const showGrade = new ShowGradesService();

    const grade = await showGrade.execute(grade_id);

    return response.json(grade);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { registration_id, grade } = request.body;
    const createGrade = new CreateGradeService();

    const createdGrade = await createGrade.execute({
      registration_id,
      grade,
    });

    return response.json(createdGrade);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { grade_id } = request.params;
    const { registration_id, grade } = request.body;

    const updateGrade = new UpdateGradeService();

    const gradeUpdated = await updateGrade.execute(grade_id, {
      registration_id,
      grade,
    });

    return response.json(gradeUpdated);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { grade_id } = request.params;

    const deleteRegistration = new DeleteGradeService();

    await deleteRegistration.execute(grade_id);

    return response.send();
  }
}
