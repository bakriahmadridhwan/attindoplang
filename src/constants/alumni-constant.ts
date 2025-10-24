export const HEADER_TABLE_ALUMNI = [
  'No',
  'Nama',
  'Alamat Asal',
  'Alamat Sekarang',
  'Pekerjaan',
  'Tahun Lulus',
  'Aksi',
];

export const INITIAL_ALUMNI_FORM = {
  name: '',
  email: '',
  phone: '',
  origin_address: '',
  current_address: '',
  work: '',
  graduate: '',
};

export const INITIAL_STATE_ALUMNI = {
  status: 'idle',
  errors: {
    id: [],
    name: [],
    email: [],
    phone: [],
    origin_address: [],
    current_address: [],
    work: [],
    graduate: [],
    _form: [],
  },
};