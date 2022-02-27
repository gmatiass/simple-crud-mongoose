import AppError from '@shared/errors/AppError';
import { validatorHandler } from '@shared/utils/validatorHandler';
import Student, { IStudent } from '../models/student';

class CreateStudentService {
  public async execute({ name, cpf, email }: IStudent): Promise<IStudent> {
    const emailExists = await Student.findOne({ email: email });

    if (emailExists) {
      throw new AppError('Email adress already used.');
    }

    const cpfExists = await Student.findOne({ cpf: cpf });

    if (cpfExists) {
      throw new AppError('CPF already used.');
    }

    const student = await Student.create({ name, cpf, email }).catch(err => {
      throw new AppError(
        'Validation failed.',
        400,
        validatorHandler(err.message),
      );
    });

    return student;
  }
}

export default CreateStudentService;
