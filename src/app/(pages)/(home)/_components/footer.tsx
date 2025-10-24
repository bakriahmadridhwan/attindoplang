"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
  FaMailBulk,
} from "react-icons/fa";

import Attin from "@/assets/images/logos/logoattin.png";
import { usePathname } from "next/navigation";

interface FooterProps {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Menu",
    links: [
      { name: "Beranda", href: "/" },
      { name: "Profil", href: "/profil" },
      { name: "Informasi", href: "/informasi" },
      { name: "Kegiatan", href: "/kegiatan" },
      { name: "Kontak", href: "/contact" },
      { name: "Pendaftaran Santri Baru", href: "/pendaftaran-santri-baru" },
    ],
  },
  {
    title: "Layanan",
    links: [
      { name: "Konsultasi", href: "/konsultasi" },
      { name: "Pengobatan Herbal", href: "#" },
      { name: "Kegiatan", href: "/kegiatan" },
      { name: "Khitan Modern", href: "#" },
      { name: "Haji dan Umroh", href: "#" },
    ],
  },
  {
    title: "Sumber Daya",
    links: [
      { name: "Login", href: "/login" },
      { name: "Santri", href: "/santri" },
      { name: "Alumni", href: "/alumni" },
      { name: "Produk", href: "/produk" },
      { name: "Media", href: "/media" },
      { name: "Kontak", href: "/kontak" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <FaMailBulk className="size-5 hover:text-[#129915]" />,
    href: "mailto:ppattindoplangpwr@gmail.com",
    label: "Email",
  },
  {
    icon: <FaWhatsapp className="size-5 hover:text-[#129915]" />,
    href: "https://wa.me/+628122718152",
    label: "WhatsApp",
    target: "_blank",
  },
  {
    icon: <FaInstagram className="size-5 hover:text-[#129915]" />,
    href: "https://www.instagram.com/pp_attindoplang/",
    label: "Instagram",
  },
  // { icon: <FaFacebook className="size-5" />, href: "#", label: "Facebook" },
  // { icon: <FaTwitter className="size-5" />, href: "#", label: "Twitter" },
  // { icon: <FaLinkedin className="size-5" />, href: "#", label: "LinkedIn" },
  {
    icon: <FaTiktok className="size-5 hover:text-[#129915]" />,
    href: "https://www.tiktok.com/@khusnimubarok_",
    label: "Tiktok",
  },
  {
    icon: <FaYoutube className="size-5 hover:text-[#129915]" />,
    href: "#",
    label: "Youtube",
  },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const FooterComponent = ({
  logo = {
    url: "#",
    src: "https://www.shadcnblocks.com/images/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Pondok Pesantren AT-TIN Doplang Purworejo",
  },
  sections = defaultSections,
  description = "Jl. Mr. Wilopo, No. 6, RT 03/RW 02, Doplang, Kecamatan Purworejo, Kabupaten Purworejo, Jawa Tengah 54114",
  socialLinks = defaultSocialLinks,
  copyright = "© 2025 AT-TIN Doplang Purworejo. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: FooterProps) => {

  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const disableFooter = [
    "/login",
    "/register",
    "/pendaftaran-santri-baru",
    "/pendataan-alumni",
  ]

  if (isAdmin || disableFooter.includes(pathname)) {
    return null;
  }

  return (
    <section className="mt-20 pt-20 border-t-[8px] border-t-[#129915] px-4 lg:px-0">
      <div className="container mx-auto 2xl:px-14">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Link href={logo.url}>
                <Image src={Attin} alt={logo.alt} width={32} height={32} />
              </Link>
              <h2 className="text-xl font-bold">
                <span className="text-[#129915]">Pondok Pesantren AT-TIN</span>{" "}
                Doplang Purworejo
              </h2>
            </div>
            <p className="max-w-[70%] text-sm text-muted-foreground">
              {description}
            </p>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1">{copyright}</p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li key={idx} className="hover:text-primary">
                <a href={link.href}> {link.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export { FooterComponent };
