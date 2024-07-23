import Image from "next/image"

const Phone = () => {
  return (
    <div className='relative w-[800px] h-[800px] flex justify-center items-center bg-white'>
        <Image className="rotate-[270deg]" src="/empty-preview.png" alt="phone" width={631} height={307} style={{ transform: 'rotate(270deg) scale(1.5)' }} />
    </div>
  )
}

export default Phone