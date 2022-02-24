import AppError from '@shared/errors/AppError';
import Student from '../models/student';

interface IRequest {
  student_id: string;
  name: string;
  cpf: string;
  email: string;
}

class UpdateStudentService {
  public async execute({
    student_id,
    name,
    cpf,
    email,
  }: IRequest): Promise<void> {
    const studentExists = await Student.findById(student_id);

    if (!studentExists) {
      throw new AppError('Student not found.');
    }

    const emailExists = await Student.findOne({ email: email });

    if (emailExists && emailExists.id !== student_id) {
      throw new AppError('There is already one student with this email.');
    }

    const cpfExists = await Student.findOne({ cpf: cpf });

    if (cpfExists && cpfExists.id !== student_id) {
      throw new AppError('There is already one student with this cpf.');
    }

    await Student.updateOne({ _id: student_id }, { name, cpf, email });
  }
}

export default UpdateStudentService;
