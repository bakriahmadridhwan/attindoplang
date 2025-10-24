
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
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
}

interface InformationProps {
  tagline?: string;
  heading?: string;
  description?: string;
  buttonText?: string;
  buttonUrl?: string;
  posts?: Post[];
}

const Information = ({
  tagline = "Latest Updates",
  heading = "Informasi",
  description = "Discover the latest trends, tips, and best practices in modern web development. From UI components to design systems, stay updated with our expert insights.",
  buttonText = "View all articles",
  buttonUrl = "#",
  posts = [
    {
      id: "post-1",
      title: "Pendidikan",
      summary:
        "Program pendidikan dari para ustadz mengadakan bandungan dan sorogan atau tes yang diujikan sesuai kemampuan masing-masing santri dan sudah terjadwalkan.",
      label: "Tutorial",
      author: "Sarah Chen",
      published: "1 Jan 2024",
      url: "#",
      image: "/assets/homepage/pendidikan.jpg",
    },
    {
      id: "post-2",
      title: "Konsultasi",
      summary:
        "Konsultasi untuk memberi pencerahan terhadap keluhan-keluhan yang dialami atau diderita dari pasien.",
      label: "Accessibility",
      author: "Marcus Rodriguez",
      published: "1 Jan 2024",
      url: "#",
      image: "/assets/homepage/konsultasi.jpg",
    },
    {
      id: "post-3",
      title: "Khitan Modern",
      summary:
        "Omah Khitan Modern dengan keunggulan seperti, nyeri sangat minimal, menggunakan alat khitan dan bius modern, tanpa jarum suntik, tanpa jahitan, tanpa perban.",
      label: "Design Systems",
      author: "Emma Thompson",
      published: "1 Jan 2024",
      url: "#",
      image: "/assets/homepage/khitan.jpg",
    },
  ],
}: InformationProps) => {
  return (
    <section className="pt-10 lg:pt-20 px-4 xl:px-0 2xl:px-[136px]">
      <div className="container mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col gap-4 md:gap-0 justify-center items-center w-full">
          <div className="text-center">
            <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-4xl">
              {heading}
            </h2>
          </div>
          <div>
            <Input
              type="text"
              placeholder="Cari Informasi..."
              className="w-full md:w-80"
            />
          </div>
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
              <CardFooter>
                <a
                  href={post.url}
                  target="_blank"
                  className="flex items-center text-foreground hover:underline"
                >
                  Read more
                  <ArrowRight className="ml-2 size-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>

        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#" isActive>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  );
};

export { Information as InformationComponent };

