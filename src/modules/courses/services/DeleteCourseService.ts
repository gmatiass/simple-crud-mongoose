import AppError from '@shared/errors/AppError';
import Course from '../models/course';

class DeleteCourseService {
  public async execute(course_id: string): Promise<void> {
    const course = await Course.findById(course_id);

    if (!course) {
      throw new AppError('Course not found.');
    }

    await course.delete();
  }
}

export default DeleteCourseService;
