"use client";
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
import { FcOk } from "react-icons/fc";
import { toast } from "react-toastify";

const CowForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const textArea = e.target.textArea.value;

    toast.success("Booking was Confirmed ✅");
    e.target.reset();
  };

  return (
    <div className="bg-white shadow-sm rounded-xl p-7">
      <h1 className="text-xl md:text-3xl font-bold text-center pb-15">
        Booking Form
      </h1>

      <Form
        className="flex items-start flex-col gap-4 border p-5 rounded-xl"
        onSubmit={onSubmit}
      >
        {/* name */}
        <Label>Name</Label>
        <Input
          required
          name="name"
          className="w-full outline-none"
          placeholder="Enter your name"
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
          <Label>Email</Label>
          <Input placeholder="Enter your Email" />
          <FieldError />
        </TextField>

        {/* phone */}
        <Label>Phone</Label>
        <Input
          name="phone"
          required
          type="text"
          className="w-full outline-none"
          placeholder="Enter your Phone number"
        />

        <TextField className={" w-full max-h-34"} required name="textArea">
          <Label>Address</Label>
          <TextArea required className={"h-30"} placeholder="Enter your address" />
        </TextField>

        <Button className={'w-full p-6'} type="submit">
          <Check />
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CowForm;
