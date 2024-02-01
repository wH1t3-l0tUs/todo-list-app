import { z } from 'zod';

export const todoSchema = z.object({
    id: z.string(),
    content: z.string(),
    status: z.boolean()
});
