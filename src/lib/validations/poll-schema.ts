import z from "zod";
import { poll } from "./constatnts";


export const pollIdSchema = z.string().cuid();

export const votePollOptionsSchema = z.object({
    pollId : pollIdSchema,
    optionIndex : z.number().min(0).max(poll.options.maxCount - 1)
});

export const getPollSchema = z.object({pollId : pollIdSchema});

export type VotePollOptionSchema = z.infer<typeof votePollOptionsSchema>;
export type GetPollSchema = z.infer<typeof getPollSchema>; 