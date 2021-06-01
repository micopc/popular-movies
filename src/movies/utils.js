export function formatMovieDuration(durationInMinutes) {
  if (!durationInMinutes) {
    return null
  }

  if (typeof durationInMinutes !== 'number') {
    throw new Error('You must pass a number')
  }

  const hours = Math.floor(durationInMinutes / 60)
  const extraMinutes = durationInMinutes % 60

  if (hours === 0) {
    return `${extraMinutes}m`
  }

  return `${hours}h ${extraMinutes}m`
}
