import { Schema, model, Document } from 'mongoose';

export interface IRegistration {
  student_id: string;
  course_id: string;
}

interface IRegistrationDocument extends IRegistration, Document {}

const RegistrationSchema = new Schema(
  {
    student_id: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
    course_id: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.student_id;
        delete ret.course_id;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

RegistrationSchema.virtual('student', {
  ref: 'Student',
  localField: 'student_id',
  foreignField: '_id',
  justOne: true,
});

RegistrationSchema.virtual('course', {
  ref: 'Course',
  localField: 'course_id',
  foreignField: '_id',
  justOne: true,
});

export default model<IRegistrationDocument>('Registration', RegistrationSchema);
