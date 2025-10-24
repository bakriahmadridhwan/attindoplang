import z from "zod";

export const alumniSchemaForm = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  phone: z.string().min(1, "Phone is required"),
  origin_address: z.string().min(1, "Origin Address is required"),
  current_address: z.string().min(1, "Current Address is required"),
  work: z.string().min(1, "Work is required"),
  graduate: z.string().min(1, "Graduate is required"),
});

export const alumniSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  origin_address: z.string(),
  current_address: z.string(),
  work: z.string(),
  graduate: z.string(),
});

export type AlumniForm = z.infer<typeof alumniSchemaForm>;
export type Alumni = z.infer<typeof alumniSchema> & { id: string };
