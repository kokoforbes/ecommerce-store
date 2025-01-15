"use client";

import { useState } from "react";
import Button from "@/components/ui/button";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/ui/container";

const ContactPage = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Message submitted:", message);
    setMessage("");
    alert("Message sent successfully!");
  };

  return (
    <div className='bg-white'>
      <Container>
        <div className=' px-4 py-8'>
          <div className='flex justify-between items-center mb-6'>
            <h1 className='text-3xl font-bold mb-4'>Contact Us</h1>

            <Link
              href='/'
              className='text-sm font-bold text-black hover:text-gray-700'
            >
              Back Home
            </Link>
          </div>
          <form onSubmit={handleSubmit} className='max-w-md'>
            <div className='mb-4'>
              <label htmlFor='name' className='block mb-2'>
                Name
              </label>
              <Input type='text' id='name' required />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block mb-2'>
                Email
              </label>
              <Input type='email' id='email' required />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block mb-2'>
                Message (max 200 words)
              </label>
              <Textarea
                id='message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={200}
                required
                className='h-32'
              />
            </div>
            <Button type='submit'>Send Message</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
