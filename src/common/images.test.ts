import { BASE_IMAGE_PATH, imagePathFor } from './images'

describe('imagePathFor', () => {
  const fakePath = 'abcd1234'

  test('returns path for a specific width', () => {
    expect(imagePathFor(fakePath, 185)).toEqual(
      `${BASE_IMAGE_PATH}/w185/${fakePath}`
    )
  })

  test('uses the original image if no width (2nd argument) is passed', () => {
    expect(imagePathFor(fakePath)).toEqual(
      `${BASE_IMAGE_PATH}/original/${fakePath}`
    )
  })
})
