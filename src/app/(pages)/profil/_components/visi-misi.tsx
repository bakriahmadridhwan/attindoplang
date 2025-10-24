"use client";

import { Code, Cog, PenTool, Shrub } from "lucide-react";

const VisiMisiComponent = () => {
  const services = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Visi",
      description:
        "Mendorong anak-anak sekolah yang tinggal di pesantren untuk lebih menyadari pentingnya memanfaatkan waktu setelah kegiatan belajar mengajar (KBM) di sekolah, sehingga mereka lebih memilih tinggal di pesantren daripada di kos.",
      items: ["Market Research", "User Personas", "Competitive Analysis"],
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Misi",
      description:
        "Menyelenggarakan kegiatan pembelajaran yang islami di sekolah dengan memberikan materi-materi agama.",
      items: ["UI/UX Design", "Prototyping", "Interaction Design"],
    },
  ];

  return (
    <section className="px-4 xl:px-0 2xl:px-[136px] pt-10 lg:pt-20 container mx-auto">
      <div className="container mx-auto">
        <div className="mx-auto space-y-12">
          {/* <div className="space-y-4 text-center">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Services
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg tracking-tight md:text-xl">
              We craft digital experiences that captivate and convert, bringing
              your vision to life.
            </p>
          </div> */}

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="border-border bg-accent/5 transition-all duration-300 ease-in-out hover:border-[#129915] space-y-6 rounded-lg border p-8 hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-bold text-[#129915]">{service.title}</h3>
                </div>
                <p className="text-accent-foreground font-medium text-sm lg:text-lg italic leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { VisiMisiComponent };
