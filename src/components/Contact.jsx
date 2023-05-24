import { Button, Label, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { HiMail } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";

const initialState = {
  name: "",
  email: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, message } = formData;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const sendMessage =  (e) => {
    e.preventDefault();
    toast.info(
      "Hi, please click on either the Mail/WhatsApp icon to send me a message instead."
    );
    // if (!name) {
    //   toast.info("Please enter your name.");
    // }
    // if (!email) {
    //   toast.info("Please enter your email.");
    // }
    // if (!message) {
    //   toast.info("Please leave a message.");
    // }
    // if (!name && !email && !message) {
    //   toast.info("Please fill in all fields.")
    // }
    // try {
    //   await sendEmail(
    //     "Message from Portfolio Website",
    //     message,
    //     "mernstacktech@outlook.com",
    //     "mernstacktech@outlook.com",
    //     email
    //   );
    //   toast.success("Message sent!. Please expect my reply in your inbox.")
    // } catch (error) {
    //   toast.error(
    //     "Message could not be sent, please check/change your network connectivity and try again."
    //   );
    // }
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
            onChange={handleChange}
            placeholder="Your name"
            required={true}
            name="name"
            value={name}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="email" value="Email" />
          </div>
          <TextInput
            name="email"
            id="email"
            onChange={handleChange}
            value={email}
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
            onChange={handleChange}
            value={message}
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
