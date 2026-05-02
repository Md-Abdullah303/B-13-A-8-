"use client";
import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, TextField } from "@heroui/react";
import React from "react";
import { toast } from "react-toastify";

const UpdateForm = ({ user }) => {
  const onsubmit = async (e) => {
    e.preventDefault();

    const image = e.target.image.value;
    const name = e.target.name.value;

    console.log(image, name);

    await authClient.updateUser({
      image,
      name,
    });

    toast.success("Profile was updated.")
  };
  return (
    <div>
      <form
        onSubmit={onsubmit}
        className="border border-gray-300 p-6 md:p-10 rounded-xl space-y-5 shadow lg:w-130 w-100"
      >
        <h1 className="text-lg md:text-2xl font-bold text-center">
          Update Information
        </h1>

        {/* Image URL */}
        <TextField className="w-full " name="image" type="text">
          <Label>Image URL</Label>
          <Input className={"border outline-none"} placeholder="Image URL" />
        </TextField>

        {/* Name */}
        <TextField className="w-full " name="name" type="text">
          <Label>Name</Label>
          <Input className={"border outline-none"} placeholder="Name" />
        </TextField>

        <Button className={"w-full"} type="submit" variant="primary">
          Update information
        </Button>
      </form>
    </div>
  );
};

export default UpdateForm;
