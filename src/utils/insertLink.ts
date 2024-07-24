import { supabase } from "@/client";

const insertLink = async (userId: string, linkType: string, linkUrl: string) => {
    const { data, error } = await supabase
        .from('user_links')
        .insert([{ user_id: userId, platform: linkType, url: linkUrl }]);

    if (error) {
        console.error('Error inserting link:', error);
        alert(error.message)
    } else {
        // alert('Link inserted successfully');
    }
};

export default insertLink;
