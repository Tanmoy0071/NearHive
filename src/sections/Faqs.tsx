"use client";
import Tag from "@/components/tag";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How easy is it to create an online store on this platform?",
        answer: "Creating an online store on our platform is incredibly simple and requires no coding or website-building skills. With just a few steps, you can set up your store, list products, and start selling online in minutes.",
    },
    {
        question: "Do customers and store owners need separate apps?",
        answer: "No, our platform is designed as a single app for everyone. Both customers and store owners use the same app, making the process seamless and user-friendly.",
    },
    {
        question: "How does this platform help save costs compared to traditional methods?",
        answer: "Starting a digital store on our platform eliminates the need for expensive website or app development, hiring digital marketing agencies, and renting offline spaces. We provide an all-in-one solution at an affordable cost.",
    },
    {
        question: "Can I manage everything related to my store through this platform?",
        answer: "Absolutely! Our platform is a one-stop solution for managing inventory, listing items, handling orders, and coordinating deliveries, making store management hassle-free.",
    },
    {
        question: "Do I need technical skills to start an online store here?",
        answer: "Not at all! The platform is designed for everyone, even those with zero technical skills. You don't need to know coding or web development—just follow simple steps, and your store will be live.",
    },
    {
        question: "Can I sell any type of product on this platform?",
        answer: "Yes, you can sell almost anything—from fashion and electronics to groceries and more. The platform is versatile and supports a wide variety of products.",
    },
    {
        question: "Is this platform affordable for small businesses?",
        answer: "Absolutely! This platform is designed to reduce costs for small businesses by eliminating the need for expensive website development, app creation, and digital marketing fees.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState (0);
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center">Questions? We&apos;ve got <span className="text-lime-400">answers</span></h2>
                <div className="mt-12 flex flex-col gap-6 ">
                    {faqs.map((faq, faqIndex) => (
                        <div key={faq.question} className="bg-neutral-900 rounded-2xl border border-white/10 p-6 ">
                            <div className="flex justify-between items-center" onClick={() => setSelectedIndex(faqIndex)}>
                                <h3 className="font-medium ">{faq.question}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={twMerge("feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",selectedIndex === faqIndex && 'rotate-45')}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                            <AnimatePresence>  
                            {selectedIndex === faqIndex && (
                                <motion.div initial={{height: 0,marginTop: 0}} animate={{height: "auto", marginTop: 24}} exit={{height: 0,marginTop: 0}} className={twMerge("overflow-hidden")}>
                                    <p className="text-white/50">{faq.answer}</p>
                                </motion.div>  
                            )}
                            </AnimatePresence>
                            
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
