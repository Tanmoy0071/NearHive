// import { a, section } from "framer-motion/client";
import logoImage from '@/assets/images/Logo for website.png'; 
import Image from "next/image";

const footerLinks = [
    { href: "#", label: "Contact" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms & Conditions" },
];

export default function Footer() {
    return (
        <section className="py-16">
            <div className="container">
                <div className="flex flex-col items-center gap-6 ">
                    <div>
                        <Image src={logoImage} className='lg:w-[14vw] sm:w-[44vw]' alt="Layers Logo"/>
                    </div>
                    <div>
                        <nav className="flex gap-6">
                            {footerLinks.map((links, index) => (
                                <a key={index} href={links.href} className="text-white/50 text-sm">{links.label}</a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}