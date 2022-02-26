import { Request, Response } from 'express';
import CreateRegistrationService from '../services/CreateRegistrationService';
import DeleteRegistrationService from '../services/DeleteRegistrationService';
import ListRegistrationService from '../services/ListRegistrationService';
import ShowRegistrationService from '../services/ShowRegistrationService';
import UpdateRegistrationService from '../services/UpdateRegistrationService';

export default class RegistrationController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listRegistrations = new ListRegistrationService();

    const registrations = await listRegistrations.execute();

    return response.json(registrations);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { registration_id } = request.params;

    const showRegistration = new ShowRegistrationService();

    const registration = await showRegistration.execute(registration_id);

    return response.json(registration);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { student_id, course_id } = request.body;
    const createRegistration = new CreateRegistrationService();

    const registration = await createRegistration.execute({
      student_id,
      course_id,
    });

    return response.json(registration);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { registration_id } = request.params;
    const { course_id } = request.body;

    const updateRegistration = new UpdateRegistrationService();

    await updateRegistration.execute(registration_id, course_id);

    return response.send();
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { registration_id } = request.params;

    const deleteRegistration = new DeleteRegistrationService();

    await deleteRegistration.execute(registration_id);

    return response.send();
  }
}
