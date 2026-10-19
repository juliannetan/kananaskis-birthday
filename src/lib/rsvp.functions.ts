import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const emailSchema = z.string().trim().toLowerCase().email().max(255);

export const rsvpSchema = z.object({
  email: emailSchema,
  first_name: z.string().trim().min(1).max(100),
  last_name: z.string().trim().min(1).max(100),
  attending: z.boolean(),
  departure_works: z.boolean().nullable(),
  preferred_time: z.string().trim().max(200).nullable(),
});
export type RsvpInput = z.infer<typeof rsvpSchema>;

export const findRsvp = createServerFn({ method: "POST" })
  .inputValidator((i: { email: string }) => ({ email: emailSchema.parse(i.email) }))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { data: row, error } = await supabaseAdmin
      .from("rsvps")
      .select("email, first_name, last_name, attending, departure_works, preferred_time")
      .eq("email", data.email)
      .maybeSingle();
    if (error) throw new Error(error.message);
    return row;
  });

export const saveRsvp = createServerFn({ method: "POST" })
  .inputValidator((i: RsvpInput) => rsvpSchema.parse(i))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin
      .from("rsvps")
      .upsert({ ...data, updated_at: new Date().toISOString() }, { onConflict: "email" });
    if (error) throw new Error(error.message);
    return { ok: true };
  });
