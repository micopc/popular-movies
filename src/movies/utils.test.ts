import { formatMovieDuration } from './utils'

describe('formatMovieDuration', () => {
  test('returns hours and minutes', () => {
    expect(formatMovieDuration(110)).toEqual('1h 50m')
  })

  test('returns just minutes', () => {
    expect(formatMovieDuration(40)).toEqual('40m')
  })
})
