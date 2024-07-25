import Image from "next/image";
import Link from "next/link";
import { NavProps } from "@/types";

const Nav: React.FC<NavProps> = ({ active, setActive }) => {
    return (
        <div className='flex justify-between items-center m-4 p-6 bg-white'>
            <div className="flex gap-1.5">
                <Image src="/logo.svg" alt="logo" width={32} height={32} />
                <span className="hidden md:flex text-[#333333] text-4xl font-bold">devlinks</span></div>
            <div className="flex gap-4">
                <button onClick={() => setActive("links")} className={`outline-[#633CFF] flex items-center py-3 px-7 gap-2 max-h-[49px] rounded-xl cursor-pointer border border-transparent ${active === "links" ? "bg-[#EFEBFF] text-[#633CFF] hover:border-[#633CFF] hover:bg-white" : "text-[#737373] hover:border-[#633CFF] hover:bg-[#633CFF] hover:text-white"}`}>
                    <Image className="w-5 h-5" src={`${active === "links" ? "/link-active.svg" : "/link.svg"}`} alt="logo" width={20} height={20} />
                    <span className="hidden md:flex text-base font-semibold">Links</span>
                </button>
                <button onClick={() => setActive("profile")} className={`outline-[#633CFF] flex items-center py-3 px-7 gap-2 border border-transparent ${active === "profile" ? "bg-[#EFEBFF] text-[#633CFF] hover:border-[#633CFF] hover:bg-white" : "text-[#737373] hover:border-[#633CFF] hover:bg-[#633CFF] hover:text-white"} cursor-pointer rounded-xl max-h-[48px]`}>
                    <Image className="w-5 h-5" src={`${active === "profile" ? "/user-active.svg" : "/user.svg"}`} alt="logo" width={20} height={20} />
                    <span className="hidden md:flex text-base font-semibold">Profile Details</span>
                </button>
            </div>
            <Link className="py-3 px-7 border-2 rounded-xl border-[#633CFF] hover:bg-[#EFEBFF] max-h-[49px] outline-[#633CFF]" href="/preview">
                <span className="text-base text-[#633CFF] font-semibold hidden md:flex">Preview</span>
                <Image className="w-5 h-5 md:hidden" src="/eye-active.svg" alt="logo" width={20} height={20} />
            </Link>
        </div>
    )
}

export default Nav