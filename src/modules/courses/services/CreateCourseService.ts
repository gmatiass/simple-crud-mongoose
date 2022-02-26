import AppError from '@shared/errors/AppError';
import { validatorHandler } from '@shared/utils/validatorHandler';
import Course, { ICourse } from '../models/course';

class CreateCourseService {
  public async execute({
    name,
    description,
    shift,
    places,
  }: ICourse): Promise<ICourse> {
    const course = await Course.create({
      name,
      description,
      shift,
      places,
    }).catch(err => {
      throw new AppError(
        'Validation failed.',
        400,
        validatorHandler(err.message),
      );
    });

    return course;
  }
}

export default CreateCourseService;
