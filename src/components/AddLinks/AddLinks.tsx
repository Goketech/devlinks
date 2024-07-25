"use client"

import { useEffect, useState } from 'react';
import Links from "@/components/Links/Links";
import { Link } from "@/types";
import { useRouter } from 'next/navigation';
import fetchUserLinks from "@/utils/fetchUserLinks";
import insertLink from "@/utils/insertLink";
import deleteLinks from '@/utils/deleteLinks';
import EmptyLinks from '../EmptyLinks/EmptyLinks';
import Phone from '../Phone/Phone';

const baseUrls: { [key: string]: string } = {
  'Github': 'https://www.github.com/',
  'Frontend Mentor': 'https://www.frontendmentor.io/',
  'Twitter': 'https://www.twitter.com/',
  'Linkedln': 'https://www.linkedin.com/',
  'YouTube': 'https://www.youtube.com/',
  'Facebook': 'https://www.facebook.com/',
  'Twitch': 'https://www.twitch.tv/',
  'Dev.to': 'https://www.dev.to/',
  'Codewars': 'https://www.codewars.com/',
  'freeCodeCamp': 'https://www.freecodecamp.org/',
  'GitLab': 'https://www.gitlab.com/',
  'Hashnode': 'https://www.hashnode.com/',
  'Stack Overflow': 'https://www.stackoverflow.com/',
};

const AddLinks: React.FC = () => {
  const router = useRouter();
  const [links, setLinks] = useState<Link[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{ [key: number]: string }>({});
  const [validationResults, setValidationResults] = useState<Map<number, boolean>>(new Map());
  const [formHasErrors, setFormHasErrors] = useState<boolean>(false);

  useEffect(() => {
    const fetchLinks = async () => {
      const user_id = localStorage.getItem('user_id');
      if (!user_id) {
        setError('User ID not found');
        setLoading(false);
        router.push('/');
        return;
      }

      const userLinks = await fetchUserLinks(user_id);

      if (userLinks.length === 0) {
        setError('No links found');
      } else {
        setLinks(userLinks);
      }
      setLoading(false);
    };

    fetchLinks();
  }, []);

  const validateLinks = () => {
    setFormHasErrors(false);
    for (const link of links) {
      let baseUrl = '';
      baseUrl = baseUrls[link.platform] || '';
      if (!link.url || !link.url.startsWith(baseUrl)) {
        setFormHasErrors(true);
        break;
      }
    }
  };


  const handleSave = async () => {
    const user_id = localStorage.getItem('user_id');
    if (!user_id) {
      setError('User ID not found');

      router.push('/login');
      return;
    }

    validateLinks();
    if (formHasErrors) {
      alert('Please enter valid links');
      return;
    }

    for (const link of links) {
      await insertLink(user_id, link.platform, link.url);
    }

    for (const link of links) {
      await insertLink(user_id, link.platform, link.url);
    }
    alert('Links inserted successfully');
  };


  const addLink = () => {
    setLinks([...links, { id: Date.now(), platform: '', url: '' }]);
  };

  const removeLink = async (id: number) => {
    setLinks(links.filter(link => link.id !== id));
    await deleteLinks(id);
  };

  const updateLink = (id: number, key: keyof Link, value: string) => {
    setLinks(links.map(link => link.id === id ? { ...link, [key]: value } : link));
    validateLinks();
  };

  return (
    <div className='flex'>
      <Phone />
      <div className='bg-white p-10'>
        <div className='mr-10 max-w-[808px] mb-5 w-full'>
          <h2 className='text-3xl text-[#333333] font-bold mt-10'>Customize Your links</h2>
          <p className='text-base text-[#737373] mt-2'>Add/edit/remove links below and then share all your profiles with the world!</p>
          <button onClick={addLink} className='outline-[#633CFF] hover:bg-[#EFEBFF] text-[#633CFF] font-semibold mt-10 flex center justify-center w-full border-2 border-[#633CFF] rounded-xl py-3 px-7 w-full'>
            + Add New Link
          </button>
        </div>
        {links.length === 0 && !loading && <EmptyLinks />}
        <div className='h-[400px] overflow-y-scroll scrollbar-hide mt-3 md:mt-5'>
          {links.map((link, index) => (
            <Links key={link.id} link={link} index={index} removeLink={removeLink} updateLink={updateLink} />
          ))}
        </div>
        <div className="border-t py-6 px-10 mt-28 border-[#d9d9d9] flex items-end content-end mr-5 md:mr-10">
          <button disabled={formHasErrors} onClick={handleSave} className={`outline-[#633CFF] ml-auto bg-[#633CFF]  hover:bg-white border hover:text-[#633CFF] hover:border-[#633CFF] rounded-xl text-base font-semibold py-3 px-7 text-white ${formHasErrors ? "bg-[#BEADFF] cursor-not-allowed" : "bg-[#633CFF]"
            }`}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default AddLinks