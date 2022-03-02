import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import GradesController from '../controllers/GradesController';

const gradesRouter = Router();
const gradesController = new GradesController();

gradesRouter.get('/', isAuthenticated, gradesController.index);

gradesRouter.get('/:grade_id', isAuthenticated, gradesController.show);

gradesRouter.post('/', isAuthenticated, gradesController.create);

gradesRouter.put('/:grade_id', isAuthenticated, gradesController.update);

gradesRouter.delete('/:grade_id', isAuthenticated, gradesController.delete);

export default gradesRouter;
