import AppError from '@shared/errors/AppError';
import Student from '../models/student';

interface IRequest {
  student_id: string;
}

class DeleteStudentService {
  public async execute({ student_id }: IRequest): Promise<void> {
    const student = Student.findById(student_id);

    if (!student) {
      throw new AppError('Student not found.');
    }

    await Student.findByIdAndDelete({ _id: student_id });
  }
}

export default DeleteStudentService;
