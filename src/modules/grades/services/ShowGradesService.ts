import AppError from '@shared/errors/AppError';
import Grade, { IGrade } from '../models/grade';

class ShowGradesService {
  public async execute(grade_id: string): Promise<IGrade> {
    const showGrade = await Grade.findById(grade_id).populate({
      path: 'registration_id',
      populate: ['student_id', 'course_id'],
    });

    if (!showGrade) {
      throw new AppError('Grade not found.');
    }

    return showGrade;
  }
}

export default ShowGradesService;
