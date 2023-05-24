import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="flex bg-gray-700 flex-col md:flex-row gap-8 md:gap-52 items-center justify-between md:justify-center p-4 md:p-8"
    >
      <h2 className="text-2xl md:text-3xl text-white">Hire/Contact Me</h2>
      <form className="flex flex-col gap-4 w-full md:w-1/2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" className="text-white" value="Name" />
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
            <Label className="text-white" htmlFor="email" value="Email" />
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
            <Label
              className="text-white"
              htmlFor="message"
              value="Message"
            />
          </div>
          <Textarea
            id="message"
            placeholder="Leave a message..."
            required={true}
            rows={5}
          />
        </div>
        <Button type="submit"  size="lg" className="w-20">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
