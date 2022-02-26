import AppError from '@shared/errors/AppError';
import Registration, { IRegistration } from '../models/registration';

class ShowRegistrationService {
  public async execute(registration_id: string): Promise<IRegistration> {
    const registration = await Registration.findById(registration_id);

    if (!registration) {
      throw new AppError('Registration not found.');
    }

    return registration;
  }
}

export default ShowRegistrationService;
