import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex mt-4 flex-col lg:flex-row gap-8a lg:gap-52 items-center justify-between lg:justify-center"
    >
      <h2 className="text-2xl lg:text-3xl">Hire/Contact Me</h2>
      <form className="flex flex-col gap-4 w-full lg:w-1/2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Your name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            id="email"
            type="email"
            placeholder="Your email address"
            required={true}
          />
        </div>
        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="message" value="Your message" />
          </div>
          <Textarea
            id="message"
            placeholder="Leave a message..."
            required={true}
            rows={5}
          />
        </div>
        <Button type="submit" className="w-20">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
