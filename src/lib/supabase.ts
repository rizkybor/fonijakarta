import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://pmvajmcmcvxvmrjedcki.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBtdmFqbWNtY3Z4dm1yamVkY2tpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYyNTM2OTQsImV4cCI6MjA5MTgyOTY5NH0.ieaCCUxcYdeSHJXaGg-QnpP7DixD62psMng43h38_vk';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
