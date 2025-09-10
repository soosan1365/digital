"use client"
import React from 'react'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay";
import AppleLogo from "@/assets/AppleLogo.png"
import LenovoLogo from "@/assets/LenovoLogo.png"
import SamsungLogo from "@/assets/SamsungLogo.png"
import AsusLogo from "@/assets/AsusLogo.png"


import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import apple from "@/assets/apple.png";
import lenovo from "@/assets/lenovo.jpg";
import sumsung from "@/assets/sumsung.jpg";
import microsoft from "@/assets/microsoft.jpg";

const Hero = () => {

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <div className="relative w-full   flex flex-col justify-center  ">
      {/* rightCarousel  */}
      <div className="w-[60%] md:w-[75%] mx-auto  grid items-center justify-center grid-cols-1
       lg:grid-cols-2  gap-10 ">
     <div className='mx-auto sm:w-[90%]  md:w-98% '>
      <Carousel
      plugins={[plugin.current]}
      className="w-full mt-20 lg:mt-24 "
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {[apple,lenovo,sumsung,microsoft].map((image,index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card className='bg-transparent shadow-none border-0 '>
                <CardContent className="flex  items-center
                 justify-center object-cover ">
                   <Image
                    src={image}
                    alt=""
                    className="object-cover h-full w-full rounded-tr-[50%]"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    
      </div>
      {/* leftcontent */}
      <div className="flex flex-col justify-between items-center  font-extrabold
      leading-[2.5rem] md:leading-[4rem] md:mt-16 lg:mt-22 gap-2 sm:gap-5  lg:gap-9 ">
        <h1 className="bg-gradient-to-b  from-[#68d687]  to-[#8eaac4] text-transparent
         bg-clip-text text-2xl  md:text-3xl  lg:text-4xl xl:text-7xl font-serif">Dijital</h1>
         <div className='flex flex-col justify-center items-center  md:gap-3 '>
           <p className=" text-gray-700 dark:text-white text-xl md:text-2xl  xl:text-3xl"> Curated Excellence</p>
        <p className=" text-gray-700 dark:text-white text-center text-sm md:text-base lg:text-xl 
         ">
          Specialized mobile and laptop store with an unparalleled
        </p>
        <p className="text-emerald-400 text-base md:text-xl lg:text-2xl">collection of top brands</p>
         </div>
       <div className=' w-[4vh] md:w-[20vh] flex  justify-center items-center gap-6 md:gap-10 '> 
        <Image src={AppleLogo} alt="apple"/>
        <Image src={SamsungLogo} alt="SamsungLogo"/>
        <Image src={LenovoLogo} alt="LenovoLogo"/>
        <Image src={AsusLogo} alt="AsusLogo"/>

       </div>
      </div>
    </div>
    </div>
  )
}

export default Hero
