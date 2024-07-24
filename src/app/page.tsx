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
          </div>
        </div>
      </div>
    </main>
  );
}
