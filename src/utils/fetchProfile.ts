import { supabase } from "@/client"

const fetchProfile = async (user_id: string) => {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user_id)
        .single();
    if (error) {
        console.error('Error fetching profile:', error);
        return {};
    } else {
        return data;
    }
};

export default fetchProfile;