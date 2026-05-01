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

const LoginPage = () => {
  const onSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(email, password);

    const { data, error } = await authClient.signIn.email({
      email,
      password,
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
        <h1 className="mx-auto text-xl md:text-3xl font-bold">Login</h1>

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
          <Label>Email</Label>
          <Input placeholder="Enter your Email" />
          <FieldError />
        </TextField>

        {/* password */}
        <TextField
          required
          minLength={8}
          name="password"
          type="password"
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
          <Label>Password</Label>
          <Input placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <Button className={"w-full p-6"} type="submit">
          Login
        </Button>
        <h1 className="mx-auto text-lg">
          Register :{" "}
          <Link className="text-blue-400" href={"/register"}>
            Register
          </Link>
        </h1>
        <hr className="w-40 sm:w-50 md:w-60 lg:w-80 mx-auto" />
        <Button variant="outline" className={"w-full py-6 text-lg"}>
          <ImGoogle color="blue" /> Login with Google
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
