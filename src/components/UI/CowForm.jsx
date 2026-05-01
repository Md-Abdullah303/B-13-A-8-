"use client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

const CowForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;

    console.log(name, email, phone);

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
          isRequired
          name="name"
          className="w-full outline-none"
          placeholder="Enter your name"
        />

        {/* email */}
        <TextField
          className={"w-full outline-none"}
          isRequired
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
          isRequired
          type="text"
          className="w-full outline-none"
          placeholder="Enter your Phone number"
        />

        <div className="flex gap-2">
          <Button type="submit">
            <Check />
            Submit
          </Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default CowForm;
