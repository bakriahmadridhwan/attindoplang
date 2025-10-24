import z from "zod";

export const studentSchemaForm = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  identity_number: z.string().min(1, "Identity Number is required"),
  phone: z.string().min(1, "Phone is required"),
  address: z.string().min(1, "Address is required"),
  avatar_url: z.union([
    z.string().min(1, "Avatar URL is required"),
    z.instanceof(File),
  ]),
  origin_school: z.string().min(1, "Origin School is required"),
  school_now: z.string().min(1, "School Now is required"),
  companion: z.string().min(1, "Companion is required"),
  companion_nik: z.string().min(1, "Companion NIK is required"),
  kk: z.string().min(1, "KK is required"),
  companion_name: z.string().min(1, "Companion Name is required"),
  companion_phone: z.string().min(1, "Companion Phone is required"),
  companion_address: z.string().min(1, "Companion Address is required"),
  companion_work: z.string().min(1, "Companion Work is required"),
});

export const studentSchema = z.object({
  name: z.string(),
  email: z.string(),
  identity_number: z.string(),
  phone: z.string(),
  address: z.string(),
  avatar_url: z.union([z.string(), z.instanceof(File)]),
  origin_school: z.string(),
  school_now: z.string(),
  companion: z.string(),
  companion_nik: z.string(),
  kk: z.string(),
  companion_name: z.string(),
  companion_phone: z.string(),
  companion_address: z.string(),
  companion_work: z.string(),
});

export type StudentForm = z.infer<typeof studentSchemaForm>;
export type Student = z.infer<typeof studentSchema> & { id: string };
