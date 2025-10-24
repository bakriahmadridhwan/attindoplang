"use client";

import DataTable from "@/components/common/data-table";
import DropdownAction from "@/components/common/dropdown-action";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { HEADER_TABLE_INFORMATION_IMAGE } from "@/constants/information-image-constant";
import { HEADER_TABLE_STUDENT } from "@/constants/student-constant";
import useDataTable from "@/hooks/use-data-table";
import { createClient } from "@/lib/supabase/client";
import { InformationImage } from "@/validations/information-image-validation";
import { Student } from "@/validations/student-validation";
import { useQuery } from "@tanstack/react-query";
import { Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { toast } from "sonner";

export default function InformationImagesComponent() {
  const supabase = createClient();
  const {
    currentPage,
    currentLimit,
    currentSearch,
    handleChangePage,
    handleChangeLimit,
    handleChangeSearch,
  } = useDataTable();
  const {
    data: information_images,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["information_images", currentPage, currentLimit, currentSearch],
    queryFn: async () => {
      const query = supabase
        .from("information_images")
        .select("*", { count: "exact" })
        .range((currentPage - 1) * currentLimit, currentPage * currentLimit - 1)
        .order("created_at");

      if (currentSearch) {
        query.or(
          `title.ilike.%${currentSearch}%,status.ilike.%${currentSearch}%`
        );
      }

      const result = await query;

      if (result.error)
        toast.error("Get Information Image data failed", {
          description: result.error.message,
        });

      return result;
    },
  });

  const [selectedAction, setSelectedAction] = useState<{
    data: InformationImage;
    type: "ubah" | "hapus";
  } | null>(null);

  const handleChangeAction = (open: boolean) => {
    if (!open) setSelectedAction(null);
  };

  const filteredData = useMemo(() => {
    return (information_images?.data || []).map(
      (information_image: InformationImage, index) => {
        return [
          currentLimit * (currentPage - 1) + index + 1,
          <div>
            <Image
              src={information_image.image_url as string}
              alt={information_image.title}
              width={40}
              height={40}
              className="rounded"
            />
          </div>,
          information_image.title,
          information_image.status,
          <DropdownAction
            menu={[
              {
                label: (
                  <span className="flex item-center gap-2">
                    <Pencil />
                    Ubah
                  </span>
                ),
                action: () => {
                  setSelectedAction({
                    data: information_image,
                    type: "ubah",
                  });
                },
              },
              {
                label: (
                  <span className="flex item-center gap-2">
                    <Trash2 className="text-red-400" />
                    Hapus
                  </span>
                ),
                variant: "destructive",
                action: () => {
                  setSelectedAction({
                    data: information_image,
                    type: "hapus",
                  });
                },
              },
            ]}
          />,
        ];
      }
    );
  }, [information_images]);

  const totalPages = useMemo(() => {
    return information_images && information_images.count !== null
      ? Math.ceil(information_images.count / currentLimit)
      : 0;
  }, [information_images]);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row mb-4 gap-2 justify-between w-full">
        <h1 className="text-2xl font-bold">
          Pengelolaan Data Informasi Gambar
        </h1>
        <div className="flex gap-2">
          <Input
            placeholder="Cari..."
            onChange={(e) => handleChangeSearch(e.target.value)}
          />
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Tambah</Button>
            </DialogTrigger>
          </Dialog>
        </div>
      </div>
      <DataTable
        header={HEADER_TABLE_INFORMATION_IMAGE}
        data={filteredData}
        isLoading={isLoading}
        totalPages={totalPages}
        currentPage={currentPage}
        currentLimit={currentLimit}
        onChangePage={handleChangePage}
        onChangeLimit={handleChangeLimit}
      />
    </div>
  );
}
