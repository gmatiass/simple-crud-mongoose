import { Schema, model, Document } from 'mongoose';

export interface IStudent extends Document {
  name: string;
  cpf: string;
  email: string;
}

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
      },
    },
  },
);

export default model<IStudent>('Student', StudentSchema);
