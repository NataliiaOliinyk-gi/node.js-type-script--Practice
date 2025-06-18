import * as Yup from "yup";

import { emailSchema, passwordSchema } from "./users.schema.js";

export const loginSchema = Yup.object({
    email: emailSchema,
    password: passwordSchema,
});