"use client";
import Nav from "../components/Nav/Nav";
import Phone from "../components/Phone/Phone";
import AddLinks from "../components/AddLinks/AddLinks";
import EmptyLinks from "@/components/EmptyLinks/EmptyLinks";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <div className="flex">
        <Phone />
        <div className="flex flex-col w-full mr-16">
          <AddLinks />
          <div className="flex flex-col flex-grow">
            {/* <EmptyLinks /> */}
            <div className="border-t py-6 px-10 mt-28 border-[#d9d9d9] flex items-end content-end mr-10">
              <button className="ml-auto bg-[#633CFF] rounded-xl text-base font-semibold py-3 px-7 text-white">Save</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
