import AppError from '@shared/errors/AppError';
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
      throw new AppError(err.message);
    });

    return course;
  }
}

export default CreateCourseService;
