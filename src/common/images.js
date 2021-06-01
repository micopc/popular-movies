const BASE_IMAGE_PATH = 'https://image.tmdb.org/t/p/'

export function imagePathFor(path, width) {
  const size = width ? `w${width}` : 'original'

  return `${BASE_IMAGE_PATH}/${size}/${path}`
}
