import Banner from "@/components/homepage/Banner";
import Featured from "@/components/homepage/Featured";
import { Card } from "@heroui/react";
import Image from "next/image";

export const metadata = {
  title: "Qurbani Market - Home",
  description: "",
};

export default async function Home() {
  
  return (
    <div className="">
      <Banner/>
      <Featured/>
    </div>
  );
}
