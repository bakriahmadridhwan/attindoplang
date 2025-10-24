"use client";

import { usePathname } from "next/navigation";

interface BannerProps {
  menu?: { title: string; url: string }[];
}

const BannerComponent = ({
  menu = [
    { title: "Login", url: "/login" },
    { title: "Santri", url: "/santri" },
    { title: "Alumni", url: "/pendataan-alumni" },
    { title: "Produk", url: "/produk" },
    { title: "Media", url: "/media" },
    // { title: "Kontak", url: "/kontak" },
  ]
}: BannerProps) => {

  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");
  const disableBanner = [
    "/login",
    "/register",
    "/pendaftaran-santri-baru",
    "/pendataan-alumni",
  ]

  if (isAdmin || disableBanner.includes(pathname)) {
    return null;
  }

  return (
    <section className="hidden md:flex bg-muted w-full py-3">
      <div className="container mx-auto xl:px-0 2xl:px-[136px]">
        <div className="flex justify-end items-center gap-2">
          <div className="flex items-center space-x-8 text-sm underline">
            {menu.map((item, index) => (
              <a key={`menu-${index}`} href={item.url}>
                {item.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { BannerComponent };

