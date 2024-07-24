import { supabase } from "@/client";

const insertLink = async (userId: string, linkType: string, linkUrl: string) => {
    const { data, error } = await supabase
        .from('user_links')
        .insert([{ user_id: userId, link_type: linkType, link_url: linkUrl }]);

    if (error) {
        console.error('Error inserting link:', error);
    } else {
        console.log('Link inserted successfully:', data);
    }
};

export default insertLink;
