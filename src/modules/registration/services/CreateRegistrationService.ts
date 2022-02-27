import Student from '@modules/students/models/student';
import Course from '@modules/courses/models/course';
import AppError from '@shared/errors/AppError';
import Registration, { IRegistration } from '../models/registration';
import { validatorHandler } from '@shared/utils/validatorHandler';

class CreateRegistrationService {
  public async execute({
    student_id,
    course_id,
  }: IRegistration): Promise<IRegistration> {
    const studentExists = await Student.findById(student_id);

    if (!studentExists) {
      throw new AppError('Student not found.');
    }

    const courseExists = await Course.findById(course_id);

    if (!courseExists) {
      throw new AppError('Course not found.');
    }

    const studentRegistrations = await Registration.find({
      student_id,
    }).populate(['student_id', 'course_id']);

    if (studentRegistrations.length == 3) {
      throw new AppError('The student has no available shift.');
    }

    studentRegistrations.forEach(reg => {
      if (reg.get('course_id').get('shift') === courseExists.shift) {
        throw new AppError('The student does not have this shift available.');
      }
    });

    const courseRegistrations = await Registration.find({ course_id });

    if (courseRegistrations.length === courseExists.places) {
      throw new AppError('The course has no place available.');
    }

    const registration = await Registration.create({
      student_id,
      course_id,
    }).catch(err => {
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

export default CreateRegistrationService;
