import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="bg-[url('https://i.ibb.co.com/fV4bwLKN/pexels-szafran-35092364.jpg')] h-screen w-full bg-cover bg-no-repeat bg-center flex items-center  shadow-2xl">
      {/* Overlay */}
      <div className="w-full h-full rounded-lg bg-black/50 flex items-center ">
        <div className=" w-[70%] md:container mx-auto px-6 text-white">
          <h1 className="text-4xl md:text-7xl font-bold mb-4 max-w-2xl">
            Find Your Perfect <br />
            Qurbani Animals
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl text-gray-200">
            Find the best animal for your Qurbani. This web site your help you for that.
          </p>

          <div className="flex gap-4">
            <Link href="/all-animals">
              <Button className="bg-linear-to-r from-green-500 via-blue-500 bg-green-500">
                Generate Now
              </Button>
            </Link>

            <Link href="#">
              <Button variant="outline" className="text-white">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
