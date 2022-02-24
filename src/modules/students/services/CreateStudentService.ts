import AppError from '@shared/errors/AppError';
import Student, { IStudent } from '../models/student';

interface IRequest {
  name: string;
  cpf: string;
  email: string;
}

class CreateStudentService {
  public async execute({ name, cpf, email }: IRequest): Promise<IStudent> {
    const emailExists = await Student.findOne({ email: email });

    if (emailExists) {
      throw new AppError('Email adress already used.');
    }

    const cpfExists = await Student.findOne({ cpf: cpf });

    if (cpfExists) {
      throw new AppError('CPF already used.');
    }

    const student = await Student.create({ name, cpf, email });

    return student;
  }
}

export default CreateStudentService;
