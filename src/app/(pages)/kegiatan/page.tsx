import React from "react";
import { ActivityComponent } from "./_components/activity";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kegiatan | Pondok Pesantren AT-TIN",
  description: "Website Resmi Pondok Pesantren AT-TIN Doplang Purworejo",
};

export default function Activity() {
  return <ActivityComponent />;
}
