'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import fetchProfile from '@/utils/fetchProfile';
import updateProfile from '@/utils/updateProfile';

const Profile = () => {
    const router = useRouter();
    const [image, setImage] = useState<string | null>(null);
    const [firstName, setFirstName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [formHasErrors, setFormHasErrors] = useState<boolean>(true);

    useEffect(() => {
        const fetchUserData = async () => {
            const user_id = localStorage.getItem('user_id');
            if (user_id) {
                const data = await fetchProfile(user_id);
                setFirstName(data.first_name);
                setLastName(data.last_name);
                setEmail(data.email);
                setImage(data.image);
            } else {
                router.push('/login');
            }
        };

        fetchUserData();
    }, []);

    const validateForm = () => {
        let isValid = true;
        const newErrors: { [key: string]: string } = {};

        if (!firstName.trim()) {
            newErrors.firstName = "Can't be empty";
            isValid = false;
        }

        if (!lastName.trim()) {
            newErrors.lastName = "Can't be empty";
            isValid = false;
        }

        if (email && !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Invalid email address';
            isValid = false;
        }

        setErrors(newErrors);
        setFormHasErrors(!isValid);
    };

    const handleSave = async (event: React.FormEvent) => {
        event.preventDefault();

        validateForm();
        if (formHasErrors) return;
        const user_id = localStorage.getItem('user_id');
        if (!user_id) {
            console.error('User ID not found');
            router.push('/login');
            return;
        }

        await updateProfile(user_id, email, image, firstName, lastName);
        alert('Profile saved successfully');
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="p-10 ">
            <div className="mr-10 max-w-[808px] mb-5 w-full">
                <h2 className="text-3xl text-[#333333] font-bold mt-10">
                    Profile Details
                </h2>
                <p className="text-base text-[#737373] mt-2">
                    Add your details to create a personal touch to your profile.
                </p>
            </div>
            <form onSubmit={handleSave} className="mt-12">
                <div className="flex flex-col gap-4 md:gap-0 md:flex-row mb-6 max-w-[728px]">
                    <label
                        className="min-w-[210px] text-base text-[#737373]"
                        htmlFor="profileImage"
                    >
                        Profile Picture
                    </label>
                    <div className="flex flex-col md:flex-row gap-6 md:items-center">
                        <div className="relative w-52 h-52 overflow-hidden">
                            <input
                                type="file"
                                id="file"
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                onChange={handleFileChange}
                            />
                            <label
                                htmlFor="file"
                                className={`flex flex-col items-center justify-center w-full h-full rounded-xl cursor-pointer
          ${image
                                        ? 'bg-cover bg-center text-white'
                                        : 'bg-[#EFEBFF] text-[#633CFF]'
                                    }`}
                                style={{
                                    backgroundImage: image ? `url(${image})` : 'none',
                                    backgroundBlendMode: 'multiply',
                                }}
                            >
                                <div className="relative z-10 flex flex-col items-center justify-center">
                                    {!image ? (
                                        <>
                                            <Image
                                                width={40}
                                                height={40}
                                                src="/image-card-purple.svg"
                                                className="text-2xl mb-2"
                                            />
                                            <span className="font-bold">+ Upload Image</span>
                                        </>
                                    ) : (
                                        <>
                                            <Image
                                                width={40}
                                                height={40}
                                                src="/image-card-white.svg"
                                                className="text-2xl mb-2"
                                            />
                                            <span className="font-bold">Change Image</span>
                                        </>
                                    )}
                                </div>
                            </label>
                        </div>
                        <p className="max-w-[215px] mb-6 md:mb-0">
                            Image must be below 1024x1024px. Use PNG or JPG format.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between mb-6">
                    <label
                        htmlFor="firstName"
                        className="text-base text-[#737373] min-w-[210px]"
                    >
                        First Name*
                    </label>
                    <div className='relative w-full'>
                        <input
                            placeholder="e.g. John"
                            id="firstName"
                            name="firstName"
                            type="text"
                            className="w-full border rounded-md p-3 outline-[#633CFF]"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {errors.firstName && (
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                                {errors.firstName}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-6">
                    <label
                        htmlFor="lastName"
                        className="text-base text-[#737373] min-w-[210px]"
                    >
                        Last Name*
                    </label>
                    <div className='relative w-full'>
                        <input
                            placeholder="e.g. Appleseed"
                            name="lastName"
                            id="lastName"
                            type="text"
                            className="w-full border rounded-md p-3 outline-[#633CFF]"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {errors.lastName && (
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                                {errors.lastName}
                            </span>
                        )}
                    </div>
                </div>
                <div className="flex flex-col md:flex-row mb-6">
                    <label
                        htmlFor="email"
                        className="text-base text-[#737373] min-w-[210px]"
                    >
                        Email
                    </label>
                    <div className='relative w-full'>
                        <input
                            placeholder="e.g. email@example.com"
                            type="text"
                            className="w-full border rounded-md p-3 outline-[#633CFF]"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && (
                            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                                {errors.email}
                            </span>
                        )}
                    </div>
                </div>
                <div className="border-t py-6 px-10 mt-28 border-[#d9d9d9] flex items-end content-end mr-5 md:mr-10">
                    <button type="submit" className="outline-[#633CFF] ml-auto bg-[#633CFF] hover:bg-white border hover:text-[#633CFF] hover:border-[#633CFF] rounded-xl text-base font-semibold py-3 px-7 text-white">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Profile;
