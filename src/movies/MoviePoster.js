import { Link } from '@ui'
import { imagePathFor } from '@common'

export default function MoviePoster({ id, title, image }) {
  return (
    <Link href={`/movies/${id}`} className="block relative pt-150%">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={imagePathFor(image, 185)}
        alt={title}
      />
    </Link>
  )
}
