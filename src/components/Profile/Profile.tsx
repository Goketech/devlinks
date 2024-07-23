"use client";

import Image from "next/image";
import { useState } from 'react';

const Profile = () => {
    const [image, setImage] = useState<string | null>(null);

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
            <div className='mr-10 max-w-[808px] mb-5 w-full'>
                <h2 className='text-3xl text-[#333333] font-bold mt-10'>Profile Details</h2>
                <p className='text-base text-[#737373] mt-2'>Add your details to create a personal touch to your profile.</p>
            </div>
            <form className="mt-12" action="">
                <div className="flex mb-6 max-w-[728px]">
                    <label className="min-w-[210px] text-base text-[#737373]" htmlFor="profileImage">Profile Picture</label>
                    <div className="flex gap-6 items-center">
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
          ${image ? 'bg-cover bg-center text-white' : 'bg-[#EFEBFF] text-[#633CFF]'}`}
                                style={{ backgroundImage: image ? `url(${image})` : 'none', backgroundBlendMode: 'multiply' }}
                            >
                                <div className="relative z-10 flex flex-col items-center justify-center">
                                    {!image ? (
                                        <>
                                            <Image width={40} height={40} src="/image-card-purple.svg" className="text-2xl mb-2" />
                                            <span className="font-bold">+ Upload Image</span>
                                        </>
                                    ) : (
                                        <>
                                            <Image width={40} height={40} src="/image-card-white.svg" className="text-2xl mb-2" />
                                            <span className="font-bold">Change Image</span>
                                        </>
                                    )}
                                </div>
                            </label>
                        </div>
                        <p className="max-w-[215px]">Image must be below 1024x1024px. Use PNG or JPG format.</p>    
                    </div>
                </div>
                <div className="flex justify-between mb-6">
                    <label htmlFor="firstName" className="text-base text-[#737373] min-w-[210px]">First Name*</label>
                    <input placeholder="e.g. John" id='firstName' name="firstName" type="text" className="w-full border rounded-md p-3 outline-[#633CFF]" />
                </div>
                <div className="flex justifu-between mb-6">
                    <label htmlFor="lastName" className="text-base text-[#737373] min-w-[210px]">Last Name*</label>
                    <input placeholder="e.g. Appleseed" name='lastName' id='lastName' type="text" className="w-full border rounded-md p-3 outline-[#633CFF]" />
                </div>
                <div className="flex justifu-between mb-6">
                    <label htmlFor="email" className="text-base text-[#737373] min-w-[210px]">Email</label>
                    <input placeholder="e.g. email@example.com" type="text" className="w-full border rounded-md p-3 outline-[#633CFF]" name="email" id="email" />
                </div>
            </form>
        </div>
    )
}

export default Profile