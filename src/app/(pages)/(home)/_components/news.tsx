"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

interface NewsProps {
  title?: string;
  description?: string;
}

interface NewsItem {
  id: number;
  title: string;
  description: string;
  image_url: string;
}

const NewsComponent = ({
  title = "Informasi Terbaru",
  description = "Informasi terbaru mengenai Pondok Pesantren AT-TIN",
}: NewsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [news, setNews] = useState<NewsItem[]>([]);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const supabase = createClient();

  useEffect(() => {
    const fetchNews = async () => {
      const { data, error } = await supabase
        .from("information_images")
        .select("*");
      if (error) {
        console.error("Error fetching news:", error);
      } else {
        setNews(data || []);
      }
    };
    fetchNews();
  }, []);

  return (
    <section className="pt-10 lg:pt-20 px-4 xl:px-0 2xl:px-[136px]">
      <div className="container mx-auto">
        <div className="mx-auto flex max-w-7xl flex-col gap-6">
          <h2 className="text-pretty text-3xl font-semibold md:text-4xl lg:text-5xl">
            {title}
          </h2>
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <p className="text-muted-foreground">{description}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
              <div>
                <div
                  key={item.id}
                  className="aspect-square w-full overflow-hidden rounded-xl cursor-pointer"
                >
                  <Image
                    src={item.image_url}
                    alt={item.title || "Berita"}
                    width={1000}
                    height={1000}
                    className="w-full h-full object-cover hover:scale-110 ease-in-out duration-300"
                    onClick={() => openModal(item.image_url)}
                  />
                </div>
                <p className="mt-4 text-xl font-medium text-pretty leading-relaxed">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {isModalOpen && selectedImage && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 transition-opacity duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div className="relative max-w-full max-h-full p-4 flex flex-col items-center">
            <Image
              src={selectedImage}
              alt="Fullscreen image"
              width={1200}
              height={1200}
              className="max-w-full max-h-full object-contain"
            />
            {/* <Button className="rounded-full mt-4 cursor-pointer absolute" onClick={closeModal}>Tutup</Button> */}
          </div>
        </div>
      )}
    </section>
  );
};

export { NewsComponent };
