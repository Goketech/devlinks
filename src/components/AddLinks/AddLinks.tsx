import { useState } from 'react';
import Links from "@/components/Links/Links";
import { Link } from "@/types";

const AddLinks: React.FC = () => {
  const [links, setLinks] = useState<Link[]>([{ id: Date.now(), platform: '', url: '' }]);

  const addLink = () => {
    setLinks([...links, { id: Date.now(), platform: '', url: '' }]);
  };

  const removeLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className='bg-white p-10'>
      <div className='mr-10 max-w-[808px] mb-5 w-full'>
        <h2 className='text-3xl text-[#333333] font-bold mt-10'>Customize Your links</h2>
        <p className='text-base text-[#737373] mt-2'>Add/edit/remove links below and then share all your profiles with the world!</p>
        <button onClick={addLink} className='text-[#633CFF] font-semibold mt-10 flex center justify-center w-full border-2 border-[#633CFF] rounded-xl py-3 px-7 w-full'>
          + Add New Link
        </button>
      </div>
      <div className='h-[400px] overflow-y-scroll scrollbar-hide mt-5'>
        {links.map((link, index) => (
          <Links key={link.id} link={link} index={index} removeLink={removeLink} />
        ))}
      </div>
    </div>
  )
}

export default AddLinks