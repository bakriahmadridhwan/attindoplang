export const HEADER_TABLE_STUDENT = [
  'No',
  'Nama',
  'Alamat',
  'Foto',
  'Nama Pendamping',
  'Aksi',
];

export const INITIAL_STUDENT_FORM = {
  name: '',
  email: '',
  identity_number: '',
  phone: '',
  address: '',
  avatar_url: '',
  origin_school: '',
  school_now: '',
  companion: '',
  companion_nik: '',
  kk: '',
  companion_name: '',
  companion_phone: '',
  companion_address: '',
  companion_work: '',
};

export const COMPANION_LIST = [
  {
    value: 'ayah',
    label: 'Ayah',
  },
  {
    value: 'ibu',
    label: 'Ibu',
  },
  {
    value: 'wali',
    label: 'Wali',
  },
];

export const INITIAL_STATE_STUDENT = {
  status: 'idle',
  errors: {
    id: [],
    name: [],
    email: [],
    identity_number: [],
    phone: [],
    address: [],
    avatar_url: [],
    origin_school: [],
    school_now: [],
    companion: [],
    companion_nik: [],
    kk: [],
    companion_name: [],
    companion_phone: [],
    companion_address: [],
    companion_work: [],
    _form: [],
  },
};
