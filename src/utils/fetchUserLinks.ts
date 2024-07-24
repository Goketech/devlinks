import { supabase } from "@/client"

const fetchUserLinks = async (userId: string) => {
    const { data, error } = await supabase
        .from('user_links')
        .select('*')
        .eq('user_id', userId);

    if (error) {
        console.error('Error fetching user links:', error);
        return [];
    } else {
        console.log('User links fetched successfully:', data);
        return data;
    }
};

export default fetchUserLinks;