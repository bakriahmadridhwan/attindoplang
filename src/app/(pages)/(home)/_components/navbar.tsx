"use client";
import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { HeroComponent } from "./hero";
import { AboutComponent } from "./about";
import { LayananComponent } from "./service";
import VideoComponent from "./video";

export function NavbarComponent() {
  const navItems = [
    {
      name: "PROFIL",
      link: "/profil",
    },
    {
      name: "INFORMASI",
      link: "/informasi",
    },
    {
      name: "KEGIATAN",
      link: "/kegiatan",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar className="">
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton variant="primary" href="/pendaftaran-santri" className="bg-[#129915] text-white">PENDAFTARAN SANTRI</NavbarButton>
            <div className="z-10">
              <DarkmodeToggle />
            </div>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <DarkmodeToggle />
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            {navItems.map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4">
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="/login"
              >
                LOGIN
              </NavbarButton>
              <NavbarButton
                onClick={() => setIsMobileMenuOpen(false)}
                variant="primary"
                className="w-full"
                href="/pendaftaran-santri"
                style={{ backgroundColor: "#129915", color: "white" }}
              >
                PENDAFTARAN SANTRI
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
      <DummyContent />

      {/* Navbar */}
    </div>
  );
}

const DummyContent = () => {
  return (
    <div className="">
      {/* <h1 className="mb-4 text-center text-3xl font-bold">
        <span className="text-[#129915]">PONDOK PESANTREN AT-TIN</span> DOPLANG PURWOREJO
      </h1>
      <p className="mb-10 text-center text-sm text-zinc-500">Kelurahan <span className="font-medium">Doplang</span>, Kecamatan <span className="font-medium">Purworejo</span>, Kabupaten <span className="font-medium">Purworejo</span>, Provinsi <span className="font-medium">Jawa Tengah</span>.
      </p> */}
      <HeroComponent />
      <AboutComponent />
      <VideoComponent />
      <LayananComponent />
      {/* <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        {[
          {
            id: 1,
            title: "The",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 2,
            title: "First",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 3,
            title: "Rule",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 4,
            title: "Of",
            width: "md:col-span-3",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 5,
            title: "F",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 6,
            title: "Club",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 7,
            title: "Is",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 8,
            title: "You",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 9,
            title: "Do NOT TALK about",
            width: "md:col-span-2",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
          {
            id: 10,
            title: "F Club",
            width: "md:col-span-1",
            height: "h-60",
            bg: "bg-neutral-100 dark:bg-neutral-800",
          },
        ].map((box) => (
          <div
            key={box.id}
            className={`${box.width} ${box.height} ${box.bg} flex items-center justify-center rounded-lg p-4 shadow-sm`}
          >
            <h2 className="text-xl font-medium">{box.title}</h2>
          </div>
        ))}
      </div> */}
    </div>
  );
};
