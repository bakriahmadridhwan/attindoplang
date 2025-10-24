import React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface ContactProps {
  title?: string;
  description?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  web?: { label: string; url: string };
}

const ContactComponent = ({
  title = "Kontak Kami",
  description = "Kami tersedia untuk pertanyaan, umpan balik, atau peluang kolaborasi. Beri tahu kami bagaimana kami dapat membantu!",
  phone = "(123) 34567890",
  whatsapp = "(123) 34567890",
  email = "email@example.com",
  web = { label: "attindoplang.vercel.app", url: "https://attindoplang.vercel.app" },
}: ContactProps) => {
  return (
    <section className="px-4 pt-10 lg:pt-20 container mx-auto xl:px-0 2xl:px-[136px]">
      <div className="container mx-auto">
        <div className="mx-auto flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Detail Kontak
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Telepon: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">Web: </span>
                  <a href={web.url} target="_blank" className="underline">
                    {web.label}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.680676474598!2d109.99203647577026!3d-7.717370192300612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7aebd1ac7442bf%3A0x4f8d00e1e4dbec05!2sPONDOK%20PESANTREN%20AT-TIN%20DOPLANG!5e0!3m2!1sen!2sid!4v1759687143513!5m2!1sen!2sid" loading="lazy" className="w-full md:w-[500px] h-[350px] md:h-[450px]"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ContactComponent };
