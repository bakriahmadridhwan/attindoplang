import React from "react";
import { InformationComponent } from "./_components/information";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Informasi | Pondok Pesantren AT-TIN",
  description: "Website Resmi Pondok Pesantren AT-TIN Doplang Purworejo",
};

export default function Information() {
  return <InformationComponent />;
}
