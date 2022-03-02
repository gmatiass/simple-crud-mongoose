import Grade from '@modules/grades/models/grade';
import registration from '@modules/registration/models/registration';
import AppError from '@shared/errors/AppError';
import Student from '../models/student';

class DeleteStudentService {
  public async execute(student_id: string): Promise<void> {
    const student = await Student.findById(student_id);

    if (!student) {
      throw new AppError('Student not found.');
    }

    const registrations = await registration.find({
      student_id: student.id,
    });

    if (registrations) {
      while (registrations.length != 0) {
        const reg = registrations.shift();

        const grade = await Grade.findOne({ registration_id: reg?.id });

        if (grade) {
          throw new AppError(
            'A student cannot be excluded with grades attached to him.',
          );
        }
      }
    }

    // await Student.findByIdAndDelete({ _id: student_id });
    await student.delete();
  }
}

export default DeleteStudentService;
