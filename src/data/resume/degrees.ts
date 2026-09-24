export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'SMK Wikrama Bogor',
    degree: 'Vocational High School (SMK)',
    link: 'https://smkwikrama.sch.id/',
    year: 2024,
  },
];

export default degrees;
