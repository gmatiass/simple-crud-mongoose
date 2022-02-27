import Registration from '@modules/registration/models/registration';
import AppError from '@shared/errors/AppError';
import { validatorHandler } from '@shared/utils/validatorHandler';
import Grade, { IGrade } from '../models/grade';

class CreateGradeService {
  public async execute({ registration_id, grade }: IGrade): Promise<IGrade> {
    const registrationExists = Registration.findById(registration_id);

    if (!registrationExists) {
      throw new AppError('Registration not found.');
    }

    const createdGrade = await Grade.create({ registration_id, grade }).catch(
      err => {
        throw new AppError(
          'Validation failed.',
          400,
          validatorHandler(err.message),
        );
      },
    );

    await createdGrade.populate({
      path: 'registration_id',
      populate: ['student_id', 'course_id'],
    });

    return createdGrade;
  }
}

export default CreateGradeService;
