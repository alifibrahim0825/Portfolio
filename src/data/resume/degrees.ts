export interface Degree {
  school: string;
  degree: string;
  link: string;
  year: number;
}

const degrees: Degree[] = [
  {
    school: 'SMK Wikrama Bogor',
    degree: 'SMK Wikrama Bogor',
    link: 'https://smkwikrama.sch.id/',
    year: 2024,
  },
  {
    school: 'MTs Fathan Mubina',
    degree: 'MTs Fathan Mubina',
    link: '',
    year: 2020,
  },
  {
    school: 'SDN Ciawi 03',
    degree: 'SDN Ciawi 03',
    link: '',
    year: 2016,
  },
];

export default degrees;
