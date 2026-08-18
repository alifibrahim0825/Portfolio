export interface Course {
  title: string;
  number: string;
  link: string;
  university: string;
}

const courses: Course[] = [
  {
    title: "Belajar Dasar Pemrograman JavaScript",
    university: "Dicoding Indonesia",
    number: "2025",
    link: "https://www.dicoding.com/certificates/JLX76LGP2P72",
  },
  {
    title: "Belajar Dasar Pemrograman Web",
    university: "Dicoding Indonesia",
    number: "2024",
    link: "https://www.dicoding.com/certificates/53XE0G20KXRN",
  },
  {
    title: "Memulai Pemrograman Dengan Java",
    university: "Dicoding Indonesia",
    number: "2025",
    link: "https://www.dicoding.com/certificates/MEPJ2VM2WPV3",
  },
  {
    title: "IGDX Career Seminar  Career Guidance for Aspiring Game Developer",
    university: "Kementerian Komunikasi dan Informatika",
    number: "2024",
    link: "https://www.dicoding.com/certificates/IGDX2024",
  },
];

export default courses;
