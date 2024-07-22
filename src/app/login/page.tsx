import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen mt-32 mb-12 flex items-center justify-center">
            <div className="flex min-w-[396px] flex-col items-center">
                <div className="flex items-center space-x-2 mb-12">
                    <Image src="/logo.svg" alt="logo" width={40} height={40} />
                    <span className="text-[#333333] text-4xl font-bold">devlinks</span>
                </div>
                <div className="w-full">
                    <div className="text-left mt-10">
                        <h1 className="text-3xl font-bold mb-2">Login</h1>
                        <p className="text-[#737373] mb-10">Add your details below to get back into the app</p>
                    </div>
                    <form className="space-y-6 flex flex-col w-full">
                        <div>
                            <label htmlFor="email" className="mb-1 text-xs text-[#333333]">Email address</label>
                            <div className="relative">
                                <input name="email" id="email" type="email" placeholder="e.g. alex@email.com" className="w-full border rounded-md pl-11 p-2 outline-[#633CFF]" />
                                <Image src="/mail.svg" alt="mail" width={16} height={16} className="w-4 h-4  absolute top-2.5 left-4" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="mb-1 text-xs text-[#333333]">Password</label>
                            <div className="relative">
                                <input type="password" name="password" id="password" placeholder="Enter your password" className="w-full border rounded-md pl-11 p-2 outline-[#633CFF]" />
                                <Image src="/password.svg" alt="lock" width={16} height={16} className="w-4 h-4 absolute top-2.5 left-4" />
                            </div>
                        </div>
                        <button className="w-full bg-[#633CFF] font-semibold text-base text-white rounded-md p-2">Login</button>
                    </form>
                </div>
                <p className="text-sm pt-6">Don’t have an account? <span className="text-[#633CFF] cursor-pointer"><Link href="/signup">Create account</Link></span></p>
            </div>
        </div>
    )
}

export default Page
