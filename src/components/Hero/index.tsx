"use client"
import React from 'react'
import Image from 'next/image'
import Autoplay from "embla-carousel-autoplay"

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
    <div className=" w-full h-auto flex  flex-col lg:flex-row justify-around items-center">
      {/* rightCarousel  */}
      <div className=" w-[320px] sm:w-[350px] md:w-[500px] lg:w-2/5 ">
      <Carousel
      plugins={[plugin.current]}
      className="w-full "
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
                    className="object-cover h-full w-full rounded-4xl"
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
      <div className="flex flex-col justify-between items-center gap-4 md:gap-10 ">
        <h1 className="bg-gradient-to-b  from-[#5dec86] to-[#b3cad8] text-transparent bg-clip-text
         text-4xl  md:text-6xl lg:text-7xl font-serif">Dijital</h1>
        <h6 className="text-white text-xl md:text-2l lg:text-3xl"> Curated Excellence</h6>
        <p className="text-white text-center text-base md:text-xl lg:text-2xl">
          Specialized mobile and laptop store with an unparalleled{' '}
        </p>
        <p className="text-emerald-300 text-base md:text-xl lg:text-2xl">collection of top brands</p>
      </div>
    </div>
  )
}

export default Hero
