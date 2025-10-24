import { DarkmodeToggle } from '@/components/common/darkmode-toggle';
import Home from './(pages)/(home)/page';

export const metadata = {
  title: "AT-TIN | Halaman Utama",
  description: "Website Resmi Pondok Pesantren AT-TIN Doplang Purworejo",
}

export default function Root() {
  return (
    <Home />
  );
}
