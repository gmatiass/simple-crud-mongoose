import AppError from '@shared/errors/AppError';
import Course, { ICourse } from '../models/course';

interface IRequest {
  name: string;
  description: string;
  shift: string;
  places: number;
}

class CreateCourseService {
  public async execute({
    name,
    description,
    shift,
    places,
  }: IRequest): Promise<ICourse> {
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
