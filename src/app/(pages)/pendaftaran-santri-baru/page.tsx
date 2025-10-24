import FormStudent from "./_components/form-student";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pendaftaran Santri Baru | Pondok Pesantren AT-TIN",
};

export default function PendaftaranSantriBaruPage() {
  return <FormStudent />;
}
