import Choose from "@/components/Home/Choose";
import Hero from "@/components/Home/Hero";
import Popular from "@/components/Home/Popular";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
     <Hero />
     <Popular />
     <Choose />
    </div>
  );
}
