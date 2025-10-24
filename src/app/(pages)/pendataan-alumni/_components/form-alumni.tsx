"use client";

import FormInput from '@/components/common/form-input';
import { Alert, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { INITIAL_ALUMNI_FORM, INITIAL_STATE_ALUMNI } from '@/constants/alumni-constant';
import { AlumniForm, alumniSchemaForm } from '@/validations/alumni-validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2, PopcornIcon } from 'lucide-react';
import { startTransition, useActionState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { createAlumni } from '../actions';

export default function FormAlumni() {

  const form = useForm<AlumniForm>({
    resolver: zodResolver(alumniSchemaForm),
    defaultValues: INITIAL_ALUMNI_FORM,
  });

  const [createAlumniState, createAlumniAction, isPendingCreateAlumni] =
    useActionState(createAlumni, INITIAL_STATE_ALUMNI);

  const onSubmit = form.handleSubmit((data) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    startTransition(() => {
      createAlumniAction(formData);
    });
  });

  useEffect(() => {
    if (createAlumniState?.status === 'error') {
      toast.error('Create Alumni Failed', {
        description: createAlumniState.errors?._form?.[0],
      });
    }

    if (createAlumniState?.status === 'success') {
      toast.success('Create Alumni Success');
      form.reset();
      document.querySelector<HTMLButtonElement>('[data-state="open"]')?.click();
      // refetch();
    }
  }, [createAlumniState]);

  return (
    <div>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Formulir Pendataan Alumni</CardTitle>
          <CardDescription>Silahkan isi formulir di bawah ini</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={onSubmit} className='space-y-4'>
              <Alert className='bg-emerald-700'>
                <PopcornIcon />
                <AlertTitle>
                  Data Alumni
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
                name="phone"
                label="Nomor Telepon"
                placeholder="Masukkan Nomor Telepon"
                type="text"
              />
              <FormInput
                form={form}
                name="origin_address"
                label="Alamat Asal"
                placeholder="Masukkan Alamat Asal"
                type="text"
              />
              <FormInput
                form={form}
                name="current_address"
                label="Alamat Sekarang"
                placeholder="Masukkan Alamat Sekarang"
                type="text"
              />
              <FormInput
                form={form}
                name="work"
                label="Pekerjaan"
                placeholder="Masukkan Pekerjaan"
                type="text"
              />
              <FormInput
                form={form}
                name="graduate"
                label="Tahun Lulus"
                placeholder="Masukkan Tahun Lulus"
                type="text"
              />
              <div className='flex justify-center items-center mt-4'>
                <Button type="submit" className='md:w-fit w-full'>
                  {isPendingCreateAlumni ? <Loader2 className="animate-spin" /> : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
