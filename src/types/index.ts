import {z} from "zod";
import {todoSchema} from "@/schemas/TodoSchema.ts";
export type Todo = z.infer<typeof todoSchema>;
