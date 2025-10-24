export type AlumniFormState = {
  status?: string;
  errors?: {
    id?: string[];
    name?: string[];
    email?: string[];
    phone?: string[];
    origin_address?: string[];
    current_address?: string[];
    work?: string[];
    graduate?: string[];
    _form?: string[];
  };
};
