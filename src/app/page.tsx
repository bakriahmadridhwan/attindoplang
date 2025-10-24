import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import Home from "./(pages)/(home)/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AT-TIN | Halaman Utama",
  description: "Website Pondok Pesantren AT-TIN Doplang Purworejo",
  openGraph: {
    title: "AT-TIN | Halaman Utama",
    description: "Website Pondok Pesantren AT-TIN Doplang Purworejo",
  },
};

export default function Root() {
  return <Home />;
}
