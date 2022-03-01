import coursesRouter from '@modules/courses/routes/courses.routes';
import gradesRouter from '@modules/grades/routes/grades.routes';
import registrationsRouter from '@modules/registration/routes/registrations.routes';
import sessionsRouter from '@modules/students/routes/sessions.routes';
import studentsRouter from '@modules/students/routes/students.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/students', studentsRouter);
routes.use('/courses', coursesRouter);
routes.use('/registrations', registrationsRouter);
routes.use('/grades', gradesRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
