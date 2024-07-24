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
        console.log('User link deleted successfully:', data);
        return data;
    }
};

export default deleteLinks;