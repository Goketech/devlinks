import { supabase } from "@/client"

const deleteLinks = async (linkId: number) => {
    const { data, error } = await supabase
        .from('user_links')
        .delete()
        .eq('id', linkId);
    if (error) {
        console.error('Error removing link:', error);
        return [];
    } else {
        return data;
    }
};

export default deleteLinks;