import Nav from "../components/Nav/Nav";
import Phone from "../components/Phone/Phone";
import Links from "../components/Links/Links";
import EmptyLinks from "@/components/EmptyLinks/EmptyLinks";

export default function Home() {
  return (
    <main className="">
      <Nav />
      <div className="flex">
        <Phone />
        <div>
          <Links />
          <EmptyLinks />
        </div>
      </div>
    </main>
  );
}
