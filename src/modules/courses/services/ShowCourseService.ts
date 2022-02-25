import AppError from '@shared/errors/AppError';
import Course, { ICourse } from '../models/course';

class ShowCourseService {
  public async execute(course_id: string): Promise<ICourse> {
    const course = await Course.findById(course_id);

    if (!course) {
      throw new AppError('Course not found.');
    }

    return course;
  }
}

export default ShowCourseService;
