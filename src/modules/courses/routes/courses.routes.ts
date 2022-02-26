import { Router } from 'express';
import CourseController from '../controllers/CourseController';

const coursesRouter = Router();
const coursesController = new CourseController();

coursesRouter.get('/', coursesController.index);
coursesRouter.get('/:course_id', coursesController.show);
coursesRouter.post('/', coursesController.create);
coursesRouter.put('/:course_id', coursesController.update);
coursesRouter.delete('/:course_id', coursesController.delete);

export default coursesRouter;
