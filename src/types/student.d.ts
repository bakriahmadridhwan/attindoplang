export type StudentFormState = {
  status?: string;
  errors?: {
    id?: string[];
    name?: string[];
    email?: string[];
    identity_number?: string[];
    phone?: string[];
    address?: string[];
    avatar_url?: string[];
    origin_school?: string[];
    school_now?: string[];
    companion?: string[];
    companion_nik?: string[];
    kk?: string[];
    companion_name?: string[];
    companion_phone?: string[];
    companion_address?: string[];
    companion_work?: string[];
    _form?: string[];
  };
};
