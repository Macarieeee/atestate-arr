import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL?.trim();
const key = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY?.trim();

// Initialize only when configured, so the existing app also works without Supabase.
export const supabase = url && key ? createClient(url, key) : null;

export function getSupabase() {
  if (!supabase) {
    throw new Error(
      "Completează VITE_SUPABASE_URL și VITE_SUPABASE_PUBLISHABLE_KEY în .env.local și repornește Vite.",
    );
  }

  return supabase;
}
