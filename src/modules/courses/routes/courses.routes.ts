import { Router } from 'express';
import CourseController from '../controllers/CourseController';

const coursesRoutes = Router();
const coursesController = new CourseController();

coursesRoutes.get('/', coursesController.index);
coursesRoutes.get('/:course_id', coursesController.show);
coursesRoutes.post('/', coursesController.create);
coursesRoutes.put('/:course_id', coursesController.update);
coursesRoutes.delete('/:course_id', coursesController.delete);

export default coursesRoutes;
