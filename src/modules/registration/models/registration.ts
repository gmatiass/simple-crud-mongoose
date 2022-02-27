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
      required: true,
    },
    course_id: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

export default model<IRegistrationDocument>('Registration', RegistrationSchema);
