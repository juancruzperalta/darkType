// supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://imiosotgjkovkqrckmhp.supabase.co";
const supabaseAnonKey = `${import.meta.env.PUBLIC_SUPABASE_ANON_KEY}`;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
