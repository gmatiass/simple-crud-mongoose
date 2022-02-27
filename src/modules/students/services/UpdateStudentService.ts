import AppError from '@shared/errors/AppError';
import { validatorHandler } from '@shared/utils/validatorHandler';
import Student, { IStudent } from '../models/student';

class UpdateStudentService {
  public async execute(
    student_id: string,
    { name, cpf, email }: IStudent,
  ): Promise<IStudent> {
    const student = await Student.findById(student_id);

    if (!student) {
      throw new AppError('Student not found.');
    }

    const emailExists = await Student.findOne({ email: email });

    if (emailExists && emailExists._id !== student._id) {
      throw new AppError('There is already one student with this email.');
    }

    const cpfExists = await Student.findOne({ cpf: cpf });

    if (cpfExists && cpfExists._id !== student._id) {
      throw new AppError('There is already one student with this cpf.');
    }

    // await Student.updateOne({ _id: student_id }, { name, cpf, email });
    student.name = name;
    student.cpf = cpf;
    student.email = email;
    await student.save().catch(err => {
      throw new AppError(
        'Validation failed.',
        400,
        validatorHandler(err.message),
      );
    });

    return student;
  }
}

export default UpdateStudentService;
