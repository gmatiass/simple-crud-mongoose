import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import RegistrationController from '../controllers/RegistrationController';

const registrationsRouter = Router();
const registrationController = new RegistrationController();

registrationsRouter.get('/', isAuthenticated, registrationController.index);
registrationsRouter.get('/:registration_id', registrationController.show);
registrationsRouter.post('/', registrationController.create);
registrationsRouter.put('/:registration_id', registrationController.update);
registrationsRouter.delete('/:registration_id', registrationController.delete);

export default registrationsRouter;
