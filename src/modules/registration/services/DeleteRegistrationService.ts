import AppError from '@shared/errors/AppError';
import Registration from '../models/registration';

class DeleteRegistrationService {
  public async execute(registration_id: string): Promise<void> {
    const registration = await Registration.findById(registration_id);

    if (!registration) {
      throw new AppError('Registration not found.');
    }

    await Registration.findByIdAndDelete({ _id: registration_id });
  }
}

export default DeleteRegistrationService;
