"use client"

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import fetchProfile from '@/utils/fetchProfile';
import CustomButton from '@/components/CustomButton/CustomButton';
import fetchUserLinks from '@/utils/fetchUserLinks';
import { UserLink } from '@/types';

const ProfilePage = () => {
    const [profile, setProfile] = useState<any>(null);
    const [userLinks, setUserLinks] = useState<UserLink[]>([]); 
    const [showPopup, setShowPopup] = useState(false);
    const [userId, setUserId] = useState<string | null>(null);

    useEffect(() => {
        const user_id = localStorage.getItem('user_id');
        if (user_id) {
            setUserId(user_id);
            const fetchData = async () => {
                const profileData = await fetchProfile(user_id);
                setProfile(profileData);
                const linksData = await fetchUserLinks(user_id);
                setUserLinks(linksData);
                console.log(linksData)
            };
            fetchData();
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

    if (!profile) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='bg-white md:bg-[#633CFF] h-[357px] p-6 rounded-b-[32px]'>
                <div className='bg-white px-6 py-4 rounded-xl flex justify-between'>
                    <Link href="/">
                        <button className='py-3 px-6 border border-[#633CFF] text-base font-semibold text-[#633CFF] rounded-xl'>Back to Editor</button>
                    </Link>
                    <button onClick={handleShareLink} className='py-3 px-6 bg-[#633CFF] text-white text-base font-semibold rounded-xl'>Share Link</button>
                </div>
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
