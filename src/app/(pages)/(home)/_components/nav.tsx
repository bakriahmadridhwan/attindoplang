"use client";
import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function NavRelative() {
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

  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const disableNavbar = [
    "/login",
    "/register",
    "/pendaftaran-santri-baru",
    "/pendataan-alumni",
  ]

  if (isAdmin || disableNavbar.includes(pathname)) {
    return null;
  }
  return (
    <Navbar className="">
      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <NavbarButton variant="primary" href="/pendaftaran-santri-baru" className="bg-[#129915] text-white">PENDAFTARAN SANTRI</NavbarButton>
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
  )
}
