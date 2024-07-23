"use client";
import { useState } from "react";
import Nav from "../components/Nav/Nav";
import Phone from "../components/Phone/Phone";
import AddLinks from "../components/AddLinks/AddLinks";
import EmptyLinks from "@/components/EmptyLinks/EmptyLinks";
import Profile from "@/components/Profile/Profile";

export default function Home() {
  const [active, setActive] = useState<string>("links");

  return (
    <main className="">
      <Nav active={active} setActive={setActive} />
      <div className="flex">
        <Phone />
        <div className="flex flex-col w-full mr-16">
          {active === "links" ? <AddLinks /> : <Profile />}
          <div className="flex flex-col flex-grow">
            {/* <EmptyLinks /> */}
            <div className="border-t py-6 px-10 mt-28 border-[#d9d9d9] flex items-end content-end mr-10">
              <button className="outline-[#633CFF] ml-auto bg-[#633CFF] hover:bg-white border hover:text-[#633CFF] hover:border-[#633CFF] rounded-xl text-base font-semibold py-3 px-7 text-white">Save</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
