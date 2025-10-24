"use client";

import {
  AlignLeft,
  GalleryVerticalEnd,
  Lightbulb,
  ListChecks,
  RefreshCcw,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Slide7 from "../../../../../public/assets/cover/slide7.jpg";

const KonsultasiPengobatanComponent = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement>>({});

  useEffect(() => {
    const sections = Object.keys(sectionRefs.current);

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    let observer: IntersectionObserver | null = new IntersectionObserver(
      observerCallback,
      {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      },
    );

    sections.forEach((sectionId) => {
      const element = sectionRefs.current[sectionId];
      if (element) {
        observer?.observe(element);
      }
    });

    return () => {
      observer?.disconnect();
      observer = null;
    };
  }, []);

  const addSectionRef = (id: string, ref: HTMLElement | null) => {
    if (ref) {
      sectionRefs.current[id] = ref;
    }
  };

  return (
    <section className="pt-20 lg:pt-32">
      <div className="container max-w-7xl mx-auto px-4 lg:px-0">
        <div className="relative grid-cols-3 gap-20 lg:grid">
          <div className="lg:col-span-2">
            <div className="overflow-hidden">
              <Badge className="bg-[#129915] text-white">PESANTREN AT-TIN</Badge>
              <h1 className="mt-3 text-3xl font-extrabold">
                Jadwal Konsultasi & Pengobatan
              </h1>
              <p className="text-muted-foreground mt-2 text-lg">
                Konsultasi & Pengobatan
              </p>
              <Image
                src={Slide7}
                alt="placeholder"
                width={500}
                height={500}
                className="my-8 aspect-video w-full rounded-md object-cover hover:scale-110 ease-in-out duration-300"
              />
            </div>
            <section
              id="section1"
              ref={(ref) => addSectionRef("section1", ref)}
              className="prose dark:prose-invert mb-8"
            >
              <h2>Jadwal</h2>
              <div className="ml-3.5">
                <div className="relative flex items-start pb-2">
                  <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <p className="text-xs font-bold">1</p>
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      Konsultasi
                    </h3>
                    <p>
                      Senin, Selasa, Rabu, Jum&apos;at <br /> Jam 13.00 - 17.00 WIB
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start pb-2">
                  <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <p className="text-xs font-bold">2</p>
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      Pengobatan
                    </h3>
                    <p>
                      Kamis Jam 13.00 - 15.00 WIB
                      <br />
                      Minggu Jam 10.00 - 12.00 WIB
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start pb-2">
                  <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <p className="text-xs font-bold">3</p>
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      Pengajian
                    </h3>
                    <p>
                      Setiap hari Jum&apos;at Kliwon
                      <br />
                      Jam 13.30 - 16.00 WIB
                    </p>
                  </div>
                </div>
                <div className="relative flex items-start pb-2">
                  <div className="bg-border/70 absolute top-[2.75rem] h-[calc(100%-2.75rem)] w-px"></div>
                  <div className="absolute ml-[-14px] py-2">
                    <div className="bg-muted flex size-7 shrink-0 items-center justify-center rounded-lg">
                      <p className="text-xs font-bold">4</p>
                    </div>
                  </div>
                  <div className="pl-12">
                    <h3 className="mt-2 text-base font-semibold">
                      Libur
                    </h3>
                    <p>
                      Setiap hari Sabtu
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section
              id="section2"
              ref={(ref) => addSectionRef("section2", ref)}
              className="prose dark:prose-invert mb-8"
            >
              <h2>Tata Cara Pengobatan</h2>
              <ol type="a">
                <li>Pasien datang ke PP AT-TIN kemudian mendaftar atau daftar melalui no telp: <a href="tel:08123456789">081 227 181 52</a></li>
                <li>Pasien laki-laki membawa ayam jantan, pasien perempuan membawa ayam betina</li>
                <li>Saat pelaksanaan pengobatan bagi pasien muslim: membaca <span className="font-bold underline">Syahadat</span>
                  <br />
                  dan bagi pasien non muslim baca doa sesuai dengan keyakinannya</li>
                <li>Untuk menjaga etika, dimohon pasien dan pengantar berpakaian sopan dan menutup aurat</li>
                <li>Terima kasih, Jazakumullah Ahsanal Jaza, Insyaallah Qobul</li>
              </ol>
            </section>
          </div>

        </div>
      </div>
    </section>
  );
};

export { KonsultasiPengobatanComponent };
