
import UpdateForm from "@/components/UpdateForm/UpdateForm";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button, Input, Label, TextField } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const UserProfile = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  const onsubmit = async (e) => {
    e.preventDefault();

    
  };

  const user = session?.user;
  // console.log(session);
  // console.log(user?.image);
  return (
    <div className="flex  flex-col items-center gap-6 py-20">
      {/* showing user information */}
      <div className="flex flex-col items-center gap-3 rounded-xl  p-5">
        <div className="">
          <Avatar className="border flex items-center justify-center rounded-full overflow-hidden w-50 h-50">
            <Avatar.Image alt={user?.name} src={user?.image} />
            <Avatar.Fallback className="text-4xl md:text-7xl text-blue-600 ">
              {user?.name.toString()[0]}
            </Avatar.Fallback>
          </Avatar>
        </div>
        <h1 className="text-xl md:text-3xl font-bold">{user?.name}</h1>
        <p className="text-lg md:text-xl text-gray-500">{user?.email}</p>
      </div>
      <hr className="bg-gray-400 md:w-80 sm:w-60 w-40 lg:w-100" />

      {/* update information */}
      <UpdateForm user={user}/>
    </div>
  );
};

export default UserProfile;
