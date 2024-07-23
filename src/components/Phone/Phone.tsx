import Image from "next/image"

const Phone = () => {
  return (
    <div className='w-[560px] px-32 py-32'>
        <Image className="rotate-[270deg]" src="/empty-preview.png" alt="phone" width={307} height={631} />
    </div>
  )
}

export default Phone