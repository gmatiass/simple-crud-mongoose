import { Router } from 'express';
import CourseController from '../controllers/CourseController';

const coursesRoutes = Router();
const coursesController = new CourseController();

coursesRoutes.get('/', coursesController.index);
coursesRoutes.post('/', coursesController.create);

export default coursesRoutes;
