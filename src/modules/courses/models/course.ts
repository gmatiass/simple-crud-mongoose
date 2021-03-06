import { Schema, model, Document } from 'mongoose';

export interface ICourse {
  name: string;
  description: string;
  shift: string;
  places: number;
}

interface ICourseDocument extends ICourse, Document {}

const CourseSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, maxlength: 100, required: true },
    shift: {
      type: String,
      enum: {
        values: ['morning', 'afternoon', 'night'],
        message: 'The shift is not supported.',
      },
      required: true,
    },
    places: { type: Number, required: true },
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

export default model<ICourseDocument>('Course', CourseSchema);
