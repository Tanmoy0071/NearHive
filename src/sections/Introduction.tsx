"use client";
import Tag from "@/components/tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function Introduction() {
    const text = `You're reaching for a better way to shop, but traditional tools hold you back.`;
    const words = text.split(" ");
    const scrollTarget = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndex = useTransform(scrollYProgress, [0, 1], [0, words.length]);

    useEffect(() => {
        const unsubscribe = wordIndex.on("change", (latest) => {
            setCurrentWord(Math.floor(latest));
        });

        return () => unsubscribe();
    }, [wordIndex]);

    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20">
                    <div className="flex justify-center">
                        <Tag>Introducing Tnent Store</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Your ambitions deserve better.</span>{" "}
                        <span className="text-white/15">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        index < currentWord ? "text-white" : ""
                                    )}
                                >
                                    {word}{" "}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            That&apos;s why we built Tnent Store.
                        </span>
                    </div>
                </div>
                <div className="h-[150vh]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
