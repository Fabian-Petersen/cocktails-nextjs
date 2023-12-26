import z from "zod";
// $ Use zod to validate the data coming from the API
// $ The data is in the same format as the API response
// $ The API example is from Pexels.com/api "curated images"

const BasicImageSchema = z.object({
  page: z.number(),
  per_page: z.number(),
  prev_page: z.string().optional(),
  next_page: z.string().optional(),
  total_results: z.number(),
});

// $ The API response for the images nested in the object
const ImageSchema = z.object({
  id: z.number(),
  width: z.number(),
  height: z.number(),
  url: z.string(),
  src: z.object({
    large: z.string(),
  }),
  alt: z.string(),
  blurredDataUrl: z.string().optional(),
});

// $ Extend the basic image schema with the photos array to have the same structure as the API response
export const ImagesSchemaWithPhotos = BasicImageSchema.extend({
  photos: z.array(ImageSchema),
});

// $ Infer image object from the schema to use it in the app as a type
export type Photo = z.infer<typeof ImageSchema>;

// $ Infer image object from the schema to use it in the app as a type
export type ImageResults = z.infer<typeof ImagesSchemaWithPhotos>;
