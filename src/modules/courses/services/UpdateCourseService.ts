import AppError from '@shared/errors/AppError';
import { validatorHandler } from '@shared/utils/validatorHandler';
import Course, { ICourse } from '../models/course';

class UpdateCourseService {
  public async execute(
    course_id: string,
    { name, description, shift, places }: ICourse,
  ): Promise<ICourse> {
    const course = await Course.findById(course_id);

    if (!course) {
      throw new AppError('Course not found.');
    }

    course.name = name;
    course.description = description;
    course.shift = shift;
    course.places = places;

    await course.save().catch(err => {
      throw new AppError(
        'Validation failed.',
        400,
        validatorHandler(err.message),
      );
    });

    return course;
  }
}

export default UpdateCourseService;
