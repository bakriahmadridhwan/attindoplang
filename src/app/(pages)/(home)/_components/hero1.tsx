"use client"

import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

import Image1 from "@/assets/cover/image1.jpg";
import Image2 from "@/assets/cover/image2.jpg";
import Image3 from "@/assets/cover/image3.jpg";
import Image from "next/image"

export function HeroComponent1() {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
      stopOnLastSnap: false,
      stopOnMouseEnter: true,
    })
  )

  const images = [Image1, Image2, Image3];
  return (
    <section className="flex justify-center pb-[1000px]">
      <div className="md:w-2/3 overflow-hidden md:overflow-visible">
        <Carousel plugins={[plugin.current]} onMouseEnter={() => plugin.current.stop()} onMouseLeave={() => plugin.current.play()}>
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="p-0 overflow-hidden">
                    <CardContent className="flex items-center justify-center p-0">
                      <Image src={image} alt="Attin" width={500} height={500} className="object-cover w-full h-[300px]" />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious /> */}
          {/* <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  )
}
