/**
 * Conforms to https://jsonresume.org/schema/
 */
export interface Position {
  name: string;
  position: string;
  url: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

const work: Position[] = [
  {
    name: 'EnergyX369',
    position: 'Intership Student',
    url: 'https://www.energyx.co.id/',
    startDate: '2024-07-01',
    summary: `EnergyX369 is a company that focuses on developing innovative solutions in the energy sector, with a particular emphasis on renewable energy technologies and sustainable practices.`,
  },
];

export default work;
