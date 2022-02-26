import { Schema, model, Document } from 'mongoose';

export interface IStudent {
  name: string;
  cpf: string;
  email: string;
}

interface IStudentDocument extends IStudent, Document {}

const StudentSchema = new Schema(
  {
    name: { type: String, required: true },
    cpf: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform: (_, ret): void => {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
  },
);

export default model<IStudentDocument>('Student', StudentSchema);
