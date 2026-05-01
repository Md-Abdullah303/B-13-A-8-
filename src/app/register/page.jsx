"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextArea,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import React from "react";
import { ImGoogle } from "react-icons/im";

const RegisterPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    // console.log(email, password, name, image);

    const { data, error } = await authClient.signUp.email({
      name, 
      email,
      password,
      image,
      callbackURL: "/",
    });
    console.log(data, error);
  };

  return (
    <div className="w-[90%] md:container mx-auto py-25">
      <Form
        className="flex items-start flex-col gap-4 border p-5 rounded-xl max-w-100 mx-auto"
        onSubmit={onSubmit}
      >
        <h1 className="mx-auto text-xl md:text-3xl font-bold">Register</h1>

        {/* name */}
        {/* <Label>Name</Label> */}
        <Input
          required
          name="name"
          className="w-full outline-none"
          placeholder="Name"
        />

        {/* email */}
        <TextField
          className={"w-full outline-none"}
          required
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          {/* <Label>Email</Label> */}
          <Input placeholder="Email" />
          <FieldError />
        </TextField>

        {/* photo url */}
        {/* <Label>Name</Label> */}
        <Input
          required
          name="image"
          className="w-full outline-none"
          placeholder="Photo URL"
        />

        {/* password */}
        <TextField
          required
          minLength={8}
          name="password"
          type="password"
          className={'w-full'}
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          {/* <Label>Password</Label> */}
          <Input placeholder="Password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <Button className={"w-full p-6"} type="submit">
          Register
        </Button>
        <div className="flex items-center mx-auto gap-4">
          <hr className="w-20 sm:w-25 md:w-30  mx-auto" />
          <Link href={"/login"}>
            <span className="text-blue-400">Login</span>
          </Link>
          <hr className="w-20 sm:w-25 md:w-30  mx-auto" />
        </div>
        <Button variant="outline" className={"w-full py-6 text-lg"}>
          <ImGoogle color="blue" /> Register with Google
        </Button>
      </Form>
    </div>
  );
};

export default RegisterPage;
