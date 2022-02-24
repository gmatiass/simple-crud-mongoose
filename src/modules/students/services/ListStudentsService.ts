import Student, { IStudent } from '../models/student';

class ListStudentService {
  public async execute(): Promise<IStudent[]> {
    const students = await Student.find();

    return students;
  }
}

export default ListStudentService;
