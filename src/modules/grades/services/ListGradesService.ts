import Grade, { IGrade } from '../models/grade';

class ListGradesService {
  public async execute(): Promise<IGrade[]> {
    const grades = await Grade.find().populate({
      path: 'registration_id',
      populate: ['student_id', 'course_id'],
    });

    return grades;
  }
}

export default ListGradesService;
