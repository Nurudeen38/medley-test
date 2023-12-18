import { format, parseISO } from 'date-fns';

export function formatDate(date: string) {
  const parsedDate = parseISO(date);
  const formattedDate = format(parsedDate, 'E, MMM dd');
 
  return formattedDate;
}
