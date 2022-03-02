import Registration from '@modules/registration/models/registration';
import AppError from '@shared/errors/AppError';
import Course from '../models/course';

class DeleteCourseService {
  public async execute(course_id: string): Promise<void> {
    const course = await Course.findById(course_id);

    if (!course) {
      throw new AppError('Course not found.');
    }

    const registrations = await Registration.find({ course_id: course.id });

    if (registrations.length != 0) {
      throw new AppError(
        'A course cannot be deleted with students enrolled in it.',
      );
    }

    await course.delete();
  }
}

export default DeleteCourseService;
