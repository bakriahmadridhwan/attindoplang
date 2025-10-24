
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { ArrowRight } from "lucide-react";

interface Post {
  id: string;
  title: string;
  summary: string;
  video: string;
}

interface InformationProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const MediaComponent = ({
  tagline = "Latest Updates",
  heading = "Media",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "#",
  posts = [
    {
      id: "post-1",
      title: "Sedekah Alam",
      summary:
        "",
      video: "/assets/video/enam.mp4",
    },
    {
      id: "post-2",
      title: "Maulid Nabi Muhammad SAW 2025",
      summary:
        "",
      video: "/assets/video/lima.mp4",
    },
    {
      id: "post-3",
      title: "Idul Adha 2025",
      summary:
        "",
      video: "/assets/video/qurban.mp4",
    },
    {
      id: "post-4",
      title: "Halal Bihalal Alumni",
      summary:
        "",
      video: "/assets/video/halal.mp4",
    },
    {
      id: "post-5",
      title: "Mujahadah Dzikir Sholawat",
      summary:
        "",
      video: "/assets/video/empat.mp4",
    },
    {
      id: "post-6",
      title: "Ngaji",
      summary:
        "",
      video: "/assets/video/tiga.mp4",
    },
    {
      id: "post-7",
      title: "Mujahadah Dzikir Sholawat",
      summary:
        "",
      video: "/assets/video/dua.mp4",
    },
    {
      id: "post-8",
      title: "Al Barjanzi",
      summary:
        "",
      video: "/assets/video/satu.mp4",
    },
  ],
}: InformationProps) => {
  return (
    <section className="pt-10 lg:pt-20 px-4 xl:px-0 2xl:px-[136px]">
      <div className="container mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col gap-4 md:gap-0 justify-center items-center w-full">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post, index) => (
            <div key={index}>
              <video
                controls
                className=""
                src={post.video}
              />
              <h1 className="text-lg font-semibold hover:underline md:text-xl">{post.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { MediaComponent };

