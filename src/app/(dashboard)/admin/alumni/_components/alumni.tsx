'use client';

import DataTable from '@/components/common/data-table';
import DropdownAction from '@/components/common/dropdown-action';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { HEADER_TABLE_ALUMNI } from '@/constants/alumni-constant';
import { HEADER_TABLE_STUDENT } from '@/constants/student-constant';
import useDataTable from '@/hooks/use-data-table';
import { createClient } from '@/lib/supabase/client';
import { Alumni } from '@/validations/alumni-validation';
import { Student } from '@/validations/student-validation';
import { useQuery } from '@tanstack/react-query';
import { Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';

export default function AlumniManagement() {
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
    data: alumni,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['alumni', currentPage, currentLimit, currentSearch],
    queryFn: async () => {
      const query = supabase
        .from('alumni')
        .select('*', { count: 'exact' })
        .range((currentPage - 1) * currentLimit, currentPage * currentLimit - 1)
        .order('created_at');

      if (currentSearch) {
        query.or(
          `name.ilike.%${currentSearch}%,origin_address.ilike.%${currentSearch}%,current_address.ilike.%${currentSearch}%,graduate.ilike.%${currentSearch}%`,
        );
      }

      const result = await query;

      if (result.error)
        toast.error('Get Alumni data failed', {
          description: result.error.message,
        });

      return result;
    },
  });

  const [selectedAction, setSelectedAction] = useState<{
    data: Alumni;
    type: 'ubah' | 'hapus';
  } | null>(null);

  const handleChangeAction = (open: boolean) => {
    if (!open) setSelectedAction(null);
  };

  const filteredData = useMemo(() => {
    return (alumni?.data || []).map((alumnus: Alumni, index) => {
      return [
        currentLimit * (currentPage - 1) + index + 1,
        alumnus.name,
        alumnus.origin_address,
        alumnus.current_address,
        alumnus.work,
        alumnus.graduate,
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
                  data: alumnus,
                  type: 'ubah',
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
              variant: 'destructive',
              action: () => {
                setSelectedAction({
                  data: alumnus,
                  type: 'hapus',
                });
              },
            },
          ]}
        />,
      ];
    });
  }, [alumni]);

  const totalPages = useMemo(() => {
    return alumni && alumni.count !== null
      ? Math.ceil(alumni.count / currentLimit)
      : 0;
  }, [alumni]);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row mb-4 gap-2 justify-between w-full">
        <h1 className="text-2xl font-bold">Pengelolaan Data Alumni</h1>
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
        header={HEADER_TABLE_ALUMNI}
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
