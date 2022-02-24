import coursesRoutes from '@modules/courses/routes/courses.routes';
import studentsRouter from '@modules/students/routes/students.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/courses', coursesRoutes);

export default routes;
