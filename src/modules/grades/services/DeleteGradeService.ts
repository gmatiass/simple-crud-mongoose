import AppError from '@shared/errors/AppError';
import Grade from '../models/grade';

class DeleteGradeService {
  public async execute(grade_id: string): Promise<void> {
    const grade = await Grade.findById(grade_id);

    if (!grade) {
      throw new AppError('Grade not found.');
    }

    await grade.delete();
  }
}

export default DeleteGradeService;
