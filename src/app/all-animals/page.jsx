import CowCard from "@/components/UI/CowCard";
import React from "react";


export const metadata = {
  title: "Qurbani Market - All animals",
  description: "",
};

const AllAnimalsPage = async () => {
  const res = await fetch("https://b-13-a-8-api.onrender.com/animals");
  const animals = await res.json();
  // console.log(resData);
  return (
    <div className="w-[90%] md:container mx-auto py-18 space-y-3">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        All Animals Page
      </h1>

      {/* filter section  */}

      {/* show all animals */}

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {animals.map((animal) => (
          <CowCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};

export default AllAnimalsPage;
