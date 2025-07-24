import {z} from 'zod';
import { question } from './constatnts';
import { eventPublicIdSchema } from './event-schema';

export const questionIdSchema = z.string().cuid();

export const questionBodySchema = z.string()
.min(question.minLength,{
    message : `Question body must have at least ${question.minLength} characteres `
}).max(question.maxLength,{
    message : `Questioni body can't have more then ${question.maxLength} characters`
});

export const questionOrderBy = z.enum([
    "most-popular",
    "newest",
    "oldest"
]);

export const updateQuestionSchema = z.object({
    questionId : questionIdSchema,
    body : questionBodySchema.optional(),
    isResolved : z.boolean().optional(),
    isPinned : z.boolean().optional()
});
export const getQuestionSchema = z.object({
    questionId : questionIdSchema
})

export const createQuestionSchema = z.object({
    body : questionBodySchema
}).merge(eventPublicIdSchema);




export type CreateQuestionSchema = z.infer<typeof createQuestionSchema>;
export type UpdateQuestionSchema = z.infer<typeof updateQuestionSchema>;
export type GetQuestionSchema = z.infer<typeof getQuestionSchema>; 