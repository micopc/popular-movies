import { getYearFromDate } from './dates'

describe('getYearFromDate', () => {
  test('returns the year from a valid ISO date', () => {
    expect(getYearFromDate('2021-02-12')).toEqual(2021)
  })

  test('returns null for invalid dates', () => {
    expect(getYearFromDate('invalid')).toEqual(null)
  })
})
