import AppError from '@shared/errors/AppError';
import { validatorHandler } from '@shared/utils/validatorHandler';
import Student, { IStudent } from '../models/student';

class CreateStudentService {
  public async execute({ name, cpf, email }: IStudent): Promise<IStudent> {
    const emailLower = email.toLowerCase();
    const emailExists = await Student.findOne({ email: emailLower });

    if (emailExists) {
      throw new AppError('Email adress already used.');
    }

    const cpfExists = await Student.findOne({ cpf: cpf });

    if (cpfExists) {
      throw new AppError('CPF already used.');
    }

    const student = await Student.create({ name, cpf, emailLower }).catch(
      err => {
        throw new AppError(
          'Validation failed.',
          400,
          validatorHandler(err.message),
        );
      },
    );

    return student;
  }
}

export default CreateStudentService;
