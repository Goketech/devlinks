import { createClient } from '@supabase/supabase-js';

const URL = process.env.NEXT_PUBLIC_SUPABASE_URL as string;
const API_KEY = process.env.NEXT_PUBLIC_SUPABASE_API_KEY as string;

export const supabase = createClient(URL, API_KEY);
