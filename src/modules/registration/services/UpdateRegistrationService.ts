import AppError from '@shared/errors/AppError';
import Registration from '../models/registration';

class UpdateRegistrationService {
  public async execute(
    registration_id: string,
    course_id: string,
  ): Promise<void> {
    const registration = await Registration.findById(registration_id);
    if (!registration) {
      throw new AppError('Registration not found.');
    }

    registration.course_id = course_id;

    await registration.save();
  }
}

export default UpdateRegistrationService;
