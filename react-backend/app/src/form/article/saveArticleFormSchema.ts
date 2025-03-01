import { z } from 'zod';
import errors from 'src/constants/errors';

const share = {
  CategoryId:z.string().or(z.number()),
  author:z.string().optional(),
  authorInfo:z.string().optional(),
  slug: z.string().nonempty( { message: errors.NON_EMPTY }),
	title: z.string().nonempty( { message: errors.NON_EMPTY }),
	description: z.string().nonempty( { message: errors.NON_EMPTY }),
  publishedDate:  z.preprocess((arg) => {
  if (typeof arg == "string" || arg instanceof Date) return new Date(arg);
}, z.date()),
  publish:z.boolean().default(true)
};

export const createArticleFormSchema = z.object({
	...share,
})

export const updateArticleFormSchema = z.object({
	id: z.number().min(1, { message: errors.NON_EMPTY }),
	...share
});
