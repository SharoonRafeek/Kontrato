import { z } from 'zod'

export const FormDataSchema = z.object({
  projectTitle: z.string().min(1, 'Project Title is required'),
  projectName: z.string().min(1, 'Project Name is required'),
  agreement: z.string().min(1, 'Agreement is required'),
  clientName: z.string().min(1, 'Client Name is required'),
  clientAddress: z.string().min(1, 'Client Address is required'),
  clientPhone: z.string().min(1, 'Client Phone is required'),
  clientEmail: z.string().min(1, 'Email is required').email('Invalid email address'),
  agencyName: z.string().min(1, 'Agency Name is required'),
  agencyAddress: z.string().min(1, 'Agency Address is required'),
  agencyPhone: z.string().min(1, 'Agency Phone is required'),
  agencyEmail: z.string().min(1, 'Email is required').email('Invalid email address'),
  paymentSchedule: z.string().min(1, 'Payment Schedule is required'),
  paymentTimeline: z.string().min(1, 'Payment Timeline is required'),
})