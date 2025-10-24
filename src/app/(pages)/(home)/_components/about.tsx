
import Image from "next/image";

// import { Orbitron } from "next/font/google";

// const orbitron = Orbitron({ subsets: ["latin"] });

const AboutComponent = () => {
  return (
    <section id="about" className="container mx-auto px-4 lg:px-8 pt-10 lg:pt-20 xl:px-0 2xl:px-[136px]">
      <div className="w-full lg:mx-auto">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="flex flex-col items-center my-auto lg:items-end lg:text-right text-center w-full">
            {/* <h1 className={`my-6 text-pretty text-3xl font-bold lg:text-5xl`}>
              Pengasuh <span className="text-[#129915]">Pondok Pesantren AT-TIN</span>
            </h1> */}
            <p className="text-accent-foreground font-medium mb-8 max-w-xl text-sm lg:text-lg italic mt-6">
              Mendorong anak-anak sekolah yang tinggal di pesantren untuk lebih menyadari pentingnya memanfaatkan waktu setelah kegiatan belajar mengajar (KBM) di sekolah, sehingga mereka lebih memilih tinggal di pesantren daripada di kos.
            </p>
            <h1 className="mt-0 lg:mt-6 text-pretty text-lg font-bold text-[#129915]">K. H. Khusni Mubarok</h1>
            <p>Pengasuh <span>Pondok Pesantren AT-TIN Doplang</span></p>
            {/* <svg
              className="w-full"
              height="81"
              viewBox="0 0 710 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 71C105.403 30.6415 216.971 18.3204 319.353 25.5889C340.732 27.1067 361.503 31.7555 382.443 36.2074C415.148 43.1605 446.712 48.5625 480.309 48.2568C556.077 47.5674 627.671 31.4361 700 10"
                stroke="#EDEAE3"
                strokeWidth={20}
                strokeLinecap="round"
              ></path>
            </svg> */}

          </div>
          <div className="w-full block overflow-hidden">
            <Image
              src="/assets/homepage/about2.jpg"
              alt="about us labsco2"
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

export { AboutComponent };
