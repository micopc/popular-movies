import { getYear, isValid, parseISO } from 'date-fns'

export function getYearFromDate(input: string) {
  const date = parseISO(input)

  if (!isValid(date)) {
    return null
  }

  return getYear(date)
}
