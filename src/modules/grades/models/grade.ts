import { Schema, model, Document } from 'mongoose';

export interface IGrade {
  registration_id: string;
  grade: number;
}

interface IGradeDocument extends IGrade, Document {}

const GradeSchema = new Schema(
  {
    registration_id: {
      type: Schema.Types.ObjectId,
      ref: 'Registration',
      required: true,
    },
    grade: { type: Number, required: true },
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

export default model<IGradeDocument>('Grade', GradeSchema);
