import { Button, Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CowCard = ({ animal }) => {
  const { image, name, price, type, breed, id } = animal;
//   console.log(animal);
  return (
    <Card className="border shadow-sm duration-300 cursor-pointer hover:-translate-y-3 space-y-2">
      <div className="relative w-full aspect-square">
        <Image
          src={image}
          alt={name}
          fill
          sizes=""
          className="object-cover rounded-lg"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <h2 className="text-xl font-bold ">Price: <span className="text-green-400">{`${price} Tk`}</span></h2>
        <p className="grid grid-cols-2 gap-2 items-center">
          <span className="text-lg font-medium">Type :</span> <span className="text-gray-600 text-xl font-semibold">{type}</span>
        </p>
        <p className="grid grid-cols-2 gap-2 items-center">
          <span className="text-lg font-medium">Breed :</span> <span className="text-gray-600 text-xl font-semibold">{breed}</span>
        </p>
      </div>
      <Link href={`/all-animals/${id}`}>
        <Button className={'w-full rounded-lg'} variant="primary">Details</Button>
      </Link>
    </Card>
  );
};

export default CowCard;
