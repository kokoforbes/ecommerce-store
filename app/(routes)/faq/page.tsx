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
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit cards, PayPal, and Apple Pay for secure and easy payments.",
  },
  {
    question: "Can I change or cancel my order after placing it?",
    answer:
      "You can request changes or cancellations within 12 hours of placing your order. Please contact our customer support team as soon as possible.",
  },
  {
    question: "Do you offer gift wrapping?",
    answer:
      "Yes, we offer gift wrapping for an additional fee. You can select this option during checkout.",
  },
  {
    question: "Are there any discounts for bulk orders?",
    answer:
      "Yes, we offer discounts for bulk purchases. Please contact our sales team for more information.",
  },
  {
    question: "What should I do if my item arrives damaged?",
    answer:
      "If your item arrives damaged, please contact us within 48 hours of delivery with photos of the damage, and we will assist you with a replacement or refund.",
  },
  {
    question: "Do you have a loyalty program?",
    answer:
      "Yes, we have a loyalty program where you can earn points for purchases and redeem them for discounts or free products.",
  },
  {
    question: "How do I create an account?",
    answer:
      "You can create an account by clicking on the 'Sign Up' button on the top-right corner of our website and filling out the registration form.",
  },
  {
    question: "Can I return a sale item?",
    answer:
      "Sale items are final and cannot be returned unless they arrive damaged or defective.",
  },
  {
    question: "Do you provide product warranties?",
    answer:
      "Yes, many of our products come with a manufacturer's warranty. Details are included with the product or available on the product page.",
  },
  {
    question: "How can I contact customer service?",
    answer:
      "You can contact our customer service team via email at support@example.com or by calling our toll-free number at 1-800-123-4567.",
  },
  {
    question: "Do you offer eco-friendly packaging?",
    answer:
      "Yes, we are committed to sustainability and use eco-friendly packaging whenever possible.",
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
    <div className='bg-white px-4 py-8'>
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

        <div className='mb-16'>
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
