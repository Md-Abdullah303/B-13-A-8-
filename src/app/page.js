import Banner from "@/components/homepage/Banner";
import { Card } from "@heroui/react";
import Image from "next/image";

export default async function Home() {
  const res = await fetch("https://b-13-a-8-api.onrender.com/animals");
  const resData = await res.json();
  // console.log(resData);
  return (
    <div className="">
      <Banner/>
    </div>
  );
}
