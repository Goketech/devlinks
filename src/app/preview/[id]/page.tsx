"use client"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import fetchProfile from "@/utils/fetchProfile";
import fetchUserLinks from "@/utils/fetchUserLinks";
import CustomButton from '@/components/CustomButton/CustomButton';
import { UserLink } from '@/types';

interface Profile {
    first_name: string;
    last_name: string;
    email: string;
    image: string;
}


const ProfilePage = ({ params: { id } }: { params: { id: string } }) => {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [userLinks, setUserLinks] = useState<UserLink[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const user_id = id;
        if (user_id) {
            setUserId(user_id);
            const fetchData = async () => {
                try {
                    const profileData = await fetchProfile(user_id);
                    const linksData = await fetchUserLinks(user_id);
                    setProfile(profileData);
                    setUserLinks(linksData);
                } catch (err) {
                    setError(true);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        } else {
            setLoading(false);
            setError(true);
        }
    }, []);

    const handleShareLink = () => {
        if (userId) {
            const link = `${window.location.origin}/preview/${userId}`;
            navigator.clipboard.writeText(link).then(() => {
                setShowPopup(true);
                setTimeout(() => {
                    setShowPopup(false);
                }, 3000);
            });
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error || !profile) {
        return <div>No data found for this user</div>;
    }

    return (
        <div>
            <div className='bg-white md:bg-[#633CFF] h-[357px] p-6 rounded-b-[32px]'>
                <div className="flex items-center justify-center mt-28">
                    <div className="bg-white py-12 px-14 w-[349px] justify-center rounded-3xl md:shadow-xl">
                        <div className='flex flex-col items-center'>
                            <div className='flex items-center'>
                                <Image className="rounded-full" src={profile.image || '/started-image.png'} alt='user-profile' width={104} height={104} />
                            </div>
                            <h2>{`${profile.first_name} ${profile.last_name}`}</h2>
                            <p>{profile.email}</p>
                        </div>
                        <div>
                            <div className='w-full flex flex-col mt-5 gap-5'>
                            {userLinks.map((link, index) => (
                                <CustomButton key={index} variant={link.platform} url={link.url} />
                            ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showPopup && (
                <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-[#333333] text-white py-3 px-6 rounded-xl flex items-center">
                    <Image
                        src="/link.svg"
                        alt="link"
                        width={20}
                        height={20}
                        className="mr-2"
                    />
                    <span>The link has been copied to your clipboard!</span>
                </div>
            )}
        </div>

    );
};

export default ProfilePage;