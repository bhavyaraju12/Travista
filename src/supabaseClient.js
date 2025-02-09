import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://gpwfhudyrtxxgtjpdfnm.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdwd2ZodWR5cnR4eGd0anBkZm5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkwMDkxNDUsImV4cCI6MjA1NDU4NTE0NX0.mP8tvDzgKsnDU2McIcYoEAiy0TnTKX8UzXUot7_wUAM"
export const supabase = createClient(supabaseUrl, supabaseKey)