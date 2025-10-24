import z from "zod";

export const informationImageSchemaForm = z.object({
  image_url: z.union([
    z.string().min(1, "Image URL is required"),
    z.instanceof(File),
  ]),
  title: z.string().min(1, "Title is required"),
  status: z.string().min(1, "Status is required"),
});

export const informationImageSchema = z.object({
  image_url: z.union([z.string(), z.instanceof(File)]),
  title: z.string(),
  status: z.string(),
});

export type InformationImageForm = z.infer<typeof informationImageSchemaForm>;
export type InformationImage = z.infer<typeof informationImageSchema> & {
  id: string;
};
