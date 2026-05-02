import Image from "next/image";
import React from "react";
import qurbaniTips1 from "@/assets/operation.png";
import qurbaniTips2 from "@/assets/portfolio.png";
import qurbaniTips3 from "@/assets/social-media.png";
import qurbaniTips4 from "@/assets/writing_2327400 1.png";

const QurbaniTips = () => {
  return (
    <div className=" bg-blue-100">
      <div className="w-[90%] md:container mx-auto py-20 px-10 space-y-4 ">
        <h1 className="text-xl md:text-3xl font-bold">Qurbani Tips</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-2.5 border border-gray-300 p-5 rounded-lg shadow-sm duration-200 hover:-translate-y-2 cursor-pointer">
            <div className="bg-white p-3 rounded-xl">
              <Image
                src={qurbaniTips1}
                alt="qurbani tips image 1"
                width={80}
                height={80}
              />
            </div>
            <p>
              Preserve meat properly by refrigerating or freezing it quickly,
              avoid wastage, and plan meals wisely so the blessings of Qurbani
              benefit you longer.
            </p>
          </div>
          <div className="flex items-start gap-2.5 border border-gray-300 p-5 rounded-lg shadow-sm duration-200 hover:-translate-y-2 cursor-pointer">
            <div className="bg-white p-3 rounded-xl">
              <Image
                src={qurbaniTips2}
                alt="qurbani tips image 1"
                width={80}
                height={80}
              />
            </div>
            <p>
              Distribute meat fairly among family, relatives, and the poor, remembering the spirit of sharing, compassion, and community support that Qurbani represents every year.
            </p>
          </div>
          <div className="flex items-start gap-2.5 border border-gray-300 p-5 rounded-lg shadow-sm duration-200 hover:-translate-y-2 cursor-pointer">
            <div className="bg-white p-3 rounded-xl">
              <Image
                src={qurbaniTips3}
                alt="qurbani tips image 1"
                width={80}
                height={80}
              />
            </div>
            <p>
              Maintain proper hygiene during slaughter, use sharp tools to minimize suffering, and follow local regulations to ensure the process is safe and respectful.
            </p>
          </div>
          <div className="flex items-start gap-2.5 border border-gray-300 p-5 rounded-lg shadow-sm duration-200 hover:-translate-y-2 cursor-pointer">
            <div className="bg-white p-3 rounded-xl">
              <Image
                src={qurbaniTips4}
                alt="qurbani tips image 1"
                width={80}
                height={80}
              />
            </div>
            <p>
              Before Qurbani, choose a healthy animal, check age requirements, and ensure it is free from defects according to Islamic guidelines for valid sacrifice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QurbaniTips;
