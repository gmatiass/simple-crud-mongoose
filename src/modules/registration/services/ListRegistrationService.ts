import Registration, { IRegistration } from '../models/registration';

class ListRegistrationService {
  public async execute(): Promise<IRegistration[]> {
    const listRegistrations = await Registration.find().populate([
      'student_id',
      'course_id',
    ]);

    return listRegistrations;
  }
}

export default ListRegistrationService;
