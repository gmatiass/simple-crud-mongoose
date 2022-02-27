import { Router } from 'express';
import GradesController from '../controllers/GradesController';

const gradesRouter = Router();
const gradesController = new GradesController();

gradesRouter.get('/', gradesController.index);
gradesRouter.get('/:grade_id', gradesController.show);
gradesRouter.post('/', gradesController.create);
gradesRouter.put('/:grade_id', gradesController.update);
gradesRouter.delete('/:grade_id', gradesController.delete);

export default gradesRouter;
