"use client"
import { ExternalLink } from "lucide-react";


import { Button } from "@/components/ui/button";

import logo from "@/assets/images/logos/logoattin.png";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import Link from "next/link";
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
import Slide1 from "../../../../../public/assets/cover/slide1.jpg";
import Slide2 from "../../../../../public/assets/cover/slide2.jpg";
import Slide3 from "../../../../../public/assets/cover/slide3.jpg";
import Slide4 from "../../../../../public/assets/cover/slide4.jpg";
import Slide5 from "../../../../../public/assets/cover/slide5.jpg";
import Slide6 from "../../../../../public/assets/cover/slide6.jpg";
import Slide7 from "../../../../../public/assets/cover/slide7.jpg";

import React from "react";

const HeroComponent = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: true,
      stopOnLastSnap: false,
      stopOnMouseEnter: true,
    })
  )

  const images = [Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7];

  const words = [
    " PONDOK PESANTREN AT-TIN",
    "AT-TIN DOPLANG",
    "PONPES AT-TIN",
    "AT-TIN",
  ];
  return (
    <section className="relative overflow-hidden py-32 h-screen flex items-center justify-center">
      <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
        <Image
          alt="background"
          src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
          width={1200}
          height={1200}
          priority
          className="opacity-90 [mask-image:radial-gradient(75%_75%_at_center,white,transparent)] object-cover w-full h-full md:w-fit md:h-fit"
        />
      </div>
      <div className="relative z-10 container mx-auto lg:mx-auto px-4 lg:px-0">
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="flex flex-col items-center gap-6 text-center">
            <div>
              <Carousel plugins={[plugin.current]} onMouseEnter={() => plugin.current.stop()} onMouseLeave={() => plugin.current.play()}>
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <Card className="p-0 overflow-hidden">
                          <CardContent className="flex items-center justify-center p-0">
                            <Image src={image} alt="Attin" width={500} height={500} className="object-cover w-full h-[200px] md:h-[300px]" />
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
            {/* <div className="rounded-xl bg-background/30 p-4 backdrop-blur-sm border shadow-sm">
              <Image
                src={logo}
                alt="pondok pesantren attin doplang purworejo"
                width={50}
                height={50}
              />
            </div> */}
            <div>
              <h1 className="mb-6 text-2xl font-bold tracking-tight text-pretty lg:text-5xl leading-tight">
                <FlipWords words={words} className="text-[#129915] dark:text-[#129915] " />{" "}
                <br />
                {/* <span className="text-[#129915]">
                  PONDOK PESANTREN <span className=""> AT-TIN </span>
                </span>
                <br /> */}
                DOPLANG PURWOREJO
              </h1>
              <p className="mx-auto max-w-3xl text-muted-foreground lg:text-lg">
                Kelurahan <span className="font-medium">Doplang</span>, Kecamatan <span className="font-medium">Purworejo</span>, Kabupaten <span className="font-medium">Purworejo</span>, Provinsi <span className="font-medium">Jawa Tengah</span>.
              </p>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              {/* <Button className="shadow-sm transition-shadow hover:shadow bg-[#129915] hover:bg-green-600">
                <Link href="/media" className="text-white">Informasi</Link>
              </Button> */}
              {/* <Button variant="outline" className="group">
                <Link href="/informasi">Informasi</Link>
              </Button> */}
              <Button variant="outline" className="group">
                <Link href="/kegiatan">Kegiatan</Link>
              </Button>
              <Button className="shadow-sm transition-shadow hover:shadow bg-[#129915] hover:bg-green-600">
                <Link href="/konsultasi-pengobatan" className="text-white">Konsultasi dan Pengobatan</Link>
                <ExternalLink className="ml-2 h-4 transition-transform group-hover:translate-x-0.5 text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { HeroComponent };

