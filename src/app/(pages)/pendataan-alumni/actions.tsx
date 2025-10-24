"use server";

import { deleteFile, uploadFile } from "@/actions/storage-action";
import { createClient } from "@/lib/supabase/server";
import { AlumniFormState } from "@/types/alumni";
import { MenuFormState } from "@/types/menu";
import { StudentFormState } from "@/types/student";
import { alumniSchema } from "@/validations/alumni-validation";
import { menuSchema } from "@/validations/menu-validation";
import { studentSchema } from "@/validations/student-validation";

export async function createAlumni(
  prevState: AlumniFormState,
  formData: FormData
) {
  const validatedFields = alumniSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    origin_address: formData.get("origin_address"),
    current_address: formData.get("current_address"),
    work: formData.get("work"),
    graduate: formData.get("graduate"),
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
        _form: [],
      },
    };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("alumni").insert({
    name: validatedFields.data.name,
    email: validatedFields.data.email,
    phone: validatedFields.data.phone,
    origin_address: validatedFields.data.origin_address,
    current_address: validatedFields.data.current_address,
    work: validatedFields.data.work,
    graduate: validatedFields.data.graduate,
  });

  if (error) {
    return {
      status: "error",
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  return {
    status: "success",
  };
}

export async function updateMenu(prevState: MenuFormState, formData: FormData) {
  let validatedFields = menuSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
    price: parseFloat(formData.get("price") as string),
    discount: parseFloat(formData.get("discount") as string),
    category: formData.get("category"),
    image_url: formData.get("image_url"),
    is_available: formData.get("is_available") === "true" ? true : false,
  });

  if (!validatedFields.success) {
    return {
      status: "error",
      errors: {
        ...validatedFields.error.flatten().fieldErrors,
        _form: [],
      },
    };
  }

  if (validatedFields.data.image_url instanceof File) {
    const oldImageUrl = formData.get("old_image_url") as string;
    const { errors, data } = await uploadFile(
      "images",
      "menus",
      validatedFields.data.image_url,
      oldImageUrl.split("/images/")[1]
    );
    if (errors) {
      return {
        status: "error",
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
    .from("menus")
    .update({
      name: validatedFields.data.name,
      description: validatedFields.data.description,
      price: validatedFields.data.price,
      discount: validatedFields.data.discount,
      category: validatedFields.data.category,
      image_url: validatedFields.data.image_url,
      is_available: validatedFields.data.is_available,
    })
    .eq("id", formData.get("id"));

  if (error) {
    return {
      status: "error",
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  return {
    status: "success",
  };
}

export async function deleteMenu(prevState: MenuFormState, formData: FormData) {
  const supabase = await createClient();
  const image = formData.get("image_url") as string;
  const { status, errors } = await deleteFile(
    "images",
    image.split("/images/")[1]
  );

  if (status === "error") {
    return {
      status: "error",
      errors: {
        ...prevState.errors,
        _form: [errors?._form?.[0] ?? "Unknown error"],
      },
    };
  }

  const { error } = await supabase
    .from("menus")
    .delete()
    .eq("id", formData.get("id"));

  if (error) {
    return {
      status: "error",
      errors: {
        ...prevState.errors,
        _form: [error.message],
      },
    };
  }

  return { status: "success" };
}
