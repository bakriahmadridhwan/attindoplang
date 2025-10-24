import { GlanceComponent } from './_components/glance'
import { PurposeComponent } from './_components/purpose'
import { VisiMisiComponent } from './_components/visi-misi'

export const metadata = {
  title: "AT-TIN | Profil",
  description: "Website Resmi Pondok Pesantren AT-TIN Doplang Purworejo",
}

export default function Profil() {
  return (
    <main>
      <GlanceComponent />
      <VisiMisiComponent />
      <PurposeComponent />
    </main>
  )
}
