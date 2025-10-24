'use server';

import { deleteFile, uploadFile } from '@/actions/storage-action';
import { createClient } from '@/lib/supabase/server';
import { MenuFormState } from '@/types/menu';
import { StudentFormState } from '@/types/student';
import { menuSchema } from '@/validations/menu-validation';
import { studentSchema } from '@/validations/student-validation';

export async function createStudent(prevState: StudentFormState, formData: FormData) {
  let validatedFields = studentSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    identity_number: formData.get('identity_number'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    avatar_url: formData.get('avatar_url'),
    origin_school: formData.get('origin_school'),
    school_now: formData.get('school_now'),
    companion: formData.get('companion'),
    companion_nik: formData.get('companion_nik'),
    kk: formData.get('kk'),
    companion_name: formData.get('companion_name'),
    companion_phone: formData.get('companion_phone'),
    companion_address: formData.get('companion_address'),
    companion_work: formData.get('companion_work'),
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
        _form: [],
      },
    };
  }

  if (validatedFields.data.avatar_url instanceof File) {
    const { errors, data } = await uploadFile(
      'images',
      'students',
      validatedFields.data.avatar_url,
    );
    if (errors) {
      return {
        status: 'error',
        errors: {
          ...prevState.errors,
          _form: [...errors._form],
        },
      };
    }

    validatedFields = {
      ...validatedFields,
      data: {
        ...validatedFields.data,
        avatar_url: data.url,
      },
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.from('students').insert({
    name: validatedFields.data.name,
    email: validatedFields.data.email,
    identity_number: validatedFields.data.identity_number,
    phone: validatedFields.data.phone,
    address: validatedFields.data.address,
    avatar_url: validatedFields.data.avatar_url,
    origin_school: validatedFields.data.origin_school,
    school_now: validatedFields.data.school_now,
    companion: validatedFields.data.companion,
    companion_nik: validatedFields.data.companion_nik,
    kk: validatedFields.data.kk,
    companion_name: validatedFields.data.companion_name,
    companion_phone: validatedFields.data.companion_phone,
    companion_address: validatedFields.data.companion_address,
    companion_work: validatedFields.data.companion_work,
  });

  if (error) {
    return {
      status: 'error',
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  return {
    status: 'success',
  };
}

export async function updateMenu(prevState: MenuFormState, formData: FormData) {
  let validatedFields = menuSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
    price: parseFloat(formData.get('price') as string),
    discount: parseFloat(formData.get('discount') as string),
    category: formData.get('category'),
    image_url: formData.get('image_url'),
    is_available: formData.get('is_available') === 'true' ? true : false,
  });

  if (!validatedFields.success) {
    return {
      status: 'error',
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
        _form: [],
      },
    };
  }

  if (validatedFields.data.image_url instanceof File) {
    const oldImageUrl = formData.get('old_image_url') as string;
    const { errors, data } = await uploadFile(
      'images',
      'menus',
      validatedFields.data.image_url,
      oldImageUrl.split('/images/')[1],
    );
    if (errors) {
      return {
        status: 'error',
        errors: {
          ...prevState.errors,
          _form: [...errors._form],
        },
      };
    }

    validatedFields = {
      ...validatedFields,
      data: {
        ...validatedFields.data,
        image_url: data.url,
      },
    };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from('menus')
    .update({
      name: validatedFields.data.name,
      description: validatedFields.data.description,
      price: validatedFields.data.price,
      discount: validatedFields.data.discount,
      category: validatedFields.data.category,
      image_url: validatedFields.data.image_url,
      is_available: validatedFields.data.is_available,
    })
    .eq('id', formData.get('id'));

  if (error) {
    return {
      status: 'error',
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  return {
    status: 'success',
  };
}

export async function deleteMenu(prevState: MenuFormState, formData: FormData) {
  const supabase = await createClient();
  const image = formData.get('image_url') as string;
  const { status, errors } = await deleteFile(
    'images',
    image.split('/images/')[1],
  );

  if (status === 'error') {
    return {
      status: 'error',
      errors: {
        ...prevState.errors,
        _form: [errors?._form?.[0] ?? 'Unknown error'],
      },
    };
  }

  const { error } = await supabase
    .from('menus')
    .delete()
    .eq('id', formData.get('id'));

  if (error) {
    return {
      status: 'error',
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  return { status: 'success' };
}
