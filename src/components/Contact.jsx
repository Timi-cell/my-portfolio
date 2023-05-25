import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React, { useRef } from "react";
import { toast } from "react-toastify";
import { HiMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendMessage = (e) => {
    e.preventDefault();
    try {
      emailjs
        .sendForm(
          "service_6vvo8fm",
          "template_2369t2l",
          form.current,
          "9XZrfSc4JEXID9eyi"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      toast.success("Message sent!. Please expect my reply in your inbox.");
    } catch (error) {
      toast.error(
        "Message could not be sent, please check/change your network connectivity and try again."
      );
    }
  };
  return (
    <div
      id="contact"
      className="flex bg-gray-700 flex-col md:flex-row gap-8 md:gap-52 items-center justify-between md:justify-center p-4 md:p-8"
    >
      <div className="flex flex-col items-center justify-center gap-4 md:items-start">
        <h2 className="text-2xl md:text-3xl text-white">Hire/Contact Me</h2>
        <div className="flex flex-row gap-2 bg-white p-2">
          <a href="mailto:alukosamuel25@gmail.com">
            <HiMail size={30} color="#000" />
          </a>
          <p className="text-lg text-gray-900">OR</p>
          <a href="https://wa.link/a1lyfz">
            <IoLogoWhatsapp size={30} color="green" />
          </a>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={sendMessage}
        className="flex flex-col gap-4 w-full md:w-1/2"
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" className="text-white" value="Name" />
          </div>
          <TextInput
            id="name"
            type="text"
            placeholder="Your name"
            required={true}
            name="user_name"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="email" value="Email" />
          </div>
          <TextInput
            name="user_email"
            id="email"
            type="email"
            placeholder="Your email address"
            required={true}
          />
        </div>
        <div id="textarea">
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="message" value="Message" />
          </div>
          <Textarea
            id="message"
            name="message"
            placeholder="Leave a message..."
            required={true}
            rows={5}
          />
        </div>
        <Button type="submit" size="lg" className="w-20">
          Send
        </Button>
      </form>
    </div>
  );
};

export default Contact;
