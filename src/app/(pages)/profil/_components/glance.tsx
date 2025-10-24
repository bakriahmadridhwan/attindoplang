
import Image from "next/image";

const GlanceComponent = () => {
  return (
    <section id="about" className="container mx-auto px-4 xl:px-0 2xl:px-[136px] pt-10 lg:pt-20">
      <div className="lg:mx-auto">
        <div className="flex lg:flex-row flex-col gap-10">
          <div className="w-full block overflow-hidden">
            <Image
              src="/assets/profil/glance.jpg"
              alt="Tentang Pondok Pesantren AT-TIN"
              className="rounded-xl object-cover w-full lg:w-full h-[300px] lg:h-[400px] cursor-pointer bg-cover hover:scale-110 ease-in-out duration-300"
              width={500}
              height={500}
            />
          </div>
          <div className="flex flex-col items-center my-auto lg:items-end lg:text-left text-center w-full">
            <div>
              <h1 className="text-2xl font-bold text-[#129915]">Tentang AT-TIN</h1>
              {/* <h1 className={`my-6 text-pretty text-3xl font-bold lg:text-5xl`}>
              Pengasuh <span className="text-[#129915]">Pondok Pesantren AT-TIN</span>
            </h1> */}
              <p className="text-accent-foreground font-medium mb-8 max-w-xl text-sm lg:text-lg italic mt-6">
                Pondok Pesantren AT-TIN berdiri pada tahun 1998 M, tanggal 22 sya&apos;ban 1418 H. <br /> <br />
                Kemudian direhab tanggal 12 Rabiul Awal 1428 oleh <span className="text-[#129915]">K.H.R. Ahmad Abdul Haq Watucongol</span>. Nama AT-TIN diambil dari salah satu surah dalam Al Qur&apos;an yaitu surah At-Tin artinya buah tin yaitu <span className="text-[#129915]">surah ke-95 dalam Al-Qur&apos;an</span>, karena didalamnya mengandung makna sebuah pohon yang terdapat keterangan dapat digunakan untuk pengobatan.
                <br /> <br />
                <span className="text-[#129915]">K.H. Khusni Mubarok</span> dan <span className="text-[#129915]">ibu Hj. Dwi Sari Ningsih</span> beliau adalah pengasuh serta penasehat Pondok Pesantren AT-TIN Doplang Purworejo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { GlanceComponent };
