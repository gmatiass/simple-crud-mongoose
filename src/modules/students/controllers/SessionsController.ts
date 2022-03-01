import { Request, Response } from 'express';
import CreateSessionService from '../services/CreateSessionService';

export default class SessionsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, cpf } = request.body;

    const createSessionService = new CreateSessionService();

    const student = await createSessionService.execute({ email, cpf });

    return response.json(student);
  }
}
