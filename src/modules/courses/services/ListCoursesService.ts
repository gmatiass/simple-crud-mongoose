import Course, { ICourse } from '../models/course';

class ListCoursesService {
  public async execute(): Promise<ICourse[]> {
    const courses = await Course.find();

    return courses;
  }
}

export default ListCoursesService;
