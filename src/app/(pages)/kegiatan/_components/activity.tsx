import { Badge } from "@/components/ui/badge";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ActivityProps {
  badge?: string;
  heading?: string;
  description?: string;
  faqs?: FaqItem[];
}

const defaultFaqs: FaqItem[] = [
  {
    question: "Konsultasi (untuk Umum)",
    answer:
      "Setiap Hari Minggu, Senin",
  },
  {
    question: "Pengobatan Herbal (untuk Umum)",
    answer:
      "",
  },
  {
    question: "Pengajian Kitab Kuning (Santri)",
    answer:
      "Setiap Malam Senin, Selasa, Rabu, Kamis",
  },
  {
    question: "Ngaji Al Qur'an",
    answer:
      "Hafalan",
  },
  {
    question: "Mujahadah Dzikir Sholawat (untuk Umum)",
    answer:
      "Setiap Malam Sabtu Pon",
  },
  {
    question: "Khitobah",
    answer:
      "",
  },
  {
    question: "Al Barzanji",
    answer:
      "",
  },
  {
    question: "Pengajian Selapanan (untuk Umum)",
    answer:
      "Hari Jum'at Kliwon Siang (Sehabis Sholat Jum'at)",
  },
  {
    question: "Pengajian Maulid Nabi",
    answer:
      "",
  },
  {
    question: "Pengajian Rajab",
    answer:
      "",
  },
  {
    question: "Pengajian Rotibul Haddad, Manaqib, Sholawat Nariyah, Khotmil Qur'an /Yasin",
    answer:
      "Setiap Malam Sabtu Pahing",
  },
  {
    question: "Ekstrakurikuler",
    answer:
      "Silat, Rebana",
  },
  {
    question: "Kegiatan Lainnya",
    answer:
      "Kerja Bakti, Kumpul Alumni dan Halal Bihalal, Ziarah",
  },
  {
    question: "Sumber Daya",
    answer:
      "Melayani : Haji Furoda, Haji Reguler, Umroh Reguler, Badal Haji, Badal Umroh, Suvenir oleh- oleh Haji dan Umroh. Membuka Agen Penjualan ATINA Galon. Pelayanan Khitan Modern",
  },
];

const ActivityComponent = ({
  badge = "FAQ",
  heading = "Kegiatan",
  description = "Find out all the essential details about our platform and how it can serve your needs.",
  faqs = defaultFaqs,
}: ActivityProps) => {
  return (
    <section className="pt-10 lg:pt-20 px-4">
      <div className="container">
        <div className="text-center">
          {/* <Badge className="text-xs font-medium">{badge}</Badge> */}
          <h1 className="text-3xl font-semibold text-pretty md:text-4xl lg:text-4xl">{heading}</h1>
          {/* <p className="mt-6 font-medium text-muted-foreground">
            {description}
          </p> */}
        </div>
        <div className="mx-auto mt-14 max-w-xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-8 flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ActivityComponent };
