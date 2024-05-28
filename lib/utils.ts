import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export const formSchema = z.object({
	title: z
		.string()
		.min(2, { message: "Title must be at least 2 character" })
		.max(50),
	body: z
		.string()
		.min(2, { message: "Title must be at least 2 character" })
		.max(500),
});
