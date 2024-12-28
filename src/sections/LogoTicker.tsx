"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "Quantum", color: "#FFFFFF" },
    { name: "Acme Corp", color: "#FFFFFF" },
    { name: "Echo Valley", color: "#FFFFFF" },
    { name: "Pulse", color: "#FFFFFF" },
    { name: "Outside", color: "#FFFFFF" },
    { name: "Apex", color: "#FFFFFF" },
    { name: "Celestial", color: "#FFFFFF" },
    { name: "Twice", color: "#FFFFFF" }
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <h3 className="text-center text-white text-4xl font-medium">
                    The <span className="text-[#a3e635]">Team.</span>
                </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div 
                        animate={{x: "-50%"}} 
                        transition={{
                            duration: 25, 
                            ease: 'linear', 
                            repeat: Infinity
                        }} 
                        className="flex flex-none gap-24 pr-24"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map((logo) => (
                                    <div
                                        key={logo.name}
                                        className="w-16 h-16 rounded-full"
                                        style={{ backgroundColor: logo.color }}
                                        title={logo.name}
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}