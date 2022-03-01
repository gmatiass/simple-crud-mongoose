import AppError from '@shared/errors/AppError';
import { Secret, sign } from 'jsonwebtoken';
import authConfig from '@config/auth';
import Student, { IStudent } from '../models/student';

interface ISession {
  cpf: string;
  email: string;
}

interface IResponse {
  student: IStudent;
  token: string;
}

class CreateSessionService {
  public async execute({ email, cpf }: ISession): Promise<IResponse> {
    const student = await Student.findOne({ email: email });

    if (!student) {
      throw new AppError('Incorrect email/password.', 401);
    }

    if (student.cpf !== cpf) {
      throw new AppError('Incorrect email/password.', 401);
    }

    const token = sign({}, authConfig.jwt.secret as Secret, {
      subject: student.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return { student, token };
  }
}

export default CreateSessionService;
