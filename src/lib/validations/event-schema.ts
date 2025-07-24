

import {z} from 'zod';
import { event } from './constatnts';

export const eventIdSchema = z.string().cuid();
const eventSlugSchema  = z.string().min(event.slug.min,{
    message : `event slug must have at least length of ${event.slug.min}`
})
.max(event.slug.max,{
    message : `event slug can't have length more then ${event.slug.max}`
})

export const eventPublicIdSchema = z.object({
    ownerId : z.string(),
    slug : eventSlugSchema
});


