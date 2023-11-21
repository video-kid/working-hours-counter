import { format } from 'date-fns';

export const epochToDate = (epoch: number) => {
  const date = new Date(epoch);
  return date;
};

export const dateToEpoch = (date: string) => Date.parse(date);

export const dateToDateFieldFormat = (date: Date) =>
  format(new Date(date), 'yyyy-MM-dd');
