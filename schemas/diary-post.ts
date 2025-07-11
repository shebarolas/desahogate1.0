import {z} from 'zod';

export const diarySchema = z.object({
    content: z.string().min(1, {message: 'No puede quedar vacio el diario corazon'}),
    title: z.string().min(1, {message: 'No puede quedar vacio el titulo corazon'}),
});

export type DiarySchemaType = z.infer<typeof diarySchema>;