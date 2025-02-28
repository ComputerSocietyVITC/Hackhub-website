"use client";

import { useState } from "react";
import Image from "next/image";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { postData } from "../../../utils/postData";

export const runtime = "edge";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone_No: "",
    Message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if(!formData.Name||!formData.Email||!formData.Phone_No||!formData.Message){
        alert("Please fill all the fields");
        return;
      }

      await postData(formData);
      alert("Form submitted successfully!");
      setFormData({
        Name: "",
        Email: "",
        Phone_No: "",
        Message: "",
      });
  
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Failed to submit the form. Please try again.");
    }
  };

  return (
    <div>
      {/* Get In Touch Section */}
      <div className="contact-section mt-16 pt-8 px-12">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-12">
          <p className="text-white font-bold text-xl">10</p>
          <div className="flex-1 h-[1px] bg-white mx-4"></div>
          <p className="text-white text-2xl font-extrabold">GET IN TOUCH</p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex justify-between items-start"
        >
          <div className="flex flex-col space-y-4 w-1/2">
            <input
              type="text"
              name="Name"
              placeholder="NAME"
              value={formData.Name}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              name="Email"
              placeholder="EMAIL"
              value={formData.Email}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="tel"
              name="Phone_No"
              placeholder="PHONE"
              value={formData.Phone_No}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-2 placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="relative flex flex-col w-1/2 pl-6">
            <textarea
              name="Message"
              placeholder="MESSAGE"
              rows={5}
              value={formData.Message}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-md text-white px-4 py-4 pr-10 placeholder:text-gray-400 focus:outline-none focus:border-white transition-colors"
            ></textarea>
            <button
              type="submit"
              className="absolute bottom-2 right-2 text-white hover:text-gray-300 transition-colors flex items-center justify-center"
            >
              <Image
                src="/images/arrow.webp"
                alt="Send"
                width={24}
                height={24}
                className="h-5 w-5"
              />
            </button>
          </div>
        </form>

        {/* Social Icons */}
        <div className="flex justify-end mt-8 space-x-6">
          <a
            href="https://www.linkedin.com/company/ieee-computer-society-vit-chennai/"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/compsoc.vitcc?igsh=NTc4MTIwNjQ2YQ=="
            className="text-white hover:text-gray-300 transition-colors"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 relative">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-4">
            <Image
              src="/images/Hackhub_logo.svg"
              alt="HACKHUB Logo"
              width={200}
              height={50}
              className="h-auto w-auto"
              priority
            />
          </div>
          <div className="text-center text-gray-400 text-sm mt-6">
            © IEEE Computer Society VIT Chennai 2024 - All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;
