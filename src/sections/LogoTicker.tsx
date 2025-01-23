"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import Image from "next/image";
import { div } from "framer-motion/client";
import Bakeryimg from '@/assets/images/Frame 624970.png'
import Groceryimg from '@/assets/images/Frame 624969.png'

const teamMembers = [
    { 
        name: "Kunal Deb", 
        role: "Jinpachi Ego",
        image: Groceryimg // Updated path
    },
    { 
        name: "Tanmoy Chakraborty", 
        role: "Mikage Reo",
        image: Groceryimg  // Add actual image path
    },
    { 
        name: "Subhrojyoti Sen", 
        role: "Oliver Aiku",
        image: Groceryimg // Add actual image path
    },
    { 
        name: "David Thompson", 
        role: "Product Manager",
        image: Groceryimg  // Add actual image path
    },
    { 
        name: "Olivia Patel", 
        role: "Lead Engineer",
        image: Groceryimg  // Add actual image path
    },
    { 
        name: "Alex Rivera", 
        role: "Marketing Head",
        image: Groceryimg  // Add actual image path
    },
    { 
        name: "Elena Kim", 
        role: "Operations Director",
        image: Groceryimg  // Add actual image path
    },
    { 
        name: "Ryan Murphy", 
        role: "Creative Lead",
        image: Groceryimg // Add actual image path
    }
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip" id="team">
            <div className="container" >
                <h3 className="text-center text-white text-4xl font-medium">
                    The <span className="text-[#f1b729] font-mine">Team.</span>
                </h3>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div 
                        animate={{x: "-50%"}} 
                        transition={{
                            duration: 25, 
                            ease: 'linear', 
                            repeat: Infinity
                        }} 
                        className="flex flex-none gap-8 pr-8"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {teamMembers.map((member) => (
                                    <div
                                        key={member.name}
                                        className="w-60 bg-[#171717] border-[0.2px] border-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-transform "
                                    >
                                        <div className="h-48 bg-[#171717] flex items-center justify-center relative ">
                                            {member.image ? (
                                                <div>
                                                <Image 
                                                    src={member.image} 
                                                    alt={member.name} 
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    className="object-cover"
                                                    priority={i === 0}
                                                />
                                                </div>
                                            ) : (
                                                <Camera className="w-16 h-16 text-gray-400" />
                                            )}
                                        </div>
                                        <div className="p-4 text-center">
                                            <h4 className="font-bold text-lg text-white">{member.name}</h4>
                                            <p className="text-[#7e7e7e] text-sm">{member.role}</p>
                                        </div>
                                    </div>
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}