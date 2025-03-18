import Tag from "@/components/tag";
// import { div } from "framer-motion/client";
// import figmaIcon from '@/assets/images/figma-logo.svg';
// import notionIcon from '@/assets/images/notion-logo.svg';
// import slackIcon from '@/assets/images/slack-logo.svg';
// import relumeIcon from '@/assets/images/relume-logo.svg';
// import framerIcon from '@/assets/images/framer-logo.svg';
// import githubIcon from '@/assets/images/github-logo.svg';
import restaurantimg from '@/assets/images/Frame 624962.png'
import Cafeimg from '@/assets/images/Frame 624963.png'
import Clothingimg from '@/assets/images/Frame 624967.png'
import Bakeryimg from '@/assets/images/Frame 624970.png'
import Groceryimg from '@/assets/images/Frame 624969.png'
import Stationaryimg from '@/assets/images/Frame 624971.png'
// import Image from "next/image";
import IntegrationColumn from "@/components/Integrationcloumns";

const integrations = [
    { name: "Restaurants", icon: restaurantimg, description: "Discover flavors, crafted just for you." },
    { name: "Cafe", icon: Cafeimg, description: "Your perfect brew, anytime, anywhere." },
    { name: "Bakery", icon: Bakeryimg, description: "Fresh treats, just a click away." },
    { name: "Grocery", icon: Groceryimg, description: "Coming Soon!!" },    
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return <section className="py-24 overflow-hidden ">
        <div className="container">
            <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                <div>
                    <Tag>Categories</Tag>
                    <h2 className="text-6xl font-medium mt-6">Success starts{" "} <span className="text-[#F1B729] font-mine"> here.</span></h2>
                    <p className="text-white/50 mt-4 text-lg">Get the platform that&apos;s built for your growth. Whether it&apos;s tracking performance, generating promotions, or building your community, everything you need to succeed is in one place.</p>
                </div>
                <div>
                    <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden grid md:grid-cols-2 gap-4 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                        <IntegrationColumn integrations={integrations}/>
                        <IntegrationColumn integrations={integrations.slice().reverse()} 
                        reverse
                        className="hidden md:flex"/>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}


