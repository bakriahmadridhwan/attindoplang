
import Image from "next/image";

const PurposeComponent = () => {
  return (
    <section id="about" className="container mx-auto px-4 xl:px-0 2xl:px-[136px] pt-10 lg:pt-20">
      <div className="lg:mx-auto">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex flex-col items-center my-auto lg:items-end lg:text-right text-center w-full">
            <h1 className="text-2xl font-bold text-[#129915]">Tujuan</h1>
            <p className="text-accent-foreground font-medium mb-8 max-w-xl text-sm lg:text-lg italic mt-6">
              Membentuk santri yang berakhlaqul karimah.
            </p>
          </div>
          <div className="w-full block overflow-hidden">
            <Image
              src="/assets/profil/purpose.jpg"
              alt="Tentang Pondok Pesantren AT-TIN"
              className="rounded-xl object-cover w-full lg:w-full h-[300px] lg:h-[400px] cursor-pointer bg-cover hover:scale-110 ease-in-out duration-300"
              width={500}
              height={500}
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export { PurposeComponent };
