import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ognlchoufgexkyzipeva.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9nbmxjaG91ZmdleGt5emlwZXZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyODY3MjcsImV4cCI6MjA2ODg2MjcyN30.mY-QMKEWTbAk80YXxLJb9ToiWckmcoXurdYB_Ps_U2Q'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
