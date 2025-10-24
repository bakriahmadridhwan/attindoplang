'use client';

import DataTable from '@/components/common/data-table';
import DropdownAction from '@/components/common/dropdown-action';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { HEADER_TABLE_STUDENT } from '@/constants/student-constant';
import useDataTable from '@/hooks/use-data-table';
import { createClient } from '@/lib/supabase/client';
import { Student } from '@/validations/student-validation';
import { useQuery } from '@tanstack/react-query';
import { Pencil, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';

export default function StudentManagement() {
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
    data: students,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ['students', currentPage, currentLimit, currentSearch],
    queryFn: async () => {
      const query = supabase
        .from('students')
        .select('*', { count: 'exact' })
        .range((currentPage - 1) * currentLimit, currentPage * currentLimit - 1)
        .order('created_at');

      if (currentSearch) {
        query.or(
          `name.ilike.%${currentSearch}%,address.ilike.%${currentSearch}%,origin_school.ilike.%${currentSearch}%,companion_name.ilike.%${currentSearch}%`,
        );
      }

      const result = await query;

      if (result.error)
        toast.error('Get Student data failed', {
          description: result.error.message,
        });

      return result;
    },
  });

  const [selectedAction, setSelectedAction] = useState<{
    data: Student;
    type: 'ubah' | 'hapus';
  } | null>(null);

  const handleChangeAction = (open: boolean) => {
    if (!open) setSelectedAction(null);
  };

  const filteredData = useMemo(() => {
    return (students?.data || []).map((student: Student, index) => {
      return [
        currentLimit * (currentPage - 1) + index + 1,
        student.name,
        student.address,
        <div>
          <Image
            src={student.avatar_url as string}
            alt={student.name}
            width={40}
            height={40}
            className="rounded"
          />
        </div>,
        student.companion_name,
        // <div className="flex items-center gap-2">
        //   <Image
        //     src={student.avatar_url as string}
        //     alt={student.name}
        //     width={40}
        //     height={40}
        //     className="rounded"
        //   />
        //   {student.name}
        // </div>,
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
                  data: student,
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
                  data: student,
                  type: 'hapus',
                });
              },
            },
          ]}
        />,
      ];
    });
  }, [students]);

  const totalPages = useMemo(() => {
    return students && students.count !== null
      ? Math.ceil(students.count / currentLimit)
      : 0;
  }, [students]);

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-row mb-4 gap-2 justify-between w-full">
        <h1 className="text-2xl font-bold">Pengelolaan Santri</h1>
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
        header={HEADER_TABLE_STUDENT}
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
