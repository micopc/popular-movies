import { getYear, isValid, parseISO } from 'date-fns'

export function getYearFromDate(input) {
  const date = parseISO(input)

  if (!isValid(date)) {
    return null
  }

  return getYear(date)
}
