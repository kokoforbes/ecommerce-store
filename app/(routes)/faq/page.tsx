"use client";

import Container from "@/components/ui/container";
import Link from "next/link";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Button from "@/components/ui/button";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy for all items in their original condition.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "Shipping typically takes 3-5 business days within the continental US.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes, we ship to select countries internationally. Shipping times and fees may vary.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order ships, you will receive a tracking number via email.",
  },
];

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-white px-4 py-8 min-h-screen'>
      <Container>
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold'>Frequently Asked Questions</h1>
          <Link
            href='/'
            className='text-sm font-bold text-black hover:text-gray-700'
          >
            Back Home
          </Link>
        </div>

        <div className='mb-6'>
          <Input
            type='search'
            placeholder='Search FAQs...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='mb-2'
          />
          <Button onClick={() => setSearchTerm("")}>Clear</Button>
        </div>
        <div className='space-y-4'>
          {filteredFAQs.map((faq, index) => (
            <div key={index} className='border p-4 rounded'>
              <h2 className='font-bold mb-2'>{faq.question}</h2>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default FAQPage;
