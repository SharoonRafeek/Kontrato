import mongoose, { Schema, Document } from 'mongoose';

// Create an interface for the document
interface IFormData extends Document {
  projectTitle: string;
  projectName: string;
  agreement: string;
  clientName: string;
  clientAddress: string;
  clientPhone: string;
  clientEmail: string;
  agencyName: string;
  agencyAddress: string;
  agencyPhone: string;
  agencyEmail: string;
  paymentSchedule: string;
  paymentTimeline: string;
}

// Define the Mongoose schema
const formDataSchema: Schema<IFormData> = new Schema({
  projectTitle: {
    type: String,
    required: [true, 'Project Title is required'],
    minlength: [1, 'Project Title is required'],
  },
  projectName: {
    type: String,
    required: [true, 'Project Name is required'],
    minlength: [1, 'Project Name is required'],
  },
  agreement: {
    type: String,
    required: [true, 'Agreement is required'],
    minlength: [1, 'Agreement is required'],
  },
  clientName: {
    type: String,
    required: [true, 'Client Name is required'],
    minlength: [1, 'Client Name is required'],
  },
  clientAddress: {
    type: String,
    required: [true, 'Client Address is required'],
    minlength: [1, 'Client Address is required'],
  },
  clientPhone: {
    type: String,
    required: [true, 'Client Phone is required'],
    minlength: [1, 'Client Phone is required'],
  },
  clientEmail: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: (value: string) => {
        // You can use a regular expression or a library like validator.js to validate email
        // For simplicity, let's use a basic email format check
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email address',
    },
  },
  agencyName: {
    type: String,
    required: [true, 'Agency Name is required'],
    minlength: [1, 'Agency Name is required'],
  },
  agencyAddress: {
    type: String,
    required: [true, 'Agency Address is required'],
    minlength: [1, 'Agency Address is required'],
  },
  agencyPhone: {
    type: String,
    required: [true, 'Agency Phone is required'],
    minlength: [1, 'Agency Phone is required'],
  },
  agencyEmail: {
    type: String,
    required: [true, 'Email is required'],
    validate: {
      validator: (value: string) => {
        return /\S+@\S+\.\S+/.test(value);
      },
      message: 'Invalid email address',
    },
  },
  paymentSchedule: {
    type: String,
    required: [true, 'Payment Schedule is required'],
    minlength: [1, 'Payment Schedule is required'],
  },
  paymentTimeline: {
    type: String,
    required: [true, 'Payment Timeline is required'],
    minlength: [1, 'Payment Timeline is required'],
  },
  // Add more fields as needed
});

// Create a Mongoose model based on the schema
const Contract = mongoose.model<IFormData>('FormData', formDataSchema);

export default Contract;
