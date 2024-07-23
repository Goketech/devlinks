import Image from "next/image"

const Phone = () => {
  return (
    <div className='relative px-28 flex justify-center items-center bg-white'>
        <Image className="rotate-[270deg]" src="/empty-preview.png" alt="phone" width={681} height={357} style={{ transform: 'rotate(270deg) scale(1.5)' }} />
    </div>
  )
}

export default Phone