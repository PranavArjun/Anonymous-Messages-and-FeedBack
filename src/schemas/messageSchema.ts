import {z} from "zod";

export const messageSchem = z.object({
    content : z
    .string()
    .min(10,{message : "Conctent must be at least of 10 characters"})
    .max(300,{message : "Conctent must be no longer than at 300 characters"})
})