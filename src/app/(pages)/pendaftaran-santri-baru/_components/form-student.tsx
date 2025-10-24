"use client";

import FormInput from '@/components/common/form-input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Form } from '@/components/ui/form'
import React from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { startTransition, useActionState, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Preview } from '@/types/general';
import { MenuForm, menuFormSchema } from '@/validations/menu-validation';
import { INITIAL_MENU, INITIAL_STATE_MENU } from '@/constants/menu-constant';
import { StudentForm, studentSchemaForm } from '@/validations/student-validation'
import { COMPANION_LIST, INITIAL_STATE_STUDENT, INITIAL_STUDENT_FORM } from '@/constants/student-constant'
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Loader2, PopcornIcon } from 'lucide-react';
import FormImage from '@/components/common/form-image';
import FormSelect from '@/components/common/form-select';
import { createStudent } from '../actions';

export default function FormStudent() {

  const form = useForm<StudentForm>({
    resolver: zodResolver(studentSchemaForm),
    defaultValues: INITIAL_STUDENT_FORM,
  });

  const [createStudentState, createStudentAction, isPendingCreateStudent] =
    useActionState(createStudent, INITIAL_STATE_STUDENT);

  const [preview, setPreview] = useState<Preview | undefined>(undefined);

  const onSubmit = form.handleSubmit((data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, key === 'avatar_url' ? preview!.file ?? '' : value);
    });

    startTransition(() => {
      createStudentAction(formData);
    });
  });

  useEffect(() => {
    if (createStudentState?.status === 'error') {
      toast.error('Create Student Failed', {
        description: createStudentState.errors?._form?.[0],
      });
    }

    if (createStudentState?.status === 'success') {
      toast.success('Create Student Success');
      form.reset();
      setPreview(undefined);
      document.querySelector<HTMLButtonElement>('[data-state="open"]')?.click();
      // refetch();
    }
  }, [createStudentState]);

  return (
    <div>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Formulir Pendaftaran Santri Baru</CardTitle>
          <CardDescription>Silahkan isi formulir di bawah ini</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={onSubmit}>
              <div className='flex flex-col md:flex-row gap-10'>
                <div className="space-y-4 w-full">
                  <Alert className='bg-emerald-700'>
                    <PopcornIcon />
                    <AlertTitle>
                      Data Calon Santri
                    </AlertTitle>
                  </Alert>
                  <FormInput
                    form={form}
                    name="name"
                    label="Nama Lengkap"
                    placeholder="Masukkan Nama Lengkap"
                    type="text"
                  />
                  <FormInput
                    form={form}
                    name="email"
                    label="Email"
                    placeholder="Masukkan Email"
                    type="email"
                  />
                  <FormInput
                    form={form}
                    name="identity_number"
                    label="Nomor Identitas (NIK/Kartu Pelajar)"
                    placeholder="Masukkan Nomor Identitas (NIK/Kartu Pelajar)"
                    type="text"
                  />
                  <FormInput
                    form={form}
                    name="phone"
                    label="Nomor Telepon"
                    placeholder="Masukkan Nomor Telepon"
                    type="text"
                  />
                  <FormInput
                    form={form}
                    name="address"
                    label="Alamat"
                    placeholder="Masukkan Alamat"
                    type="text"
                  />
                  <FormImage
                    form={form}
                    name={'avatar_url'}
                    label="Foto"
                    preview={preview}
                    setPreview={setPreview}
                  />
                  <FormInput
                    form={form}
                    name="origin_school"
                    label="Sekolah Asal"
                    placeholder="Masukkan Sekolah Asal"
                    type="text"
                  />
                  <FormInput
                    form={form}
                    name="school_now"
                    label="Sekolah Sekarang"
                    placeholder="Masukkan Sekolah Sekarang"
                    type="text"
                  />
                </div>
                <div className="space-y-4 w-full">
                  <Alert className='bg-emerald-700'>
                    <PopcornIcon />
                    <AlertTitle>
                      Data Pendamping
                    </AlertTitle>
                  </Alert>
                  <FormSelect
                    form={form}
                    name={'companion'}
                    label="Pilih Pendamping (salah satu)"
                    selectItem={COMPANION_LIST}
                  />
                  <FormInput
                    form={form}
                    name="companion_nik"
                    label="NIK Pendamping"
                    placeholder="Masukkan NIK Pendamping"
                    type="text"
                  />
                  <FormInput
                    form={form}
                    name="kk"
                    label="Nomor Kartu Keluarga (KK)"
                    placeholder="Masukkan Nomor Kartu Keluarga (KK)"
                    type="text"
                  />
                  <FormInput
                    form={form}
                    name="companion_name"
                    label="Nama Pendamping"
                    placeholder="Masukkan Nama Pendamping"
                    type="text"
                  />
                  <FormInput
                    form={form}
                    name="companion_phone"
                    label="Nomor Telepon Pendamping"
                    placeholder="Masukkan Nomor Telepon Pendamping"
                    type="text"
                  />
                  <FormInput
                    form={form}
                    name="companion_address"
                    label="Alamat Pendamping"
                    placeholder="Masukkan Alamat Pendamping"
                    type="text"
                  />
                  <FormInput
                    form={form}
                    name="companion_work"
                    label="Pekerjaan Pendamping"
                    placeholder="Masukkan Pekerjaan Pendamping"
                    type="text"
                  />
                </div>
              </div>
              <div className='flex justify-center items-center mt-4'>
                <Button type="submit" className='md:w-fit w-full'>
                  {isPendingCreateStudent ? <Loader2 className="animate-spin" /> : "DAFTAR"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
