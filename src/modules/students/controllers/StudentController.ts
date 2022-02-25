import { Request, Response } from 'express';
import CreateStudentService from '../services/CreateStudentService';
import DeleteStudentService from '../services/DeleteStudentService';
import ListStudentService from '../services/ListStudentsService';
import ShowStudentService from '../services/ShowStudentService';
import UpdateStudentService from '../services/UpdateStudentService';

export default class StudentController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listStudents = new ListStudentService();

    const students = await listStudents.execute();

    return response.json(students);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { student_id } = request.params;
    const showStudent = new ShowStudentService();

    const student = await showStudent.execute(student_id);

    return response.json(student);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, cpf, email } = request.body;

    const createStudent = new CreateStudentService();

    const student = await createStudent.execute({ name, cpf, email });

    return response.json(student);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { student_id } = request.params;
    const { name, cpf, email } = request.body;

    const updateStudent = new UpdateStudentService();

    await updateStudent.execute(student_id, { name, cpf, email });

    return response.send();
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { student_id } = request.params;

    const deleteStudent = new DeleteStudentService();

    await deleteStudent.execute(student_id);

    return response.send();
  }
}
