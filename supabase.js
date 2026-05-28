const { createClient } = supabase;

const SUPABASE_URL = 'https://nzknbxijgfwrevjnkkrt.supabase.co';

const SUPABASE_KEY = 'sb_publishable_wokxfC6LdHQ730feDu1eJw_DM1zOcw_';

const supabaseClient = createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);