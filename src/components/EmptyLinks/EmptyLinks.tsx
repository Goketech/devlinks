import Image from "next/image"

const EmptyLinks = () => {
  return (
    <div className="flex flex-col items-center m-5">
      <Image className="mb-6 mt-20" src="/started-image.png" alt="get started" width={250} height={160} />
      <h2 className="text-3xl font-semibold mb-6">Let&apos;s get you started</h2>
      <p className="max-w-[488px] text-center text-base text-[#737373]">Use the &apos;Add new link&apos; button to get started. Once you have more than one link, you can reorder and edit them. We&apos;re here to help you share your profiles with everyone!</p>
    </div>
  )
}

export default EmptyLinks