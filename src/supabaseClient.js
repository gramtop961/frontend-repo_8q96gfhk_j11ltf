import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || import.meta.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create a singleton client. If env vars are missing, throw a clear error at runtime
if (!supabaseUrl || !supabaseAnonKey) {
  // Do not throw during build; only warn. Operations will fail gracefully in UI.
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars are missing. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY (or NEXT_PUBLIC_ equivalents).');
}

export const supabase = createClient(supabaseUrl || 'https://placeholder.supabase.co', supabaseAnonKey || 'anon-key');
