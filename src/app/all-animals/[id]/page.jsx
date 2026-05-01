import React from "react";

const AnimalsDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch("https://b-13-a-8-api.onrender.com/animals");
  const animals = await res.json();

  const animal = animals.find(animal=> animal.id === id);


//   console.log(animal);
  return (
    <div className="w-[90%] md:container mx-auto py-18 space-y-3">
      <h1>animals details page</h1>
    </div>
  );
};

export default AnimalsDetailsPage;
