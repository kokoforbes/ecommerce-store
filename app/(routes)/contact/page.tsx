"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/ui/button";
import Link from "next/link";

import Container from "@/components/ui/container";

import postMessage from "@/actions/post-message";

import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import { toast } from "react-hot-toast";

// Validation schema using zod
const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  subject: z.string().min(1, "Subject is required"),
  email: z.string().email("Invalid email address"),
  content: z.string().min(10, "Content must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    postMessage(data).then((response) => {
      if (response.success) {
        toast.success("Message sent successfully.");
        reset();
      } else {
        toast.error("Failed to send message.");
      }
    });
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

          <Card className='max-w-md mx-auto p-6'>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit(onSubmit)}>
              <CardContent className='space-y-4'>
                {/* Name */}
                <div>
                  <Label htmlFor='name'>Name</Label>
                  <Input
                    id='name'
                    {...register("name")}
                    placeholder='Enter your name'
                    className='mt-1'
                  />
                  {errors.name && (
                    <p className='text-red-500 text-sm'>
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <Label htmlFor='subject'>Subject</Label>
                  <Input
                    id='subject'
                    {...register("subject")}
                    placeholder='Enter the subject'
                    className='mt-1'
                  />
                  {errors.subject && (
                    <p className='text-red-500 text-sm'>
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    {...register("email")}
                    placeholder='Enter your email'
                    className='mt-1'
                  />
                  {errors.email && (
                    <p className='text-red-500 text-sm'>
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Content */}
                <div>
                  <Label htmlFor='content'>Content</Label>
                  <Textarea
                    id='content'
                    {...register("content")}
                    placeholder='Enter your message'
                    className='mt-1'
                  />
                  {errors.content && (
                    <p className='text-red-500 text-sm'>
                      {errors.content.message}
                    </p>
                  )}
                </div>
              </CardContent>
              <CardFooter className='flex justify-end'>
                <Button type='submit'>Submit</Button>
              </CardFooter>
            </form>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
