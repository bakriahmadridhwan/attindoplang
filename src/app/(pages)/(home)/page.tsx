import { AboutComponent } from './_components/about';
import { ContactComponent } from './_components/contact';
import { HeroComponent } from './_components/hero';
import { NewsComponent } from './_components/news';
import { LayananComponent } from './_components/service';
import VideoComponent from './_components/video';

export default function Home() {
  return (
    <main>
      {/* <BannerComponent /> */}
      {/* <NavbarComponent /> */}
      {/* <FooterComponent /> */}
      <HeroComponent />
      <NewsComponent />
      <AboutComponent />
      <VideoComponent />
      <LayananComponent />
      <ContactComponent />
    </main>
  );
}
