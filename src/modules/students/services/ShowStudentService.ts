import AppError from '@shared/errors/AppError';
import Student, { IStudent } from '../models/student';

class ShowStudentService {
  public async execute(student_id: string): Promise<IStudent> {
    const student = await Student.findById(student_id);

    if (!student) {
      throw new AppError('Student not found.');
    }

    return student;
  }
}

export default ShowStudentService;
