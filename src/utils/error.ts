import type { CustomError } from "../types/error";

const createError = (error: unknown): Error => new Error((error as CustomError).message);

export { createError };
