"use effect"

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import fetchProfile from "@/utils/fetchProfile";
import fetchUserLinks from "@/utils/fetchUserLinks";

interface ProfilePageProps {
    profile: {
      first_name: string;
      last_name: string;
      email: string;
      image: string;
    };
  }

export default async function page ({
    params: { id },
  }: {
    params: { id: string }
  }) {
    const profile = await fetchProfile(id);
    
    return (
        <div>
            <div className='bg-[#633CFF] h-[357px] p-6 rounded-b-[32px]'>
                <div className="flex items-center justify-center h-full mt-28">
                    <div className="bg-white py-12 px-14 w-[349px] flex flex-col items-center justify-center h-full rounded-3xl shadow-xl">
                        <div>
                            <div>
                                <Image src={profile.image || '/started-image.png'} alt='user-profile' width={104} height={104} />
                            </div>
                            <h2>{`${profile.first_name} ${profile.last_name}`}</h2>
                            <p>{profile.email}</p>
                        </div>
                        <div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
