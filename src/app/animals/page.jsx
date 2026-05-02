import { FilterAnimals } from "@/components/filtering/FIlterAnimals";
import CowCard from "@/components/UI/CowCard";
import React from "react";


export const metadata = {
  title: "Qurbani Market - All animals",
  description: "",
};

const AllAnimalsPage = async ({searchParams}) => {
  const {sort} = await searchParams;
  const res = await fetch("https://b-13-a-8-api.onrender.com/animals", {
    cache: "no-store"
  });
  const animals = await res.json();

  if(sort === "high"){
    animals.sort((a, b)=> b.price - a.price);
  }else if(sort === 'low'){
    animals.sort((a, b)=> a.price - b.price);
  }

  // console.log(sort);
  return (
    <div className="w-[90%] md:container mx-auto py-18 space-y-3">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        All Animals Page
      </h1>

      {/* filter section  */}
      <FilterAnimals/>
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
