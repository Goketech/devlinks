import { supabase } from "@/client";

const updateProfile = async (user_id: string, email: string, image: string | null, firstName: string, lastName: string) => {
    const { error } = await supabase
        .from('profiles')
        .upsert({
            id: user_id,
            email: email,
            image: image || '',
            first_name: firstName,
            last_name: lastName,
        });

    if (error) {
        console.error('Error updating profile:', error);
        alert(error.message);
    }
};

export default updateProfile;
