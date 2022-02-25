import { Router } from 'express';
import StudentController from '../controllers/StudentController';

const studentsRouter = Router();
const studentsController = new StudentController();

studentsRouter.get('/', studentsController.index);
studentsRouter.get('/:student_id', studentsController.show);
studentsRouter.post('/', studentsController.create);
studentsRouter.put('/:student_id', studentsController.update);
studentsRouter.delete('/:student_id', studentsController.delete);

export default studentsRouter;
