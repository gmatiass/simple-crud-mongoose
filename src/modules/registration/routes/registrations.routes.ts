import isAuthenticated from '@shared/http/middlewares/isAuthenticated';
import { Router } from 'express';
import RegistrationController from '../controllers/RegistrationController';

const registrationsRouter = Router();
const registrationController = new RegistrationController();

registrationsRouter.get('/', isAuthenticated, registrationController.index);

registrationsRouter.get(
  '/:registration_id',
  isAuthenticated,
  registrationController.show,
);

registrationsRouter.post('/', isAuthenticated, registrationController.create);

registrationsRouter.put(
  '/:registration_id',
  isAuthenticated,
  registrationController.update,
);

registrationsRouter.delete(
  '/:registration_id',
  isAuthenticated,
  registrationController.delete,
);

export default registrationsRouter;
