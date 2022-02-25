import { Request, Response } from 'express';
import CreateCourseService from '../services/CreateCourseService';
import DeleteCourseService from '../services/DeleteCourseService';
import ListCoursesService from '../services/ListCoursesService';
import ShowCourseService from '../services/ShowCourseService';
import UpdateCourseService from '../services/UpdateCourseService';

class CourseController {
  public async index(request: Request, response: Response): Promise<Response> {
    const listCourses = new ListCoursesService();

    const courses = await listCourses.execute();

    return response.json(courses);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;

    const showCourses = new ShowCourseService();

    const courses = await showCourses.execute(course_id);

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

  public async update(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;
    const { name, description, shift, places } = request.body;

    const updateCourse = new UpdateCourseService();
    await updateCourse.execute(course_id, { name, description, shift, places });

    return response.send();
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { course_id } = request.params;

    const deleteCourse = new DeleteCourseService();
    await deleteCourse.execute(course_id);

    return response.send();
  }
}

export default CourseController;
