import { z } from "zod";

// Honeypot: a hidden form field a real user never sees or fills. Bots that
// blindly fill every input will populate it; we silently drop those submissions
// server-side instead of paging a humans about a fake "send" failure.
export const HONEYPOT_FIELD = "website";

export const contactSchema = z.object({
  name: z.string().min(1, "Full name is required").max(120),
  email: z.string().email("Please enter a valid email address").max(254),
  company: z.string().max(200).optional(),
  serviceInterest: z.string().max(80).optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
