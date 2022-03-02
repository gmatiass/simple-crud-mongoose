import AppError from '@shared/errors/AppError';
import { validatorHandler } from '@shared/utils/validatorHandler';
import Grade, { IGrade } from '../models/grade';

class UpdateGradeService {
  public async execute(
    grade_id: string,
    { registration_id, grade }: IGrade,
  ): Promise<IGrade> {
    const gradeUpdate = await Grade.findById(grade_id);

    if (!gradeUpdate) {
      throw new AppError('Grade not found.');
    }

    //gradeUpdate.registration_id = registration_id;
    gradeUpdate.grade = grade;
    await gradeUpdate.save().catch(err => {
      throw new AppError(
        'Validation failed.',
        400,
        validatorHandler(err.message),
      );
    });

    return gradeUpdate;
  }
}

export default UpdateGradeService;
