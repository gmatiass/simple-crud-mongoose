import coursesRouter from '@modules/courses/routes/courses.routes';
import registrationsRouter from '@modules/registration/routes/registrations.routes';
import studentsRouter from '@modules/students/routes/students.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/courses', coursesRouter);
routes.use('/registrations', registrationsRouter);

export default routes;
