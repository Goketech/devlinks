import Image from "next/image"

const Nav = () => {
    return (
        <div className='flex justify-between items-center m-4 p-6'>
            <div className="flex gap-1.5">
                <Image src="/logo.svg" alt="logo" width={32} height={32} />
                <span className="text-[#333333] text-4xl font-bold">devlinks</span></div>
            <div className="flex gap-4">
                <div className="flex items-center py-3 px-7 gap-2 max-h-[49px]">
                    <Image className="w-5 h-5" src="/link.svg" alt="logo" width={20} height={20} />
                    <span className="text-[#737373] text-base font-semibold">Links</span>
                </div>
                <div className="flex items-center py-3 px-7 gap-2 bg-[#EFEBFF] rounded-xl max-h-[48px]">
                    <Image className="w-5 h-5" src="/user-active.svg" alt="logo" width={20} height={20} />
                    <span className="text-[#633CFF] text-base font-semibold">Profile Details</span>
                </div>
            </div>
            <div className="py-3 px-7 border-2 rounded-xl border-[#633CFF] max-h-[49px]">
                <span className="text-base text-[#633CFF] font-semibold">Preview</span>
            </div>
        </div>
    )
}

export default Nav