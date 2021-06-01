export function formatMovieDuration(durationInMinutes) {
  const hours = Math.floor(durationInMinutes / 60)
  const extraMinutes = durationInMinutes % 60

  return `${hours}h ${extraMinutes}m`
}
