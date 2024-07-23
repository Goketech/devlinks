import Image from "next/image";
import Link from "next/link";

const page = () => {
    return (
        <div>
            <div className='bg-[#633CFF] h-[357px] p-6 rounded-b-[32px]'>
                <div className='bg-white px-6 py-4 rounded-xl flex justify-between'>
                    <Link href="/">
                        <button className='py-3 px-6 border border-[#633CFF] text-base font-semibold text-[#633CFF] rounded-xl'>Back to Editor</button>
                    </Link>
                    <button className='py-3 px-6 bg-[#633CFF] text-white text-base font-semibold rounded-xl'>Share Link</button>
                </div>
                <div className="flex items-center justify-center h-full mt-28">
                    <div className="bg-white py-12 px-14 w-[349px] flex flex-col items-center justify-center h-full rounded-3xl shadow-xl">
                        <div>
                            <div>
                                <Image src='/started-image.png' alt='user-profile' width={104} height={104} />
                            </div>
                            <h2>Ben Wright</h2>
                            <p>ben@example.com</p>
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

export default page