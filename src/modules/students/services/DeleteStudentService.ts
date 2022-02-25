import AppError from '@shared/errors/AppError';
import Student from '../models/student';

class DeleteStudentService {
  public async execute(student_id: string): Promise<void> {
    const student = await Student.findById(student_id);

    if (!student) {
      throw new AppError('Student not found.');
    }

    await Student.findByIdAndDelete({ _id: student_id });
  }
}

export default DeleteStudentService;
