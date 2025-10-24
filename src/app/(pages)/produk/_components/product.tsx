
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
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  ig: boolean;
}

interface ProductProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const ProductComponent = ({
  tagline = "Latest Updates",
  heading = "Produk",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "#",
  posts = [
    {
      id: "post-1",
      title: "Madu ATINA",
      summary:
        "",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "#",
      image: "/assets/product/maduatina.jpg",
      ig: true
    },
    {
      id: "post-2",
      title: "ATINA Galon",
      summary:
        "",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "#",
      image: "/assets/product/galon.jpg",
      ig: false
    },
    {
      id: "post-3",
      title: "Survenir Haji dan Umroh",
      summary:
        "",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "#",
      image: "/assets/product/survenir.jpg",
      ig: false
    },
  ],
}: ProductProps) => {
  return (
    <section className="pt-10 lg:pt-20 px-4 xl:px-0 2xl:px-[136px]">
      <div className="container mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col gap-4 md:gap-0 justify-center items-center w-full">
          <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-4xl">
            {heading}
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="grid grid-rows-[auto_auto_1fr_auto] pt-0 overflow-hidden"
            >
              <div className="aspect-16/9 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover object-center cursor-pointer bg-cover hover:scale-110 ease-in-out duration-300"
                />
              </div>
              <CardHeader>
                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.summary}</p>
              </CardContent>
              <CardFooter className="flex items-center gap-4">
                {post.ig && (
                  <a
                    href={post.url}
                    target="_blank"
                    className="flex items-center text-foreground hover:underline"
                  >
                    <FaInstagram className="size-6 hover:text-[#129915]" />
                  </a>
                )}
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  <FaWhatsapp className="size-6 hover:text-[#129915]" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { ProductComponent };

