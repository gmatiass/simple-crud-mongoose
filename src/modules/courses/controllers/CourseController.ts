import { Request, Response } from 'express';
import CreateCourseService from '../services/CreateCourseService';
import ListCoursesService from '../services/ListCoursesService';

class CourseController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCourses = new ListCoursesService();

    const courses = await listCourses.execute();

    return response.json(courses);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { name, description, shift, places } = request.body;
    const createCourse = new CreateCourseService();

    const course = await createCourse.execute({
      name,
      description,
      shift,
      places,
    });

    return response.json(course);
  }
}

export default CourseController;
