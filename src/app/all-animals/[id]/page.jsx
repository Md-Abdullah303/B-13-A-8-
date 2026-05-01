import CowForm from "@/components/UI/CowForm";
import { Card } from "@heroui/react";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Qurbani Market  - animal details",
  description: "",
};

const AnimalsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://b-13-a-8-api.onrender.com/animals");
  const animals = await res.json();

  const animal = animals.find((animal) => animal.id === id);

  const {
    image,
    name,
    price,
    type,
    breed,
    category,
    description,
    location,
    age,
    weight,
  } = animal;

//   console.log(animal);
  return (
    <div className=" bg-blue-100">
      <div className="w-[90%] md:container mx-auto py-18 space-y-3 grid grid-cols-12 lg:gap-9 md:gap-6 gap-4 items-start">
        {/* animal details */}
        <Card className="border col-span-12 md:col-span-6 lg:col-span-8  rounded-lg space-y-3.5">
          <div className="relative w-full h-120">
            <Image
              src={image}
              alt={name}
              fill
              className="object-center object-cover rounded-xl"
            />
          </div>
          {/* animal details info */}
          <div className="space-y-2">
            <h1 className="text-xl md:text-3xl font-bold">{name}</h1>
            <div className="grid grid-cols-3 gap-3">
              <div className="space-y-3">
                <p className="text-lg text-purple-400">Price : <span className="text-green-400 font-bold">{price}tk</span></p>
                <div className="space-y-1.5">
                    <h2 className="text-lg font-bold ">Location</h2>
                    <p className="text-sm  text-gray-400">{location}</p>
                </div>
                <div className="space-y-1.5">
                    <h1 className="text-lg font-bold ">Type</h1>
                    <p className="text-sm  text-gray-400">{type}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="">
                    <h2 className="text-lg font-bold ">Weight</h2>
                    <p className="text-sm  text-gray-400">{weight} Kg</p>
                </div>
                <div className="">
                    <h2 className="text-lg font-bold ">Type</h2>
                    <p className="text-sm  text-gray-400">{type}</p>
                </div>
                <div className="">
                    <h1 className="text-lg font-bold ">Breed</h1>
                    <p className="text-sm  text-gray-400">{breed}</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="">
                    <h2 className="text-lg font-bold ">Age</h2>
                    <p className="text-sm  text-gray-400">{age}</p>
                </div>
                <div className="">
                    <h1 className="text-lg font-bold ">Location</h1>
                    <p className="text-sm  text-gray-400">{location}</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" space-y-2.5">
            <h1 className="text-xl font-bold">Description</h1>
            <p className="text-gray-400">{description}</p>
          </div>
        </Card>

        {/* animal order form */}
        <div className="col-span-12 md:col-span-6 lg:col-span-4">
            <CowForm/>
        </div>
      </div>
    </div>
  );
};

export default AnimalsDetailsPage;
