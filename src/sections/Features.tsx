import Tag from "@/components/tag";
import FeatureCard from "@/components/FeatureCard";
import SeamlessShopping from "@/assets/images/wmremove-transformed (1).jpeg.jpg";
import Hyperlocal from "@/assets/images/wmremove-transformed.jpeg.jpg"
import deliveryservice from "@/assets/images/wmremove-transformed.png"
import Image from "next/image";

const features = [
    "Analytics",
    "Inventory",
    "Earnings",
    "Community",
    "Promotions",
    "Middleman",
    "Marketplace",
];

export default function Features() {
    return <section className="py-24">
        <div className="container">
            <div className="flex justify-center">
                <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">We are not just another<span className="text-[#F1B729]"> Ecommerce <span className="font-mine">Store</span></span></h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                <FeatureCard title="Hyperlocal Marketplace" description="Find stores and products near you." className="md:col-span-2 lg:col-span-1">
                <div className="flex h-[172px] items-center justify-center bg-white rounded-lg">                         
  <Image 
    src={Hyperlocal} 
    alt="Hyperlocal marketplace" 
    className="w-auto h-full max-w-full object-contain"
  />                   
</div>
                    {/* <div className="aspect-video flex items-center justify-center">
                        <Avatar className="z-40">
                            <Image src={avatar1} alt="avatar1" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-green-500 z-30">
                            <Image src={avatar2} alt="avatar2" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-blue-500 z-20">
                            <Image src={avatar3} alt="avatar3" className="rounded-full"/>
                        </Avatar>
                        <Avatar className="-ml-6 border-transparent">
                            <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                {Array.from({length: 3}).map((_,i) =>(
                                    <span className="size-1.5 rounded-full bg-white" key={i}></span>

                                ))}
                            </div>
                        </Avatar>
                    </div> */}
                    
                </FeatureCard>
                <FeatureCard title="Seamless Shopping" description=" Browse and purchase items
from any store." className="md:col-span-2 lg:col-span-1">
     <div className="flex h-[172px] items-center justify-center bg-white rounded-lg">                         
     <Image 
    src={SeamlessShopping} 
    alt="Hyperlocal marketplace" 
    className="w-auto h-full max-w-full object-contain"
  />                
                                          </div>  
                    {/* <div className="aspect-video flex items-center justify-center">
                        <p className="text-4xl font-extrabold text-white/20 text-center">
                            We&apos;ve achieved {" "} <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">incredible</span> {" "} growth this year  
                        </p>
                    </div> */}
                </FeatureCard>
                <FeatureCard title="Delivery Service" description="Convenient delivery options for
your purchases within 20 minutes." className="md:col-span-2 md:col-start-2 lg:col-span-1">
     <div className="flex h-[172px] items-center justify-center bg-white rounded-lg">                         
     <Image 
    src={deliveryservice} 
    alt="Hyperlocal marketplace" 
    className="w-auto h-full max-w-full object-contain"
  />               
                                          </div>  
                    {/* <div className="aspect-video flex items-center justify-center gap-3">
                        <div className="bg-gray-300 text-black border rounded-lg border-transparent px-4 py-1">shift</div>
                        <div className="bg-gray-300 text-black border rounded-lg border-transparent px-2 py-1">alt</div>
                        <div className="bg-gray-300 text-black border rounded-lg border-transparent px-3 py-1">c</div>
                    </div> */}
                </FeatureCard>   
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {features.map((feature) => (
                    <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center md:px-5 md:py-2">
                        <span className="bg-[#F1B729] text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">&#10038;</span>
                        <span className="font-medium md:text-lg">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>;
}
