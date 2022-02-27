import AppError from '@shared/errors/AppError';
import { validatorHandler } from '@shared/utils/validatorHandler';
import Registration, { IRegistration } from '../models/registration';

class UpdateRegistrationService {
  public async execute(
    registration_id: string,
    course_id: string,
  ): Promise<IRegistration> {
    const registration = await Registration.findById(registration_id);
    if (!registration) {
      throw new AppError('Registration not found.');
    }

    registration.course_id = course_id;
    await registration.save().catch(err => {
      throw new AppError(
        'Validation failed.',
        400,
        validatorHandler(err.message),
      );
    });

    await registration.populate(['student_id', 'course_id']);

    return registration;
  }
}

export default UpdateRegistrationService;
