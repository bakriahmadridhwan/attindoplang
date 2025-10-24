import { GlanceComponent } from "./_components/glance";
import { PurposeComponent } from "./_components/purpose";
import { VisiMisiComponent } from "./_components/visi-misi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profil | Pondok Pesantren AT-TIN",
  description: "Website Resmi Pondok Pesantren AT-TIN Doplang Purworejo",
};

export default function Profil() {
  return (
    <main>
      <GlanceComponent />
      <VisiMisiComponent />
      <PurposeComponent />
    </main>
  );
}
